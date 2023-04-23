import { useMemo } from "react";
import cookie from "cookie";
import jwt_decode from "jwt-decode";

/**
 * A custom React hook that parses JWT from the cookie, decodes the user's email,
 * and creates the headers with the JWT for authenticated requests.
 *
 * @returns {Object} An object containing the headers and the user's email.
 * @property {Object} headers - The headers object containing the Content-Type and Authorization fields.
 * @property {string} userEmail - The user's email decoded from the JWT payload.
 */
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
