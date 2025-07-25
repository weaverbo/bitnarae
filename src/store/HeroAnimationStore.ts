import { create } from "zustand";

type HeroAnimationStore = {
  isHeroAnimationDone: boolean;
  setHeroAnimationDone: (done: boolean) => void;
};

export const useHeroAnimationStore = create<HeroAnimationStore>((set) => ({
  isHeroAnimationDone: false,
  setHeroAnimationDone: (done) => set({ isHeroAnimationDone: done }),
}));
