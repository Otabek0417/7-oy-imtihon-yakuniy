import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useState } from "react";
import { logOut } from "../Redux/appSlice";
function Header() {
  const { user } = useSelector((state) => state.products);
  const dispatch = useDispatch();
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
                dispatch(logOut());
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
