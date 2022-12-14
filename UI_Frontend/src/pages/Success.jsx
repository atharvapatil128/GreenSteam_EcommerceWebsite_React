import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { userRequest } from '../requestMethods';
import {Link} from 'react-router-dom';


const Success = () => {
    const location = useLocation();
    const data = location.state.stripeData;
    const cart = location.state.cart;
    const currentUser = useSelector((state) => state.user.currentUser);
    const [orderId, setOrderId] = useState(null);

    useEffect(() => {
        const createOrder = async () => {
          try {
            const res = await userRequest.post("/orders", {
              userId: currentUser._id,
              products: cart.products.map((item) => ({
                productId: item._id,
                quantity: item._quantity,
              })),
              amount: cart.total,
              address: data.billing_details.address,
            });
            setOrderId(res.data._id);
          } catch {}
        };
        data && createOrder();
      }, [cart, data, currentUser]);    


  
  return (
    <div
    style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#1A6837",
      color:"white"
    }}
  >
     {orderId
      ? `Order has been created successfully. Your order number is ${orderId}`
      : `Successful. Your order is being prepared...`} 
      <Link to="/">
    <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button></Link>
  </div>
  );
};

export default Success;