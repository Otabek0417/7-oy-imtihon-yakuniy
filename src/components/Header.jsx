import { useState, useEffect } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
function Header() {
  const { user, spinner } = useGlobalContext();
  console.log(user);

  const [isPending, setIspending] = useState(false);

  const handleLogout = () => {
    setIspending(true);
    signOut(auth)
      .then(() => {
        setIspending(false);
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <div className="w-full bg-neutral sticky pt-1 top-0 z-10">
      <header className="py-2 text-neutral-content container">
        <div className="align-element flex justify-center sm:justify-end">
          <div className="flex gap-x-6 justify-center items-center">
            <p className="text-cyan-600 text-base sm:text-sm">
              Welcome,{user && user.displayName}
            </p>

            <button
              onClick={() => {
                toast.success("Logget out successfully");
                handleLogout();
              }}
              className="btn btn-xs btn-outline text-xs sm:text-sm btn-accent"
            >
              Logout
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
