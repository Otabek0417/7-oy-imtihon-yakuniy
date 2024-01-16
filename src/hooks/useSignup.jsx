import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../Redux/appSlice";
export function useSignUp() {
  const dispatch = useDispatch();
  const [isPending, setIspending] = useState(false);
  const [error, setError] = useState(false);
  const signup = (displayName, email, password) => {
    setIspending(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        await updateProfile(auth.currentUser, {
          displayName,
        });
        console.log(userCredential.user);
        dispatch(login(userCredential.user));
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
