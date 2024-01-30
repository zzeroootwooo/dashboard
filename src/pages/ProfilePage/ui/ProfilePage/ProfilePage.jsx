// react
import { useContext } from "react";
import { useState } from "react";
//context
import { ProfileContext } from "@/app/providers/context/Profile/ProfileContext";

// styles
import styles from "./ProfilePage.module.scss";

export const ProfilePage = ({}) => {
  const { contextEmail, userContextName, setContextEmail, setUserContextName } =
    useContext(ProfileContext);
  const [editing, setEditing] = useState(false);
  const [editedEmail, setEditedEmail] = useState(contextEmail);
  const [editedUsername, setEditedUsername] = useState(userContextName);

  const handleEmailChange = (e) => {
    setEditedEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setEditedUsername(e.target.value);
  };

  const toggleEditing = () => {
    setEditing(!editing);
  };

  const saveChanges = () => {
    setUserContextName(editedUsername);
    setContextEmail(editedEmail);
    setEditing(false);
  };

  return (
    <div className={styles.ProfilePage}>
      <div>
        <div>
          {editing ? (
            <input
              type="text"
              value={editedUsername}
              onChange={handleUsernameChange}
            />
          ) : (
            userContextName
          )}
        </div>
        <div>
          {editing ? (
            <input
              type="text"
              value={editedEmail}
              onChange={handleEmailChange}
            />
          ) : (
            contextEmail
          )}
        </div>
      </div>
      <div>
        {editing ? (
          <button onClick={saveChanges}>Save</button>
        ) : (
          <button onClick={toggleEditing}>Edit</button>
        )}
      </div>
    </div>
  );
};
