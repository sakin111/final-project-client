
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";







const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Key);



const Plans = () => {
    return (

        <div>
            <Elements stripe={stripePromise}>
                <CheckOutForm></CheckOutForm>
            </Elements>
            
        </div>

    );
};

export default Plans;
