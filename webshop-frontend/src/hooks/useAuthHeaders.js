import { useMemo } from "react";
import cookie from "cookie";
import jwt_decode from "jwt-decode";

export const useAuthHeaders = () => {
    const jwt = cookie.parse(document.cookie).jwt;
    const payload = jwt_decode(jwt);
    const userEmail = payload ? payload.sub : ""; // Replace 'sub' with the claim name containing the user's email

    const headers = useMemo(
        () => ({
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
        }),
        [jwt]
    );

    return { headers, userEmail };
};
