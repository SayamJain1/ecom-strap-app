import { useState, useEffect } from "react";
import { makeRequest } from "./makeRequest";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await makeRequest.get(url);
        setData(res.data.data);
      } catch (error) {
        setErr(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, err, loading };
};

export default useFetch;
