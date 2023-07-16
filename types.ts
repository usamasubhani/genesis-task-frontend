export interface CategoryInterface {
  id: string;
  title: string;
  items: Array<NomineeInterface>;
  selected: string | null;
}

export interface NomineeInterface {
  id: string;
  title: string;
  photoUrL: string;
}
