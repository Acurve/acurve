import { create } from "zustand"

interface HeroState {
  heroInView: boolean
  setHeroInView: (value: boolean) => void
}

export const useHeroStore = create<HeroState>((set) => ({
  heroInView: true,
  setHeroInView: (value) => set({ heroInView: value }),
}))
