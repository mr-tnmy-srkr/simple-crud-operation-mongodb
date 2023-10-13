import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (_id) => {
    console.log("delete", _id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
      /*  headers: {
        'Content-Type': 'application/json'
      } */
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("deleted successfully");
          const remaining = users.filter((user) => user._id !== _id);
          setUsers(remaining);
        }
      });
  };

  console.log(users);
  return (
    <div>
      <h2>users length :{users.length}</h2>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name} ::: {user.email} ::: {user._id} :::
            <button onClick={() => handleDelete(user._id)}>x</button>
          </p>
        ))}
      </div>
    </div>
  );
};
export default Users;
