import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { decProduct, incProduct, removeProduct } from "../Redux/appSlice";
import { formatPrice, customFetch, generateAmountOptions } from "../utils";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

function Cart() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.products.savat);

  const notify = () =>
    toast.error("Item removed from card", {
      position: toast.POSITION.TOP_CENTER,
    });

  function removeF(id, color) {
    dispatch(removeProduct({ id, color }));
    notify();
  }
  function increase(id, color) {
    dispatch(incProduct({ id, color }));
  }
  function decrease(id, color) {
    dispatch(decProduct({ id, color }));
  }

  return (
    <>
      <ToastContainer />
      <div className="container py-20">
        <div className="border-b border-base-300 pb-5">
          <h2 className="text-3xl font-medium tracking-wider capitalize">
            {state.length ? "Shopping Cart" : "Your Cart Is Empty"}
          </h2>
        </div>
        {state.length > 0 && (
          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            {state?.map((cart, i) => (
              <div key={i} className="lg:col-span-8 ">
                <article className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0">
                  <img
                    className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
                    src={cart?.img}
                    alt={cart.title}
                  />
                  <div className="sm:ml-16 sm:w-48">
                    <h1 className="capitalize font-medium">
                      {cart.title}
                      <p className="mt-2 capitalize text-sm text-neutral-content">
                        {cart.company}
                      </p>
                    </h1>
                    <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
                      Color:
                      <button
                        className="badge badge-sm"
                        style={{ background: cart.color }}
                      />
                    </p>
                  </div>
                  <div className="sm:ml-12">
                    <div>
                      <label htmlFor="amount" className="label p-0">
                        <span className="label-text">Amount</span>
                      </label>
                      <select
                        name="amount"
                        className="mt-2 select select-base select-bordered select-xs"
                      >
                        {generateAmountOptions(6)}
                      </select>
                    </div>
                    <button
                      onClick={() => removeF(cart.id, cart.color)}
                      className="mt-2 link link-primary link-hover text-sm"
                    >
                      Remove
                    </button>
                  </div>
                  <p className="font-medium sm:ml-auto">
                    {formatPrice(cart.price)}
                  </p>
                </article>
              </div>
            ))}
            <div className="lg:col-span-4 lg:pl-4">
              <div className="card bg-base-200">
                <div className="card-body">
                  <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                    <span>Subtotal</span>
                    <span className="font-medium">$4,759.86</span>
                  </p>
                  <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                    <span>Shipping</span>
                    <span className="font-medium">$5.00</span>
                  </p>
                  <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                    <span>Tax</span>
                    <span className="font-medium">$475.99</span>
                  </p>
                  <p className="flex justify-between text-sm mt-4 pb-2">
                    <span>Order Total</span>
                    <span className="font-medium">$5,240.85</span>
                  </p>
                </div>
              </div>
              <a className="btn btn-primary btn-block mt-8" href="/checkout">
                proceed to checkout
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
