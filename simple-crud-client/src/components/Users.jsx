import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h2>users length :{users.length}</h2>
   <div>
        {users.map(user => (
          <p key={user._id}>
            {user.name} : {user.email}
          </p>
        ))}
      </div>
    </div>
  );
};
export default Users;
