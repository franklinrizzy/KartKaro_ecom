import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'

const Orders = () => {
  return (
    <Layout title={'Orders - Ecommerce App'}>
        <div className="container-fluid p-3 m-3">
            <div className='row'>
                <div className='col-md-3'></div>
                <UserMenu />
                <div className='col-md-9'>
                    <h1>All Orders</h1>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Orders