import axios from "axios";
import { useEffect, useReducer } from "react";

const changeState = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_ISPENDING":
      return { ...state, isPending: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
  }
};

export function useFetch(url) {
  const [state, dispatch] = useReducer(changeState, {
    data: null,
    isPending: false,
    error: null,
  });

  useEffect(() => {
    const getData = async () => {
      dispatch({ type: "SET_ISPENDING", payload: true });
      try {
        const req = await axios(url);
        if (req.status !== 200) {
          throw new Error(req.message);
        }
        dispatch({ type: "SET_DATA", payload: req.data.data });
        dispatch({ type: "SET_ISPENDING", payload: false });
        dispatch({ type: "SET_ERROR", payload: null });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error });
        dispatch({ type: "SET_ISPENDING", payload: false });
      }
    };
    getData();
  }, [url]);

  return { ...state };
}
