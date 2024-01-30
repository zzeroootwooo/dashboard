import styles from "./Button.module.scss";

export const Button = ({ children, onClick, disabled }) => {
  return (
    <button onClick={onClick} className={styles.btn} disabled={disabled}>
      {children}
    </button>
  );
};
