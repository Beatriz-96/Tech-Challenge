import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export const usePhones = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [phones, setPhones] = useState([]);

  const getPhonesFromApi = useCallback(async () => {
    setIsLoading(true);

    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/phones`
      );

      setPhones(data);
    } catch (err) {
      console.log("Error getting list of phones", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getPhonesFromApi();
  }, [getPhonesFromApi]);

  return { phones, isLoading };
};
