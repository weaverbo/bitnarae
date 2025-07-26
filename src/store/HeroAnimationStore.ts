import { create } from "zustand";

type HeroAnimationStore = {
  isHeroAnimationDone: boolean;
  setIsHeroAnimationDone: (value: boolean) => void;
  isHeaderAnimationDone: boolean;
  setIsHeaderAnimationDone: (value: boolean) => void;
};

export const useHeroAnimationStore = create<HeroAnimationStore>((set) => ({
  isHeroAnimationDone: false,
  setIsHeroAnimationDone: (value) => set({ isHeroAnimationDone: value }),
  isHeaderAnimationDone: false,
  setIsHeaderAnimationDone: (value) => set({ isHeaderAnimationDone: value }),
}));
