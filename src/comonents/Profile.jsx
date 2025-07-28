import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="flex flex-col text-black dark:text-white gap-4">
      <h1>Profile</h1>
      <div>Welcome {user.username}</div>
      <div>Your Password {user.password}</div>
    </div>
  );
};

export default Profile;
