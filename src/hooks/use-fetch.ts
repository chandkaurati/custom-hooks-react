import { useCallback, useEffect, useState } from "react";

export type FetchOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: HeadersInit;
  body?: BodyInit;
  immediate?: boolean;
};

export type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
};

export function useFetch<T>(url: string, options: FetchOptions): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { method = "GET", headers, body, immediate = true } = options;

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(url, {
        method,
        headers,
        body,
      });

      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }

      const json = await res.json();
      setData(json);
    } catch (error: any) {
      console.error(error);
      setError(error?.message || "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  }, [url, method, headers, body]);

  useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, [url, immediate, fetchData]);

  return { data, loading, error, refetch: fetchData };
}
