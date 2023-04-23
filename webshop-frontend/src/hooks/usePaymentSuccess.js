import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
