import styles from "./UI.module.css";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className={styles.sectionHeader}>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionHeader;
