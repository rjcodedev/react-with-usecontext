import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <h1>User not found</h1>;

  return (
    <div>
      <h1>Profile</h1>
      <div>Welcome {user.username}</div>
      <div>Your Password {user.password}</div>
    </div>
  );
};

export default Profile;
