import axios from "axios";
import React, { useEffect, useState } from "react";
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
      className="grid relative  sm:grid-cols-2 md:grid-cols-3 rounded-md lg:grid-cols-4 bg-[#F0F6FF] dark:bg-[#181920] p-5 gap-5"
    >
      <div>
        <label htmlFor="price" className="text-black dark:text-white">Serarch Product</label>
        <br />
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
          className="w-full bg-white dark:bg-[#272935]  text-black dark:text-white rounded-xl p-1 px-2 my-3"
        />
      </div>
      <div>
        <label className="text-black dark:text-white"  htmlFor="category">
          Category
        </label>
        <br />
        <select
          id="category"
          className="w-full bg-white dark:bg-[#272935] rounded-xl p-1 px-2 my-3"
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
      <div>
        <label className="text-black dark:text-white" htmlFor="company">
          Company
        </label>
        <br />
        <select
          id="company"
          className="w-full  bg-white dark:bg-[#272935] rounded-xl p-1 px-2 my-3"
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

      <div>
        <label className="text-black dark:text-white" htmlFor="sort">Sort By </label>
        <br />
        <select
          id="sort"
          className="w-full  bg-white dark:bg-[#272935] rounded-xl p-1 px-2 my-3"
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
      <div>
        <label htmlFor="price" className="text-[#394E6A] dark:text-white">Select Price {filter.price / 100}.00</label>
        <br />
        <input
          className="w-56"
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
        <div className="flex items-center gap-24">
          <p className="text-[#394E6A] dark:text-white">0</p>
          <p className="text-center text-[#394E6A] dark:text-white">Max : $1,000.00</p>
        </div>
      </div>
      <button className="bg-slate-700 dark:bg-[#FF57B6] h-6 rounded-xl text-slate-100 dark:text-black">
        SEARCH
      </button>

        <div className="flex">
          <div className="flex items-center gap-4   rounded-xl bg-[#E2E8F4] dark:bg-[#0101] absolute bottom-[-1600px] right-10">
            <button onClick={fun11} className="hover:bg-[#C7CBD4] dark:hover:bg-[#09090C] rounded-l-xl p-2 text-lg font-bold  text-black dark:text-white">
              PREV
            </button>
            <div>
              {btn.map((val) => (
                <button
                  onClick={() => setCurrentPage(val)}
                  style={{
                    background:
                      currentPage === val ? "rgba(128, 128, 128, 0.279) " : "",
                  }}
                  key={val}
                  className="mr-3 py-2 px-4 text-lg text-[#394E80]"
                >
                  {val}
                </button>
              ))}
            </div>
            <button onClick={funn} className="hover:bg-[#C7CBD4]  dark:hover:bg-[#09090C] rounded-r-xl p-2 text-lg font-bold text-[#394E80]  dark:text-white">
              NEXT
            </button>
          </div>
        </div>
    </form>
  );
}

export default Filter;
