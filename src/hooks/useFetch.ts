import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

function useFetch(url: string, options?: object) {
  const [response, setResponse] = useState<AxiosResponse<any> | null>(null);
  const [loading, setLoading] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const res = await axios(url, options);
      setResponse(res);
      setLoading(false);
    })();
  }, [url, options]);

  return [response, loading];
}

export default useFetch;
