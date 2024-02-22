import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IPost } from "../models";

export default function useApi(url: string, initialData: IPost[] | IPost): [any, Dispatch<SetStateAction<IPost[] | IPost>>, boolean, boolean] {
  const [data, setData] = useState(initialData);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return [data, setData, isLoading, error];
}
