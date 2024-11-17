import axios from "axios";
import { useEffect, useState } from "react";

function useFetch() {
  const [response, setResponse] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  async function handleFetch(object) {
    setError(null);
    setIsPending(true);
    try {
      const data = await axios.fetch;
    } catch (error) {}
  }

  return <div></div>;
}

export default useFetch;
