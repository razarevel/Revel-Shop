import { create } from "zustand";

interface Props {
  For: string;
  setFor: (newString: string) => void;
  navNum: number;
  setNavNum: (newNum: number | any) => void;
  isInView: boolean;
  setIsInView: (View: boolean) => void;
  allInView: boolean;
  setAllInView: (View: boolean) => void;
  sortPrice: string;
  setSortPrice: (newString: string) => void;
  sortRating: string;
  setSortRating: (newString: string) => void;
  Add_to_cart: number;
  setaddToCart: (newNum: number | any) => void;
}
const useCounter = create<Props>((set) => ({
  navNum: 0,
  setNavNum: (newNum) => set(() => ({ navNum: newNum })),
  For: "",
  setFor: (newString) => set(() => ({ For: newString })),
  isInView: false,
  setIsInView: (View: boolean) => set(() => ({ isInView: View })),
  allInView: false,
  setAllInView: (View: boolean) => set(() => ({ isInView: View })),
  sortPrice: "",
  setSortPrice: (newString) => set(() => ({ sortPrice: newString })),
  sortRating: "",
  setSortRating: (newString) => set(() => ({ sortRating: newString })),
  Add_to_cart: 0,
  setaddToCart: (newNum) => set(() => ({ Add_to_cart: newNum })),
}));
export default useCounter;
