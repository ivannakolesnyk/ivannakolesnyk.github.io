import axios from "axios";
import { useCallback, useEffect, useState } from "react";

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
const useFetch = (endpoint, query, autoFetch = true) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetched, setFetched] = useState(false);
  const [showError, setShowError] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    const options = {
      method: "GET",
      url: `http://localhost:8080/api/${endpoint}`,
      params: { ...query },
    };

    try {
      const respond = await axios.request(options);
      setData(respond.data);
      setFetched(true);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      // Remove alert and set showError to true
      setShowError(true);
    } finally {
      setIsLoading(false);
    }
  }, [endpoint, query]);

  const dismissError = () => {
    setShowError(false);
  };

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, [fetchData, autoFetch]);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch, showError, dismissError, fetched };
};

export default useFetch;
