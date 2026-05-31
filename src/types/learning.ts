export type LanguageCode = "es" | "fr" | "de" | "it" | "pt" | "ja" | "ko" | "zh";

export interface Language {
  id: string;
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
}

export type ActivityType = "multiple_choice" | "translation" | "listening" | "speaking" | "matching";

export interface VocabularyItem {
  id: string;
  word: string;
  translation: string;
  partOfSpeech?: string;
  exampleSentence?: string;
  audioUrl?: string;
}

export interface Activity {
  id: string;
  type: ActivityType;
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation?: string;
  audioUrl?: string;
  image?: any;
}

export interface Lesson {
  id: string;
  unitId: string;
  title: string;
  description: string;
  type: "video" | "audio" | "chat" | "practice";
  xp: number;
  activities: Activity[];
  vocabulary: VocabularyItem[];
  aiTeacherPrompt?: string; // For Vision Agent / AI lessons
}

export interface Unit {
  id: string;
  languageId: string;
  title: string;
  description: string;
  order: number;
  lessons: string[]; // Array of lesson IDs
}

export interface LessonGoal {
  id: string;
  text: string;
  isCompleted: boolean;
}
