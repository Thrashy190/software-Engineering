import React, {
  Fragment,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";
import Notification from "../components/shared/Notifications";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/firebase";
import {
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  deleteUser,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

const UserContext = createContext();

export const useAuth = () => useContext(UserContext);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const logOut = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
    navigate("/");
  };

  const login = async (user) => {
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then(async (userCredential) => {
        setCurrentUser(userCredential.user);
        localStorage.setItem("user", JSON.stringify(userCredential.user));
        await getDoc(doc(db, "users", userCredential.user.uid)).then((doc) => {
          if (doc.exists()) {
            if (doc.data().role === "admin") {
              navigate("/admin/home");
            } else {
              navigate("/courses");
            }
          }
        });
        setNotify({
          isOpen: true,
          message: "Inicio de sesión exitoso",
          type: "success",
        });
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
    console.log(user);
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then(async (userCredential) => {
        const userRef = doc(db, "users", userCredential.user.uid);
        await setDoc(userRef, {
          name: user.name,
          lastname: user.lastname,
          email: user.email,
          createdAt: new Date(),
          role: "user",
        })
          .then(() => {
            setCurrentUser(userCredential.user);
            setNotify({
              isOpen: true,
              message: "Usuario creado con exito",
              type: "success",
            });
            navigate("/mycourses");
          })
          .catch((error) => {
            if (error instanceof Error) {
              deleteUser(userCredential.user);
              setNotify({
                isOpen: true,
                message: "Algo salio mal, intentelo mas tarde",
                type: "error",
              });
            }
          });
      })
      .catch((error) => {
        if (error instanceof Error) {
          if (error.message.includes(AuthErrorCodes.EMAIL_EXISTS)) {
            setNotify({
              isOpen: true,
              message: "El correo ya esta en uso",
              type: "error",
            });
            return;
          }
          setNotify({
            isOpen: true,
            message: "Algo salio mal, intentelo mas tarde",
            type: "error",
          });
        }
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
