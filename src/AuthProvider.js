import { useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("site") || "");
    const navigate = useNavigate();
    const loginAction = async (data) => {
      try {
        const response = fetch("https://api.escuelajs.co/api/v1/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then(r=>r.json()).then((data)=> {
            console.log(data);
          setUser(data.user);
          setToken(data.token);
          localStorage.setItem("site", data.token);
          navigate("/profile");
          return;
        }).catch(e=>{ throw new Error(e.message);})
      } catch (err) {
        console.error(err);
      }
    };
  
    const logOut = () => {
      setUser(null);
      setToken("");
      localStorage.removeItem("site");
      navigate("/login");
    };
  
    return (
      <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
        {children}
      </AuthContext.Provider>
    );
  
  };

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};