import { useEffect, useState } from "react";
import axios from "axios";

function usePost(url) {
  const [response, setResponse] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  async function handlePost(object) {
    setError(null);
    setIsPending(true);
    try {
      const res = await axios.post(url, object);
      if (res.data.token) {
        localStorage.setItem("token", token);
      }
      setResponse(res.data.message);
    } catch (error) {
      console.log(error?.response?.data?.message);
    }
  }

  return { response, isPending, error, handlePost };
}

export default usePost;
