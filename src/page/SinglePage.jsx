import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { formatPrice, customFetch, generateAmountOptions } from "../utils";
import "react-toastify/dist/ReactToastify.css";
import { addSavat } from "../Redux/appSlice";

function SinglePage() {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const [active, setActive] = useState(null);

  const [productColor, setProductColor] = useState(
    state && state.data.attributes.colors[0]
  );
  const [amount, setAmount] = useState(1);

  console.log(state.data.attributes.colors[0]);

  const Navigate = useNavigate();
  const notify = () =>
    toast.success("Item added to cart!", {
      position: toast.POSITION.TOP_CENTER,
    });

  //
  const [toCart, setToCart] = useState({
    title: state.data.attributes.title,
    company: state.data.attributes.company,
    color: state.data.attributes.colors[0],
    count: 1,
    price: state.data.attributes.price,
    img: state.data.attributes.image,
    id: new Date().valueOf(),
  });

  console.log(toCart);

  useEffect(() => {
    setToCart({ ...toCart, color: active });
  }, [active]);

  function addTOCard() {
    notify();
    dispatch(addSavat(toCart));
  }

  return (
    <div className="container py-20">
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/product"}>Products</Link>
          </li>
        </ul>
      </div>
      <ToastContainer position="top-right" />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16 ">
        <img
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
          src={state.data.attributes.image}
          alt={state.data.attributes.title}
        />
        <div>
          <h1 className="capitalize text-3xl font-bold">
            {state.data.attributes.title[0].toUpperCase() +
              state.data.attributes.title.slice(1)}
          </h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {state.data.attributes.company}
          </h4>
          <p className="mt-3 text-xl">
            {formatPrice(state.data.attributes.price)}
          </p>
          <p className="mt-6 leading-8">{state.data.attributes.description}</p>
          <p className="text-md font-medium tracking-wider capitalize mt-6">
            Colors:
          </p>

          <div className="flex items-center gap-2 mt-2">
            {state.data.attributes.colors.map((col, idx) => (
              <div className="flex" key={idx}>
                <button
                  onClick={() => {
                    setActive(col);
                  }}
                  className={` ${
                    active === col ? "border-[2px] border-black" : ""
                  } w-[25px]  h-[25px] border-1px   rounded-full`}
                  style={{ backgroundColor: col }}
                ></button>
              </div>
            ))}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="amount">
              <h4 className="text-md font-medium -tracking-wider capitalize">
                amount
              </h4>
            </label>
            <select className="select select-secondary select-bordered select-md">
              {generateAmountOptions(20)}
            </select>
          </div>
          <div className="mt-10">
            <button
              onClick={() => addTOCard()}
              className="btn btn-secondary btn-md"
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
