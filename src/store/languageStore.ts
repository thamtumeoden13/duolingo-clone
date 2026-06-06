import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface LanguageState {
  selectedLanguage: string | null;
  setSelectedLanguage: (languageId: string) => void;
  clearLanguage: () => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      selectedLanguage: null,
      setSelectedLanguage: (languageId) => set({ selectedLanguage: languageId }),
      clearLanguage: () => set({ selectedLanguage: null }),
    }),
    {
      name: "language-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
