import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useGlobalContext } from "./useGlobalContext";
import { toast } from "react-toastify";
export function useSignUp() {
  const [isPending, setIspending] = useState(false);
  const [error, setError] = useState(false);
  const { dispatch } = useGlobalContext();
  const signup = (displayName, email, password) => {
    setIspending(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        await updateProfile(auth.currentUser, {
          displayName,
        });
        dispatch({ type: "LOGIN", payload: userCredential.user });
        setIspending(false);
        setError(null);
        toast.success("Your are signup, successfully");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        toast.error(errorMessage);
        setIspending(false);
      });
  };

  return { isPending, error, signup };
}
