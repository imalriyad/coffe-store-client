/* eslint-disable react/prop-types */
import { FaEdit } from "react-icons/fa";
import { LuView } from "react-icons/lu";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const CoffeCard = ({ coffe, setCoffes, coffes }) => {
  const { name, chef, price, photo, _id } = coffe;
  const handleDelete = (_id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/coffes/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              swal("Yay! Your Coffe has been deleted!", {
                icon: "success",
              });
              const remainingCoffe = coffes.filter(
                (coffe) => coffe._id !== _id
              );
              setCoffes(remainingCoffe);
            }
          });
      }
    });
  };
  return (
    <div className="md:px-4 mt-10">
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
        </div>
        <div className="lg:flex-col flex lg:w-[20%] flex-row justify-between mt-4 md:space-y-3 items-center">
          <Link to={`/CoffeDetails/${_id}`}>
            {" "}
            <button className="btn btn-sm ">
              <LuView /> View
            </button>
          </Link>
          <Link to={`/UpdateCoffe/${_id}`}>
            <button className="btn btn-sm ">
              <FaEdit />
              Edit
            </button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn btn-sm ">
            <RiDeleteBin6Fill />
            Wipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeCard;
