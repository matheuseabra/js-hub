import { useState, useEffect } from "react";

function useFetch(url: string, options: object) {
  const [response, setResponse] = useState<Promise<any> | null>(null);
  const [loading, setLoading] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch(url, options);
      const json = await res.json();
      setResponse(json);
      setLoading(false);
    })();
  }, [url, options]);

  return [response, loading];
}

export default useFetch;
