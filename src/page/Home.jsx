import { useFetch } from "../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";
import { formatPrice } from "../utils";
function Home() {
  const { data, isPending, error } = useFetch(
    "https://strapi-store-server.onrender.com/api/products?featured=true"
  );
  const navigate = useNavigate();
  if (isPending) {
    return (
      <div className="loader z-30">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="container py-20">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
            We are changing the way people shop
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repellat explicabo enim soluta temporibus asperiores aut obcaecati
            perferendis porro nobis.
          </p>
          <div className="mt-10">
            <Link className="btn uppercase btn-primary" to={"/product"}>
              Our Products
            </Link>
          </div>
        </div>
        <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
          <div className="carousel-item">
            <img
              src="https://react-vite-comfy-store-v2.netlify.app/assets/hero1-deae5a1f.webp
"
              className="rounded-box h-full w-80 object-cover"
              alt="Carousel Item 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://react-vite-comfy-store-v2.netlify.app/assets/hero2-2271e3ad.webp"
              className="rounded-box h-full w-80 object-cover"
              alt="Carousel Item 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://react-vite-comfy-store-v2.netlify.app/assets/hero3-a83f0357.webp"
              className="rounded-box h-full w-80 object-cover"
              alt="Carousel Item 3"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://react-vite-comfy-store-v2.netlify.app/assets/hero4-4b9de90e.webp"
              className="rounded-box h-full w-80 object-cover"
              alt="Carousel Item 4"
            />
          </div>
        </div>
      </div>
      <div className="pt-24">
        <div className="border-b border-base-300 pb-5">
          <h2 className="text-3xl font-medium tracking-wider capitalize">
            featured products
          </h2>
        </div>
        <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data &&
            data.map((data) => {
              // console.log(data);
              return (
                <div
                  key={data.id}
                  className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
                  onClick={() => navigate("/single", { state: { data: data } })}
                >
                  <figure className="px-4 pt-4">
                    <img
                      src={data.attributes.image}
                      alt={data.attributes.title}
                      className="rounded-xl h-64 md:h-48 w-full object-cover"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title capitalize tracking-wider">
                      {data.attributes.title}
                    </h2>
                    <span className="text-secondary">
                      {formatPrice(data.attributes.price)}
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
