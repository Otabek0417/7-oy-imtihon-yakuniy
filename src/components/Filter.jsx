import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../Redux/appSlice";

function Filter() {
  const dispatch = useDispatch();
  const [btn, setbtn] = useState([1, 2, 3]);
  const [filter, setFilter] = useState({
    product: "",
    category: "all",
    company: "all",
    sort: "a-z",
    price: 100000,
  });

  const [currentPage, setCurrentPage] = useState(1);

  function funn() {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
    }
  }
  function fun11() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const [re_get, setRe_get] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://strapi-store-server.onrender.com/api/products?search=${filter.product}&category=${filter.category}&company=${filter.company}&order=${filter.sort}&price=${filter.price}&page=${currentPage}`
      )
      .then((res) => {
        dispatch(addData(res.data.data));
      })
      .catch((err) => console.log(err));
  }, [re_get]);

  function submit(e) {
    e.preventDefault();

    setRe_get(!re_get);
    console.log(re_get);
  }

  return (
    <form
      onSubmit={submit}
      className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center"
    >
      <div className="form-control">
        <label htmlFor="price" className="label label-text capitalize">
          Serarch Product
        </label>
        <input
          type="search"
          name="product"
          value={filter.product}
          onChange={(e) =>
            setFilter({
              ...filter,
              [e.target.name]: e.target.value,
            })
          }
          className="input input-bordered input-sm"
        />
      </div>
      <div className="form-control">
        <label className="label label-text capitalize" htmlFor="category">
          Category
        </label>
        <select
          id="category"
          className="select select-bordered select-sm"
          name="category"
          onChange={(e) =>
            setFilter({
              ...filter,
              [e.target.name]: e.target.value,
            })
          }
        >
          <option value="all">all</option>
          <option value="kids">Kids</option>
          <option value="chairs">Chairs</option>
          <option value="tables">Tables</option>
          <option value="beds">Beds</option>
          <option value="sofas">Sofas</option>
        </select>
      </div>
      <div className="form-control">
        <label className="label label-text capitalize" htmlFor="company">
          Company
        </label>
        <select
          id="company"
          className="select select-bordered select-sm"
          name="company"
          onChange={(e) =>
            setFilter({
              ...filter,
              [e.target.name]: e.target.value,
            })
          }
        >
          <option value="all">all</option>
          <option value="modenza">Modenza</option>
          <option value="luxora">Luxora</option>
          <option value="homestead">Homestead</option>
          <option value="cumfora">Cumfora</option>
          <option value="sofas">Sofas</option>
        </select>
      </div>
      <div className="form-control">
        <label className="label label-text capitalize" htmlFor="sort">
          Sort By
        </label>
        <select
          id="sort"
          className="select select-bordered select-sm"
          name="sort"
          onChange={(e) =>
            setFilter({
              ...filter,
              [e.target.name]: e.target.value,
            })
          }
        >
          <option value="a-z">a-z</option>
          <option value="z-a">z-a</option>
          <option value="high">high</option>
          <option value="low">low</option>
        </select>
      </div>
      <div className="form-control">
        <label
          htmlFor="price"
          className="label label-text capitalize cursor-pointer"
        >
          Select Price ${filter.price / 100}.00
        </label>
        <input
          className="range range-primary range-sm"
          type="range"
          value={filter.price / 1000}
          onChange={(e) =>
            setFilter({
              ...filter,
              [e.target.name]: e.target.value * 1000,
            })
          }
          id="price"
          name="price"
          min="0"
          max="100"
        />
        <div className="w-full flex justify-between text-xs px-2 mt-2">
          <p className="font-bold text-md">0</p>
          <p className="font-bold text-md">Max : $1,000.00</p>
        </div>
      </div>
      <button className="btn btn-primary btn-sm uppercase">search</button>
    </form>
  );
}

export default Filter;
