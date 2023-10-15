import swal from "sweetalert";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const AddCoffe = () => {
  const handlAddCoffe = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const price = form.price.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const coffe = { name, chef, price, supplier, category, photo, details };

    fetch("http://localhost:5000/coffes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffe),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal("Yay!", "Coffe added to DataBase!", "success");
          form.reset();
        }
      });
  };
  return (
    <div className="max-w-screen-md md:p-10 rounded-md bg-[#F4F3F0] mx-auto md:my-[4%]">
      <Link to={"/"}>
        <button className="btn bg-[#D2B48C] hover:bg-[#D2B48C]">
          <AiOutlineArrowLeft className="text-xl" />
          Go Back
        </button>
      </Link>
      <div className="md:text-center px-4">
        <h1 className="text-3xl pt-5 mb-5 font-bold">Add New Coffee</h1>
        <p className="text-sm">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form
        onSubmit={handlAddCoffe}
        className="grid px-4 md:px-10 gap-5 grid-cols-2 py-12"
      >
        <label className="flex  flex-col" htmlFor="">
          Name{" "}
          <input
            type="text"
            name="name"
            required
            placeholder="Enter coffee name"
            className="input focus:outline-none input-bordered w-full"
          />
        </label>
        <label className="flex flex-col" htmlFor="">
          Chef{" "}
          <input
            type="text"
            name="chef"
            required
            placeholder="Enter coffee Chef"
            className="input focus:outline-none input-bordered w-full "
          />
        </label>
        <label className="flex flex-col" htmlFor="">
          Supplier{" "}
          <input
            type="text"
            name="supplier"
            required
            placeholder="Enter coffee supplier"
            className="input focus:outline-none input-bordered w-full "
          />
        </label>
        <label className="flex flex-col" htmlFor="">
          Price{" "}
          <input
            type="number"
            name="price"
            required
            placeholder="Enter coffee price"
            className="input focus:outline-none input-bordered w-full "
          />
        </label>
        <label className="flex flex-col" htmlFor="">
          Category{" "}
          <input
            type="text"
            name="category"
            required
            placeholder="Enter coffee category"
            className="input focus:outline-none input-bordered w-full "
          />
        </label>
        <label className="flex flex-col" htmlFor="">
          Photo{" "}
          <input
            type="text"
            required
            name="photo"
            placeholder="Enter photo URL"
            className="input focus:outline-none input-bordered w-full "
          />
        </label>

        <label className="flex flex-col col-span-2" htmlFor="">
          Details
          <textarea
            placeholder="Enter Coffe details"
            name="details"
            required
            className="textarea focus:outline-none textarea-bordered textarea-sm w-full "
          ></textarea>
        </label>

        <input
          className="btn col-span-2 hover:bg-[#D2B48C] text-[#331A15] bg-[#D2B48C]"
          type="submit"
          value="Add Coffe"
        />
      </form>
    </div>
  );
};

export default AddCoffe;
