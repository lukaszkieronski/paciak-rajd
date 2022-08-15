import { useState } from "react";
import Ajv from "ajv";

export const useLocalStorage = (key, schema, initial) => {
  const ajv = new Ajv();
  const validate = ajv.compile(schema);

  const [data, setData] = useState(() => {
    try {
      const dataString = localStorage.getItem(key);
      if (!dataString) return initial;
      const dataObject = JSON.parse(dataString);
      if (validate(dataObject)) {
        return dataObject;
      } else {
        for (const error of validate.errors) {
          console.error(error.message);
        }
        return initial;
      }
    } catch (error) {
      console.error(error);
      return initial;
    }
  });

  const storeData = (value) => {
    if (value === undefined) {
      localStorage.removeItem(key);
      setData(initial);
    }
    try {
      if (validate(value)) {
        const dataString = JSON.stringify(value);
        localStorage.setItem(key, dataString);
        setData(value);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return [data, storeData];
};
