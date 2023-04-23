import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * A custom React hook that checks for the "paymentSuccess" query parameter
 * in the URL, clears the cart, and removes the query parameter if found.
 *
 * @param {Function} clearCart - The function to clear the cart when paymentSuccess is true.
 */
export const usePaymentSuccess = (clearCart) => {
    const navigate = useNavigate();

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const paymentSuccess = searchParams.get("paymentSuccess");

        if (paymentSuccess === "true") {
            clearCart();
            // Remove the paymentSuccess flag from the URL
            searchParams.delete("paymentSuccess");
            navigate("?", { replace: true, search: searchParams.toString() });
        }
    }, [navigate, clearCart]);
};
