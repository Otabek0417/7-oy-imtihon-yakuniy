import { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

export function useLogin() {
  const dispatch = useDispatch();

  const [isPending, setIspending] = useState(false);

  const [error, setError] = useState(false);

  const login = (email, password) => {
    setIspending(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(login(userCredential.user));
        setIspending(false);
        setError(null);
        toast.success("Well come back! ");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        toast.error(errorMessage);
        setIspending(false);
      });
  };
  const enterWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(login(user));
        setIspending(false);
        setError(null);
        toast.success("Well come back! ");
      })
      .catch((error) => {
        const errorMessage = error.message;
        // const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        setError(errorMessage);
        toast.error(errorMessage);
        setIspending(false);
      });
  };
  return { isPending, error, login, enterWithGoogle };
}
