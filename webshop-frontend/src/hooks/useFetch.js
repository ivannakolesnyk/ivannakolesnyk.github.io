import axios from "axios";
import { useCallback, useEffect, useState } from "react";

/**
 * A custom React hook to send a request to a specified API endpoint and handle its response.
 *
 * @param {string} method - The HTTP method to use for the request (e.g., "GET", "POST", "PUT", "DELETE").
 * @param {string} endpoint - The API endpoint for the request (without the base URL).
 * @param {object} headers - An object containing key-value pairs to be used as headers in the request.
 * @param {object} [query] - An optional object containing key-value pairs to be used as query parameters in the request.
 * @param {object} requestBody - An object containing the request payload.
 * @param {boolean} [autoFetch=true] - An optional boolean flag to determine if the request should be sent automatically when the hook is called.
 * @param {string} [baseURL="http://localhost:8080/api/"] - An optional base URL for the API endpoint.
 * @returns {object} An object containing the fetched data, the loading state, any error encountered during the fetch, a `refetch` function to trigger a re-fetch manually, and a `fetched` boolean flag indicating whether the data has been fetched.
 *
 * @example
 * import useFetch from "./useFetch";
 * const { data, isLoading, error, refetch, fetched } = useFetch("GET", "products", { "Content-Type": "application/json" }, { name: "Coffee" }, {}, false);
 */
const useFetch = (
  method,
  endpoint,
  headers = null,
  query = null,
  requestBody = null,
  autoFetch = true,
  baseURL = "http://localhost:8080/api/"
) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetched, setFetched] = useState(false);

  const fetchData = useCallback(
    async (body = null) => {
      setIsLoading(true);
      const options = {
        method: method,
        url: `${baseURL}${endpoint}`,
        headers: { ...headers },
        params: { ...query },
        data: body || requestBody,
      };

      try {
        const response = await axios.request(options);
        if (response.status >= 200 && response.status < 300) {
          setData(response.data);
          setFetched(true);
        } else {
          setError(
            new Error(`Server responded with status ${response.status}`)
          );
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [method, endpoint, headers, query, requestBody, baseURL]
  );

  useEffect(() => {
    (async () => {
      if (autoFetch) {
        await fetchData();
      }
    })();
  }, [fetchData, autoFetch]);

  const refetch = async (body = null) => {
    setIsLoading(true);
    await fetchData(body);
  };

  return { data, isLoading, error, refetch, fetched };
};

export default useFetch;
