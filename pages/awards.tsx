import Nominee from "@components/Nominee";
import ResultModal from "@components/ResultModal";
import SubmitButton from "@components/SubmitButton";
import PageHeader from "@components/UI/pageHeader";
import SectionHeader from "@components/UI/sectionHeader";
import { CategoryInterface, NomineeInterface } from "@types";
import { useEffect, useState } from "react";

const Awards = () => {
  const [categories, setCategories] = useState<CategoryInterface[]>();
  const [openModal, setOpenModal] = useState(false);

  const selectNominee = (
    categoryId: string,
    nomineeId: string,
    unselect = false
  ) => {
    console.log(unselect);
    const updatedCategories = categories?.map((category) => {
      if (category.selected === nomineeId) category.selected = null;
      else if (category.id === categoryId) category.selected = nomineeId;
      return category;
    });

    setCategories(updatedCategories);
  };

  useEffect(() => {
    const fetchNominees = async () => {
      const response = await fetch("/api/ballots");
      const json = await response.json();
      setCategories(json.items);
    };
    fetchNominees();
  }, []);

  return (
    <>
      <div className="container">
        <PageHeader title="Awards 2021" />
        {categories &&
          categories.map((category, i) => (
            <div key={i} className="container">
              <SectionHeader title={category.title} />

              <div className="row">
                {category.items.length > 0 &&
                  category.items.map((nominee: NomineeInterface, index) => (
                    <div className="col-lg-4 col-sm-6 col-12" key={index}>
                      <Nominee
                        item={nominee}
                        selected={category.selected === nominee.id}
                        // onSelect={() => console.log(category.id, nominee.id)}
                        onSelect={() => selectNominee(category.id, nominee.id)}
                      />
                    </div>
                  ))}
              </div>
            </div>
          ))}

        <SubmitButton onclick={() => setOpenModal(true)} />

        <ResultModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          categories={categories!}
        />
      </div>
    </>
  );
};

export default Awards;
