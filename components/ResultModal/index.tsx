import Modal from "@components/UI/modal";
import { CategoryInterface } from "@types";

interface ResultModalProps {
  open: boolean;
  onClose: () => void;
  categories: CategoryInterface[];
}

const ResultModal = ({ open, onClose, categories }: ResultModalProps) => {
  const resultDetails = () => {
    return categories?.map((category, i) => {
      return (
        <p key={i}>
          {category.title}:
          {category.items.find((c) => c.id === category.selected)?.title}
        </p>
      );
    });
  };

  return (
    <Modal
      text="Success"
      details={resultDetails()}
      open={open}
      onClose={onClose}
    />
  );
};

export default ResultModal;
