import { createContext, useState } from "react";

export const UserContext = createContext(0);

export default function UserProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userInfo, setUserInfo] = useState(
    localStorage.getItem("userInfo") &&
      JSON.parse(localStorage.getItem("userInfo"))
  );

  async function logout({ setNotes }) {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    setToken(null);
    setUserInfo(null);
    setNotes(null);
  }

  return (
    <UserContext.Provider
      value={{ userInfo, setUserInfo, token, setToken, logout }}
    >
      {children}
    </UserContext.Provider>
  );
}
