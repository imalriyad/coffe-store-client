import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const User = () => {
  const loaedUser = useLoaderData();
  const [users, setUser] = useState(loaedUser);

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/user/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              swal("Poof! User has been deleted!", {
                icon: "success",
              });
              const remainingUser = users?.filter((user) => user._id !== id);
              setUser(remainingUser);
            }
          });
      }
    });
  };
  return (
    <div className="max-w-screen-md  mx-auto text-center mt-10">
      <h1 className="text-3xl font-semibold">
        Number of Users : {users.length}
      </h1>

      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>LastSignInTime</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.lastSignInTime}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-sm"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
