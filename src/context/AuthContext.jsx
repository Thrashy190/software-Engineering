import React, {
  Fragment,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";
import Notification from "../components/shared/Notifications";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

const UserContext = createContext();

export const useAuth = () => useContext(UserContext);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const logOut = () => {
    setCurrentUser(null);
    navigate("/");
  };

  const login = async (user) => {
    await auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        setCurrentUser(userCredential.user);
        setNotify({
          isOpen: true,
          message: "Inicio de sesión exitoso",
          type: "success",
        });
        navigate("/home");
      })
      .catch((error) => {
        setNotify({
          isOpen: true,
          message: "Error al iniciar sesión",
          type: "error",
        });
      });
  };

  const signUp = async (user) => {
    await auth
      .createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        currentUser(userCredential.user);
        setNotify({
          isOpen: true,
          message: "Usuario creado con exito",
          type: "success",
        });
        navigate("/login");
      })
      .catch((error) => {
        setNotify({
          isOpen: true,
          message: "Error al momento de crear el usuario",
          type: "error",
        });
      });
  };

  const values = {
    currentUser,
    login,
    logOut,
    signUp,
  };

  return (
    <Fragment>
      <UserContext.Provider value={values}>{children}</UserContext.Provider>
      <Notification notify={notify} setNotify={setNotify} position={"top"} />
    </Fragment>
  );
};

export default AuthProvider;
