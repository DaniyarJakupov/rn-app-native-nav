import { useEffect, useState } from 'react';

export const useLykonApi = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const res = await fetch('http://172.29.77.129:4000/tests');
        const result = await res.json();

        // Sort by date
        result.sort(function compare(a, b) {
          a = a.date.split('.');
          b = b.date.split('.');
          return b[2] - a[2] || b[1] - a[1] || b[0] - a[0];
        });
        setData(result);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);
  return [{ data, isLoading, isError }];
};
