import { Lesson } from "@/types/learning";

export const lessons: Lesson[] = [
  {
    id: "lesson-es-1-1",
    unitId: "unit-es-1",
    title: "Greetings",
    description: "Learn how to say hello and goodbye in Spanish.",
    type: "practice",
    xp: 10,
    activities: [
      {
        id: "act-es-1-1-1",
        type: "multiple_choice",
        question: 'How do you say "Hello" in Spanish?',
        options: ["Hola", "Adiós", "Gracias", "Por favor"],
        correctAnswer: "Hola",
      },
      {
        id: "act-es-1-1-2",
        type: "translation",
        question: 'Translate "Good morning"',
        correctAnswer: "Buenos días",
      },
    ],
    vocabulary: [
      { id: "vocab-es-1", word: "Hola", translation: "Hello" },
      { id: "vocab-es-1-2", word: "Buenos días", translation: "Good morning" },
    ],
  },
  {
    id: "lesson-es-1-2",
    unitId: "unit-es-1",
    title: "AI Teacher: Greetings",
    description: "Practice your pronunciation with our AI teacher.",
    type: "video",
    xp: 20,
    activities: [],
    vocabulary: [],
    aiTeacherPrompt: "You are a friendly Spanish teacher named Elena. Help the student practice basic greetings. Start by saying '¡Hola! ¿Cómo estás?' and encourage them to respond.",
  },
  {
    id: "lesson-es-1-3",
    unitId: "unit-es-1",
    title: "Chat Practice",
    description: "A quick chat to practice what you've learned.",
    type: "chat",
    xp: 15,
    activities: [],
    vocabulary: [],
    aiTeacherPrompt: "You are chatting with a new friend from Spain. They just said '¡Hola! Me llamo Juan. ¿Y tú?' Respond naturally.",
  },
  {
    id: "lesson-fr-1-1",
    unitId: "unit-fr-1",
    title: "Salut!",
    description: "Basic French greetings.",
    type: "practice",
    xp: 10,
    activities: [
      {
        id: "act-fr-1-1-1",
        type: "multiple_choice",
        question: 'How do you say "Hello" in French?',
        options: ["Bonjour", "Merci", "Salut", "Au revoir"],
        correctAnswer: "Bonjour",
      },
    ],
    vocabulary: [{ id: "vocab-fr-1", word: "Bonjour", translation: "Hello" }],
  },
];
