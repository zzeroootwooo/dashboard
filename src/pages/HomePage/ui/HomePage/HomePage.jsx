// ui
import { HomeForm } from "../HomeForm/HomeForm";
// styles
import styles from "./HomePage.module.scss";

export const HomePage = ({}) => {
  return (
    <div className={styles.HomePage}>
      <HomeForm />
    </div>
  );
};
