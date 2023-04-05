import { useEffect, useState } from "react";
import axios from "axios";

/**
 * A custom React hook to fetch data from a specified API endpoint.
 *
 * @param {string} endpoint - The API endpoint to fetch data from (without the base URL).
 * @param {object} [query] - An optional object containing key-value pairs to be used as query parameters in the GET request.
 * @returns {object} An object containing the fetched data, the loading state, any error encountered during the fetch, and a `refetch` function to trigger a re-fetch manually.
 *
 * @example
 * import useFetch from "./useFetch";
 * const { data, isLoading, error, refetch } = useFetch("products", { name: "Coffee" });
 */
const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `http://localhost:8080/${endpoint}`,
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const respond = await axios.request(options);
      setData(respond.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  });

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
