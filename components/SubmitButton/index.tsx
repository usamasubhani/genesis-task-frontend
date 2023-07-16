import Button from "@components/UI/button";
import styles from "./SubmitButton.module.css";

interface ButtonProps {
  onclick: () => void;
}

const SubmitButton = ({ onclick }: ButtonProps) => {
  return (
    <div className={styles.submitBtn}>
      <Button label="Submit" onclick={onclick} />
    </div>
  );
};

export default SubmitButton;
