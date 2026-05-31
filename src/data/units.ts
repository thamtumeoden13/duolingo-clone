import { Unit } from "@/types/learning";

export const units: Unit[] = [
  {
    id: "unit-es-1",
    languageId: "lang-es",
    title: "Unit 1: The Basics",
    description: "Learn essential greetings and basic introductions in Spanish.",
    order: 1,
    lessons: ["lesson-es-1-1", "lesson-es-1-2", "lesson-es-1-3"],
  },
  {
    id: "unit-fr-1",
    languageId: "lang-fr",
    title: "Unit 1: First Steps",
    description: "Start your journey with basic French phrases and vocabulary.",
    order: 1,
    lessons: ["lesson-fr-1-1"],
  },
];
