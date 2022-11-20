const router = require("express").Router();
const KEY = process.env.STRIPE_KEY
const stripe = require("stripe")("sk_test_51LuXwjSGYsQgoAqwLNz9QHwqyiHKZuTBYKuxGVn52S1Oar89TtI3u4vYe5NptE0uILNHqOHulfAgwUOl0mYKTn1t00vnIDCuqy");


router.post("/payment", (req,res)=>{
    stripe.paymentIntents.create({
        //source: req.body.tokenId,
        payment_method_types: ['card'],
        amount: req.body.amount,
        currency: "usd",
    },(stripeErr, stripeRes)=>{
        if(stripeErr){
            res.status(500).json(stripeErr);
        }else{
            res.status(200).json(stripeRes);
        }
    }
    );
});

module.exports = router;