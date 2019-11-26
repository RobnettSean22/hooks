import React, { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {});
  axios.get(url).then(res => {
    setData(res.data);
  });
  return data;
}

export default useFetch;
