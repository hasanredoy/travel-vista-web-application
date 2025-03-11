"use client";
import React, {useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import "react-phone-number-input/style.css";
import swal from "sweetalert";
import { ImSpinner9 } from "react-icons/im";
import moment from "moment";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useSession } from "next-auth/react";


export default function CheckoutForm({ clientS }) {
  // console.log(clientS );
  const stripe = useStripe();
  const elements = useElements();
  // get user
  const {user} = useSession()?.data||{}
  
  const [transactionID, setTransactionID] = useState("");
  const [message, setMessage] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const router = useRouter()

  // user cart state
  const [cart, setCart] = useState([]);
  // get tours ids

const itemsIds = (cart ?? [])
  .filter((booking) => booking.status === "pending")
  .map((booking) => booking._id);

  useEffect(() => {
    const loader = async () => {
      axios.get(`${
        process.env.NEXT_PUBLIC_BASE_URL
      }/api/bookings?email=${user?.email}`)
      .then(res=>{
        setCart(res.data?.data);
      })
    };
    loader();
  }, [user]);
  // parse int price
  const totalPrice = cart
    ?.filter((booking) => booking.status === "pending")
    ?.reduce((a, b) => a + b.price, 0)
    console.log(totalPrice)


  React.useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      console.log("client secret not fount");
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
       console.log({paymentIntent});
       setTransactionID(paymentIntent?.id)
    
      switch (paymentIntent.status) {
        case "succeeded":
          setTransactionID(paymentIntent?.id)
          setMessage("Payment succeeded!");
      

          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);


    const payment = {
      transactionID:transactionID|| Math.random() * 3000,
      email: user?.email,
      name: user?.displayName,
      itemsIds,
      totalPrice,
      paymentDate: new Date(),
    };
    // post payment info in monogo db
    axios.post(`${
          process.env.NEXT_PUBLIC_BASE_URL
        }/api/payment`, payment).then((res) => {
          if (res?.data?.result?.modifiedCount > 0&&res.data?.data?.insertedId) {
            // if all ok then show a success message
            swal({
              text: "Payment Successfully",
              icon: "success",
            });
            router.push('/dashboard/payment_history')
          }
        });

      
    // });
   
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/payment_history`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <>
    <h1 className="text-base text-center my-5 lg:text-xl font-bold ">Please Pay </h1>

        <form id="payment-form" className="p-5 " onSubmit={handleSubmit}>
          <PaymentElement
            id="payment-element"
            options={paymentElementOptions}
          />
        <div className=" flex justify-center items-start mt-2">
        <button
            className="btn-primary"
            disabled={isLoading || !stripe || !elements}
            id="submit"
          >
            <span id="button-text">
              {isLoading ? (
                <div className="spinner" id="spinner"><ImSpinner9 className=" animate-spin"/></div>
              ) : (
                "Pay now"
              )}
            </span>
          </button>
        </div>
          {/* Show any error or success messages */}
          {message && <div id="payment-message">{message}</div>}
        </form>
    </>
  );
}
