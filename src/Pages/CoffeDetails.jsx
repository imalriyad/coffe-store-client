import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";

const CoffeDetails = () => {
  const coffe = useLoaderData();
  const { name, chef, price, supplier, category, photo, details } = coffe;
  return (
    <div>
      <div className="max-w-screen-md md:p-10 rounded-md bg-[#F4F3F0] mx-auto md:my-[4%]">
        <Link to={"/"}>
          <button className="btn bg-[#D2B48C] hover:bg-[#D2B48C]">
            <AiOutlineArrowLeft className="text-xl" />
            Go Back
          </button>
        </Link>
        <div className="bg-[#F5F4F1] rounded-lg p-5 lg:flex gap-5 justify-between items-center">
          <img src={photo} className="mx-auto" alt="" />
          <div className="text-lg">
            <h1>
              <b>Name:</b> {name}
            </h1>
            <h1>
              <b>Chef:</b> {chef}
            </h1>
            <h1>
              <b>Price:</b> ${price}
            </h1>
            <h1>
              <b>Category:</b> {category}
            </h1>
            <h1>
              <b>Supplier:</b> {supplier}
            </h1>
            <h1>
              <b>Details:</b> {details}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeDetails;
