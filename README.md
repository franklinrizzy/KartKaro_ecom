# KartKaro - Full-Stack E-Commerce Platform
## Overview
KartKaro is a full-featured e-commerce web application built using the MERN (MongoDB, Express, React, Node.js) stack. The platform allows users to browse, add to cart, and purchase products seamlessly. With secure JWT authentication, payment integration, and a robust admin panel for product and user management, KartKaro provides an end-to-end shopping experience.

## Features
### User Features
- **Product Browsing:** Explore a wide range of products across categories.
- **Product Search:** Find products quickly using the search bar.
- **Cart Management:** Add, update, or remove items in the cart.
- **User Authentication:** Secure sign-up, login, and logout using JWT.
- **Order Placement:** Easy and secure order placement with integrated payment gateway.
### Admin Features
- **Product Management:** Add, update, and delete products.
- **User Management:** View and manage registered users.
- **Order Management:** Monitor order statuses and manage fulfillment.

## Tech Stack
### Frontend
- **React.js:** Dynamic and responsive user interface.
- **Tailwind CSS:** Modern and utility-first styling framework.
### Backend
- **Node.js:** Server-side JavaScript runtime.
- **Express.js:** Backend web framework.
### Database
- **MongoDB:** NoSQL database for scalable data management.
### Other Tools
- **JWT (JSON Web Tokens):** Secure authentication.
- **Payment Integration:** Seamless checkout experience.
- **Mongoose:** MongoDB ORM for schema modeling and data interaction.

## Installation and Setup
### Prerequisites
* Node.js and npm installed
* MongoDB installed and running
* Payment gateway API keys (e.g., Stripe or Razorpay)

### Steps to Run Locally
### 1. Clone the repository:
```bash
git clone https://github.com/your-username/KartKaro.git
cd KartKaro
```

### 2. Backend Setup:
``` bash
cd backend
npm install
```

1. Create a .env file in the backend directory with the following variables:
``` makefile
MONGO_URI=your_mongo_database_uri
JWT_SECRET=your_jwt_secret_key
PAYMENT_API_KEY=your_payment_gateway_api_key
```

2. Start the backend server:
``` bash
npm start
```

3. Frontend Setup:
``` bash
cd client
npm install
```
4. Start the frontend development server:
``` bash
npm start