// react
import { useState, useContext } from "react";
// context
import { ProfileContext } from "@/app/providers/context/Profile/ProfileContext";
// ui
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
//styles
import styles from "./HomeForm.module.scss";

export const HomeForm = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUserContextName, setContextEmail } = useContext(ProfileContext);

  const onChangeUsername = (e) => {
    setUserName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onButtonLogin = (e) => {
    e.preventDefault();
    setUserContextName(username);
    setContextEmail(email);
    setEmail("");
    setPassword("");
    setUserName("");
  };

  return (
    <form className={styles.form}>
      <Input
        value={username}
        onChange={onChangeUsername}
        type="text"
        placeholder="Your Username"
      />
      <Input
        value={email}
        onChange={onChangeEmail}
        type="email"
        placeholder="Your Email"
      />
      <Input
        value={password}
        onChange={onChangePassword}
        type="password"
        placeholder="Your Password"
      />
      <Button
        disabled={!username || !email || !password}
        onClick={onButtonLogin}
      >
        Login
      </Button>
    </form>
  );
};
