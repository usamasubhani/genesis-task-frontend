import Button from "@components/UI/button";
import { NomineeInterface } from "@types";
import classNames from "classnames";
import styles from "./Nominee.module.css";

interface NomineeProps {
  item: NomineeInterface;
  selected: Boolean;
  onSelect: () => void;
}

const Nominee = ({ item, selected, onSelect }: NomineeProps) => {
  return (
    <div
      className={classNames(styles.nominee, {
        [styles.active]: selected,
      })}
    >
      <div className="row">
        <h3 className="text-center">{item.title}</h3>
      </div>
      <div className="row">
        <div className="col justify-center">
          <img
            className={styles["nominee-img"]}
            src={item.photoUrL}
            alt={item.title}
          />
        </div>
      </div>
      <div className="row">
        <div className="col justify-center">
          <Button label={selected ? "Unselect" : "Select"} onclick={onSelect} />
        </div>
      </div>
    </div>
  );
};

export default Nominee;
