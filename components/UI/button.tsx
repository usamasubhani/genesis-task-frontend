import styles from "./UI.module.css";

interface ButtonProps {
  label: string;
  onclick: () => void;
}

const Button = ({ label, onclick }: ButtonProps) => {
  return (
    <button className={styles.btn} onClick={onclick}>
      {label}
    </button>
  );
};

export default Button;
