import { getAuth, signOut } from "firebase/auth";
import { NETFLIX_LOGO, USER_AVATAR } from "../constants/Constants";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.userStore);

  const signoutHandler = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log("Sign-out error:", error);
      });
  };

  return (
    <div>
      <div className="absolute w-full h-30 bg-gradient-to-b from-black via-transparent pointer-events-none" />

      <div className="absolute top-1 left-30 z-20">
        <img
          className="h-20 object-cover"
          alt="Netflix Logo"
          src={NETFLIX_LOGO}
        />
      </div>

      {user && (
        <div className="absolute right-0 top-6 z-20 flex items-center">
          <img
            className="h-10 w-10 object-cover mx-5 shadow-lg"
            src={USER_AVATAR}
          />

          <button
            className="bg-white text-red-500 px-4 py-2 me-7 font-medium  shadow-lg cursor-pointer"
            onClick={signoutHandler}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
