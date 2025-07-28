import { useContext } from "react";
import Login from "./Login";
import Profile from "./Profile";
import UserContext from "../context/UserContext";

const Card = () => {
    const {user}= useContext(UserContext)
  return (
    <div className="relative">
      <div className="col-start-3 row-start-3 flex max-w-7xl rounded-lg flex-col bg-gray-100 p-2 dark:bg-white/10 shadow-lg shadow-black/20 dark:shadow-white/20">
        <div className="rounded-xl bg-white p-10 text-sm/7 text-gray-700 dark:bg-gray-950 dark:text-gray-300">
          {/* <img
            src="/img/logo.svg"
            className="mb-11.5 h-6 dark:hidden"
            alt="Tailwind Play"
          />
          <img
            src="/img/logo-dark.svg"
            className="mb-11.5 h-6 not-dark:hidden"
            alt="Tailwind Play"
          /> */}
          <div className="space-y-6">
           {!user? <Login />: <Profile />}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
