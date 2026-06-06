import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface LearningState {
  xpToday: number;
  dailyGoal: number;
  streak: number;
  setXpToday: (xp: number) => void;
  setDailyGoal: (goal: number) => void;
  setStreak: (streak: number) => void;
  addXp: (xp: number) => void;
}

export const useLearningStore = create<LearningState>()(
  persist(
    (set) => ({
      xpToday: 0,
      dailyGoal: 50,
      streak: 0,
      setXpToday: (xpToday) => set({ xpToday }),
      setDailyGoal: (dailyGoal) => set({ dailyGoal }),
      setStreak: (streak) => set({ streak }),
      addXp: (xp) => set((state) => ({ xpToday: state.xpToday + xp })),
    }),
    {
      name: "learning-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
