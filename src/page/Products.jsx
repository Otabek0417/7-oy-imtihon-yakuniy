import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../utils";
import Filter from "../components/Filter";

function Products() {
  const info = useSelector((state) => state.products);
  const navigate = useNavigate();
  return (
    <div className="align-element py-20">
      <div className="w-[80%] cursor-pointer container mx-auto py-5">
        <Filter></Filter>
        <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
          <h4 className="font-medium text-md">{info.data.length} products</h4>
        </div>
        <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {info?.data.map((data) => {
            console.log(data);
            return (
              <div
                key={data.id}
                onClick={() => navigate("/single", { state: { data: data } })}
                className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
              >
                <figure className="px-4 pt-4">
                  <img
                    src={data.attributes.image}
                    className="rounded-xl h-64 md:h-48 w-full object-cover"
                    alt={data.attributes.title[0]}
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <p className="card-title capitalize tracking-wider">
                    {data.attributes.title[0].toUpperCase() +
                      data.attributes.title.slice(1)}
                  </p>
                  <span className="text-secondary">
                    {formatPrice(data.attributes.price)}
                  </span>
                </div>
              </div>
            );
          })}
          {!info?.data.length && (
            <div className="loader z-30">
              <span className="loading loading-dots loading-lg"></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
