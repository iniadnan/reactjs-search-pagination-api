import { useState, useEffect } from "react";
import { API_URL } from "./constants";

const useFetch = (category, start) => {
  const [data, setData] = useState(null);

  const limit = start * 9;

  useEffect(() => {
    fetch(`${API_URL}${category}?_start=${start}&_limit=${limit}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return [data];
};

export default useFetch;
