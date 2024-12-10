import { comparePassword, hashPassword } from '../helpers/authHelper.js';
import userModel from '../models/userModel.js';
import JWT from 'jsonwebtoken';

export const registerController = async (req,res) => {
    try {
        const {name, email, phone, password, gender, address, question, answer} = req.body
        //validations
        if(!name){
            return res.send({message:'Name is Required!'})
        }
        if(!email){
            return res.send({message:'Email is Required!'})
        }
        if(!phone){
            return res.send({message:'Phone is Required!'})
        }
        if(!password){
            return res.send({message:'Password is Required!'})
        }
        if(!gender){
            return res.send({message:'Gender is Required!'})
        }
        if(!address){
            return res.send({message:'Address is Required!'})
        }
        if(!question){
            return res.send({message:'Secret Question is Required!'})
        }
        if(!answer){
            return res.send({message:'Answer is Required!'})
        }

        const ExUser = await userModel.findOne({email})
        //if user exists
        if(ExUser){
            return res.status(200).send({
                success:false,
                message:'User Already Exists!',
            })
        }
        //register user
        const hashedPass = await hashPassword(password)
        //save
        const user = await new userModel({
            name, email, phone, gender, address, password: hashedPass, question, answer}).save()

        res.status(201).send({
            success:true,
            message:'User Registered Sucessfully',
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message: 'Error in Registeration!',
            error
        })
    }
};

//POST LOGIN
export const loginController = async (req,res) => {
    try {
        const {email, password} = req.body
        //validation
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:'Invalid Email or Password'
            })
        }
        //check user
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:'Email not registered'
            })
        }
        //check password
        const match = await comparePassword(password, user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message:'Password incorrect'
            })
        }
        //token
        const token = await JWT.sign({_id:user._id}, process.env.JWT_SECRET, {expiresIn: '7d'})
        res.status(200).send({
            success:true,
            message:'Login Sucessfully',
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role: user.role,
            },
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Login Unsucessfull',
            error
        })        
    }
};

//forgotPasswordController
export const forgotPasswordController = async (req, res) => {
    try {
      const { email, question, answer, newPassword } = req.body;
      if (!email) {
        res.status(400).send({ message: "Email is required" });
      }
      if (!question) {
        res.status(400).send({ message: "Question is required" });
      }
      if (!answer) {
        res.status(400).send({ message: "Answer is required" });
      }
      if (!newPassword) {
        res.status(400).send({ message: "New Password is required" });
      }
      //check
      const user = await userModel.findOne({ email, answer });
      //validation
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "Wrong Email or Answer",
        });
      }
      const hashed = await hashPassword(newPassword);
      await userModel.findByIdAndUpdate(user._id, { password: hashed });
      res.status(200).send({
        success: true,
        message: "Password Reset Successfully", 
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Something went wrong",
        error,
      });
    }
};

//test controller
export const testController = (req,res) => {
    try {
        res.send('Protected Routes')        
    } catch (error) {
        console.log(error);
        res.send({ error });
    }
};