import { Route, Routes, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AuthPage from "./Component/AuthPage";
import LandingPage from "./Component/LandingPage";
import { useEffect } from "react";
import { addUserDetails, removeUserDetails } from "./store/userSlice";
import { useDispatch } from "react-redux";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { accessToken, displayName, email, uid } = user;
        let payload = {
          accessToken,
          displayName,
          email,
          uid,
        };
        dispatch(addUserDetails(payload));
        navigate("/browse");
      } else {
        dispatch(removeUserDetails());
        navigate("/");
      }
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/browse" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
