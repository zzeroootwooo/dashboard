// react
import { useState } from "react";
// context
import { ProfileContext } from "./ProfileContext";

export const ProfileProvider = ({ children }) => {
  const [userContextName, setUserContextName] = useState("");
  const [contextEmail, setContextEmail] = useState("");

  const isUserLoggedIn = userContextName && contextEmail;

  return (
    <ProfileContext.Provider
      value={{
        userContextName,
        contextEmail,
        setUserContextName,
        setContextEmail,
        isUserLoggedIn,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
