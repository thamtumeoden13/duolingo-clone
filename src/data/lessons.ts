import { Lesson } from '@/types/learning';

export const LESSONS: Lesson[] = [
  // ─── English ───────────────────────────────────────────────────────────────

  {
    id: 'en-lesson-1',
    unitId: 'en-unit-1',
    title: 'Hello! Greetings',
    description: 'Learn basic English greetings and farewells',
    icon: '👋',
    xpReward: 10,
    goals: [
      { description: 'Learn 5 greeting words', xpReward: 5 },
      { description: 'Complete all activities', xpReward: 5 },
    ],
    vocabulary: [
      { word: 'Hello', translation: 'Xin chào', pronunciation: 'heh-LOH', emoji: '👋' },
      { word: 'Goodbye', translation: 'Tạm biệt', pronunciation: 'ɡʊd-BAɪ', emoji: '👋' },
      { word: 'Morning', translation: 'Buổi sáng', pronunciation: 'MAWR-ning', emoji: '🌅' },
      { word: 'Afternoon', translation: 'Buổi chiều', pronunciation: 'af-ter-NOON', emoji: '☀️' },
      { word: 'Night', translation: 'Buổi đêm', pronunciation: 'naɪt', emoji: '🌙' },
    ],
    phrases: [
      { text: 'How are you?', translation: 'Bạn khỏe không?', pronunciation: 'haʊ aar yoo' },
      { text: 'I am fine, thank you.', translation: 'Tôi khỏe, cảm ơn.', pronunciation: 'aɪ æm faɪn, θæŋk yoo' },
      { text: 'Nice to meet you.', translation: 'Rất vui được gặp bạn.', pronunciation: 'naɪs too meet yoo' },
    ],
    activities: [
      {
        id: 'en-lesson-1-act-1',
        type: 'multiple-choice',
        question: 'What does "Hello" mean?',
        correctAnswer: 'Xin chào',
        options: ['Xin chào', 'Tạm biệt', 'Cảm ơn', 'Làm ơn'],
      },
      {
        id: 'en-lesson-1-act-2',
        type: 'multiple-choice',
        question: 'How do you say "Buổi sáng" in English?',
        correctAnswer: 'Morning',
        options: ['Night', 'Morning', 'Afternoon', 'Goodbye'],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Sarah, a warm and energetic English teacher. Today you're teaching basic greetings like 'Hello' and 'Goodbye', and phrases like 'How are you?'. Use contractions and keep it friendly. Introduce one item at a time, explain it in English, and always ask the student to repeat it. Stick strictly to this lesson's vocabulary.",
      introMessage:
        "Hi there! I'm Sarah, and I'm so excited to help you learn English. We're starting with something very useful: greetings! Ready to jump in?",
      topics: ['greetings', 'farewells', 'asking how someone is'],
    },
  },

  {
    id: 'en-lesson-2',
    unitId: 'en-unit-1',
    title: 'Introductions',
    description: 'Introduce yourself and ask for others\' names',
    icon: '🙋',
    xpReward: 10,
    goals: [
      { description: 'Say your name in English', xpReward: 5 },
      { description: 'Ask someone\'s name', xpReward: 5 },
    ],
    vocabulary: [
      { word: 'Name', translation: 'Tên', pronunciation: 'neɪm', emoji: '🏷️' },
      { word: 'From', translation: 'Đến từ', pronunciation: 'frɒm', emoji: '📍' },
      { word: 'Student', translation: 'Học sinh', pronunciation: 'STOO-dent', emoji: '🎓' },
    ],
    phrases: [
      { text: 'What is your name?', translation: 'Tên bạn là gì?', pronunciation: 'wɒt ɪz yɔː neɪm' },
      { text: 'My name is Peter.', translation: 'Tên tôi là Peter.', pronunciation: 'maɪ neɪm ɪz PEE-ter' },
      { text: 'Where are you from?', translation: 'Bạn từ đâu đến?', pronunciation: 'weər aar yoo frɒm' },
    ],
    activities: [
      {
        id: 'en-lesson-2-act-1',
        type: 'multiple-choice',
        question: 'How do you say "Tên tôi là" in English?',
        correctAnswer: 'My name is',
        options: ['My name is', 'I from', 'What is', 'Nice to'],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Sarah, a friendly English teacher. You're helping the student learn how to introduce themselves using 'Name', 'From', and 'Student'. Focus on the phrase 'What is your name?'. Be encouraging, use natural English with contractions, and ask the student to try out the phrases.",
      introMessage:
        "Hello! I'm Sarah. It's so nice to meet you! Today, we'll learn how to introduce ourselves in English. Shall we start with names?",
      topics: ['introductions', 'names', 'origin'],
    },
  },

  {
    id: 'en-lesson-3',
    unitId: 'en-unit-1',
    title: 'Numbers 1–10',
    description: 'Learn to count from one to ten',
    icon: '🔢',
    xpReward: 10,
    goals: [{ description: 'Learn numbers 1 to 10', xpReward: 10 }],
    vocabulary: [
      { word: 'One', translation: '1', pronunciation: 'wʌn', emoji: '1️⃣' },
      { word: 'Two', translation: '2', pronunciation: 'too', emoji: '2️⃣' },
      { word: 'Three', translation: '3', pronunciation: 'θree', emoji: '3️⃣' },
      { word: 'Four', translation: '4', pronunciation: 'fɔːr', emoji: '4️⃣' },
      { word: 'Five', translation: '5', pronunciation: 'faɪv', emoji: '5️⃣' },
      { word: 'Six', translation: '6', pronunciation: 'sɪks', emoji: '6️⃣' },
      { word: 'Seven', translation: '7', pronunciation: 'SEV-ən', emoji: '7️⃣' },
      { word: 'Eight', translation: '8', pronunciation: 'eɪt', emoji: '8️⃣' },
      { word: 'Nine', translation: '9', pronunciation: 'naɪn', emoji: '9️⃣' },
      { word: 'Ten', translation: '10', pronunciation: 'ten', emoji: '🔟' },
    ],
    phrases: [
      { text: 'How many?', translation: 'Bao nhiêu?', pronunciation: 'haʊ MEN-ee' },
    ],
    activities: [],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Sarah, an energetic English teacher. You're teaching numbers 1 through 10. Keep the energy high and the sentences short. Introduce numbers slowly, say them clearly, and have the student repeat them. Don't teach anything beyond 1-10.",
      introMessage:
        "Hi! I'm Sarah. Are you ready to count? We're going to learn the numbers from one to ten today. It'll be fun!",
      topics: ['numbers', 'counting'],
    },
  },

  {
    id: 'en-lesson-4',
    unitId: 'en-unit-1',
    title: 'Colors',
    description: 'Learn basic colors in English',
    icon: '🎨',
    xpReward: 10,
    goals: [],
    vocabulary: [
      { word: 'Red', translation: 'Đỏ', pronunciation: 'red', emoji: '🔴' },
      { word: 'Blue', translation: 'Xanh dương', pronunciation: 'bloo', emoji: '🔵' },
      { word: 'Green', translation: 'Xanh lá', pronunciation: 'ɡreen', emoji: '🟢' },
      { word: 'Yellow', translation: 'Vàng', pronunciation: 'YEL-oh', emoji: '🟡' },
      { word: 'Black', translation: 'Đen', pronunciation: 'blæk', emoji: '⚫' },
      { word: 'White', translation: 'Trắng', pronunciation: 'waɪt', emoji: '⚪' },
    ],
    phrases: [
      { text: 'What color is it?', translation: 'Nó là màu gì?', pronunciation: 'wɒt KUL-ər ɪz ɪt' },
    ],
    activities: [],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Sarah, a warm English teacher. You're teaching the colors 'Red', 'Blue', 'Green', 'Yellow', 'Black', and 'White'. Use a friendly, conversational tone and ask the student to identify colors or repeat the words. Stay focused on these basic colors.",
      introMessage:
        "Hello! Sarah here. Our world is so colorful, isn't it? Let's learn the names of some basic colors in English today!",
      topics: ['colors'],
    },
  },

  {
    id: 'en-lesson-5',
    unitId: 'en-unit-1',
    title: 'Food & Drinks',
    description: 'Common food and drink items',
    icon: '🍕',
    xpReward: 15,
    goals: [],
    vocabulary: [
      { word: 'Water', translation: 'Nước', pronunciation: 'WAW-tər', emoji: '💧' },
      { word: 'Bread', translation: 'Bánh mì', pronunciation: 'bred', emoji: '🍞' },
      { word: 'Milk', translation: 'Sữa', pronunciation: 'mɪlk', emoji: '🥛' },
      { word: 'Apple', translation: 'Táo', pronunciation: 'AP-əl', emoji: '🍎' },
      { word: 'Coffee', translation: 'Cà phê', pronunciation: 'KAW-fee', emoji: '☕' },
    ],
    phrases: [
      { text: 'I drink water.', translation: 'Tôi uống nước.', pronunciation: 'aɪ drɪŋk WAW-tər' },
      { text: 'I eat an apple.', translation: 'Tôi ăn một quả táo.', pronunciation: 'aɪ eet æn AP-əl' },
    ],
    activities: [],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Sarah, an encouraging English teacher. You're teaching food and drink words like 'Water', 'Bread', 'Milk', 'Apple', and 'Coffee'. Use short sentences and contractions. Ask the student to repeat the words and try the simple phrases 'I drink water' or 'I eat an apple'.",
      introMessage:
        "Hi! I'm Sarah. I was just thinking about lunch! Want to learn how to say some common food and drink names in English?",
      topics: ['food', 'drinks'],
    },
  },

  // ─── Spanish ───────────────────────────────────────────────────────────────

  {
    id: 'es-lesson-1',
    unitId: 'es-unit-1',
    title: 'Hola! Greetings',
    description: 'Learn how to say hello and goodbye in Spanish',
    icon: '👋',
    xpReward: 10,
    goals: [
      { description: 'Learn 5 greeting words', xpReward: 5 },
      { description: 'Complete all activities', xpReward: 5 },
    ],
    vocabulary: [
      { word: 'Hola', translation: 'Hello', pronunciation: 'OH-lah', emoji: '👋' },
      { word: 'Adiós', translation: 'Goodbye', pronunciation: 'ah-DYOHS', emoji: '👋' },
      { word: 'Buenos días', translation: 'Good morning', pronunciation: 'BWEH-nohs DEE-ahs', emoji: '🌅' },
      { word: 'Buenas tardes', translation: 'Good afternoon', pronunciation: 'BWEH-nahs TAR-dehs', emoji: '☀️' },
      { word: 'Buenas noches', translation: 'Good night', pronunciation: 'BWEH-nahs NOH-chehs', emoji: '🌙' },
    ],
    phrases: [
      { text: '¿Cómo estás?', translation: 'How are you?', pronunciation: 'KOH-moh ehs-TAHS' },
      { text: 'Estoy bien, gracias.', translation: 'I am fine, thank you.', pronunciation: 'ehs-TOY BYEHN, GRAH-syahs' },
      { text: 'Mucho gusto.', translation: 'Nice to meet you.', pronunciation: 'MOO-choh GOOS-toh' },
    ],
    activities: [
      {
        id: 'es-lesson-1-act-1',
        type: 'multiple-choice',
        question: 'What does "Hola" mean?',
        correctAnswer: 'Hello',
        options: ['Hello', 'Goodbye', 'Thank you', 'Please'],
      },
      {
        id: 'es-lesson-1-act-2',
        type: 'multiple-choice',
        question: 'How do you say "Good morning" in Spanish?',
        correctAnswer: 'Buenos días',
        options: ['Buenas noches', 'Buenos días', 'Buenas tardes', 'Adiós'],
      },
      {
        id: 'es-lesson-1-act-3',
        type: 'translate',
        question: 'Translate: "Good night"',
        correctAnswer: 'Buenas noches',
        hint: 'Think about when you go to sleep.',
      },
      {
        id: 'es-lesson-1-act-4',
        type: 'multiple-choice',
        question: 'What does "¿Cómo estás?" mean?',
        correctAnswer: 'How are you?',
        options: ['How are you?', 'What is your name?', 'Where are you from?', 'Nice to meet you.'],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Luna, a warm and upbeat Spanish teacher. Today we're learning basic greetings like 'Hola' and 'Adiós'. Introduce one item at a time, explain it in English, and ask the student to repeat it. Be energetic and use natural sentences with contractions. Stick strictly to these greetings.",
      introMessage:
        "¡Hola! I'm Luna, and I'm so excited to be your Spanish teacher. Ready to learn your first Spanish words? Let's start with some greetings!",
      topics: ['greetings', 'farewells', 'time-of-day phrases', 'asking how someone is'],
    },
  },

  {
    id: 'es-lesson-2',
    unitId: 'es-unit-1',
    title: 'Introductions',
    description: 'Introduce yourself and ask for names',
    icon: '🙋',
    xpReward: 10,
    goals: [
      { description: 'Learn how to say your name', xpReward: 5 },
      { description: 'Ask someone else\'s name', xpReward: 5 },
    ],
    vocabulary: [
      { word: 'Me llamo', translation: 'My name is', pronunciation: 'meh YAH-moh', emoji: '🙋' },
      { word: 'Soy', translation: 'I am', pronunciation: 'SOY', emoji: '👤' },
      { word: 'Nombre', translation: 'Name', pronunciation: 'NOHM-breh', emoji: '🏷️' },
      { word: 'De', translation: 'From', pronunciation: 'DEH', emoji: '📍' },
      { word: 'Encantado/a', translation: 'Pleased to meet you', pronunciation: 'ehn-kahn-TAH-doh', emoji: '😊' },
    ],
    phrases: [
      { text: '¿Cómo te llamas?', translation: 'What is your name?', pronunciation: 'KOH-moh teh YAH-mahs' },
      { text: 'Me llamo Ana.', translation: 'My name is Ana.', pronunciation: 'meh YAH-moh AH-nah' },
      { text: '¿De dónde eres?', translation: 'Where are you from?', pronunciation: 'deh DOHN-deh EH-rehs' },
      { text: 'Soy de México.', translation: 'I am from Mexico.', pronunciation: 'SOY deh MEH-hee-koh' },
    ],
    activities: [
      {
        id: 'es-lesson-2-act-1',
        type: 'multiple-choice',
        question: 'How do you say "My name is" in Spanish?',
        correctAnswer: 'Me llamo',
        options: ['Me llamo', 'Soy de', 'Cómo te', 'Encantado'],
      },
      {
        id: 'es-lesson-2-act-2',
        type: 'multiple-choice',
        question: 'What does "¿Cómo te llamas?" mean?',
        correctAnswer: 'What is your name?',
        options: ['What is your name?', 'How are you?', 'Where are you from?', 'Nice to meet you.'],
      },
      {
        id: 'es-lesson-2-act-3',
        type: 'translate',
        question: 'Translate: "Where are you from?"',
        correctAnswer: '¿De dónde eres?',
        hint: 'You use "dónde" for where.',
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Luna, a friendly Spanish teacher. We're learning how to introduce ourselves using 'Me llamo', 'Soy de', and asking '¿Cómo te llamas?'. Introduce one phrase at a time, translate it, and encourage the student to repeat it. Keep it warm and conversational.",
      introMessage:
        "¡Hola! Luna here. It's so good to see you again! Today we'll learn how to introduce ourselves in Spanish. It's going to be great!",
      topics: ['introductions', 'saying your name', 'asking names', 'where you are from'],
    },
  },

  {
    id: 'es-lesson-3',
    unitId: 'es-unit-1',
    title: 'Numbers 1–10',
    description: 'Count from one to ten in Spanish',
    icon: '🔢',
    xpReward: 10,
    goals: [
      { description: 'Learn numbers 1 to 10', xpReward: 7 },
      { description: 'Complete all activities', xpReward: 3 },
    ],
    vocabulary: [
      { word: 'Uno', translation: '1 — One', pronunciation: 'OO-noh', emoji: '1️⃣' },
      { word: 'Dos', translation: '2 — Two', pronunciation: 'DOHS', emoji: '2️⃣' },
      { word: 'Tres', translation: '3 — Three', pronunciation: 'TREHS', emoji: '3️⃣' },
      { word: 'Cuatro', translation: '4 — Four', pronunciation: 'KWAH-troh', emoji: '4️⃣' },
      { word: 'Cinco', translation: '5 — Five', pronunciation: 'SEEN-koh', emoji: '5️⃣' },
      { word: 'Seis', translation: '6 — Six', pronunciation: 'SAYS', emoji: '6️⃣' },
      { word: 'Siete', translation: '7 — Seven', pronunciation: 'SYEH-teh', emoji: '7️⃣' },
      { word: 'Ocho', translation: '8 — Eight', pronunciation: 'OH-choh', emoji: '8️⃣' },
      { word: 'Nueve', translation: '9 — Nine', pronunciation: 'NWEH-beh', emoji: '9️⃣' },
      { word: 'Diez', translation: '10 — Ten', pronunciation: 'DYEHS', emoji: '🔟' },
    ],
    phrases: [
      { text: '¿Cuántos son?', translation: 'How many are there?', pronunciation: 'KWAHN-tohs SOHN' },
      { text: 'Son cinco.', translation: 'There are five.', pronunciation: 'SOHN SEEN-koh' },
    ],
    activities: [
      {
        id: 'es-lesson-3-act-1',
        type: 'multiple-choice',
        question: 'What is "cinco" in English?',
        correctAnswer: 'Five',
        options: ['Three', 'Four', 'Five', 'Six'],
      },
      {
        id: 'es-lesson-3-act-2',
        type: 'multiple-choice',
        question: 'How do you say "eight" in Spanish?',
        correctAnswer: 'Ocho',
        options: ['Siete', 'Nueve', 'Ocho', 'Seis'],
      },
      {
        id: 'es-lesson-3-act-3',
        type: 'translate',
        question: 'Translate: "Ten"',
        correctAnswer: 'Diez',
        hint: 'It sounds like "dyehs".',
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Luna, an energetic Spanish teacher. We're counting from 1 to 10. Introduce the numbers slowly, say them clearly in Spanish, and have the student repeat them. Use a warm tone and give lots of encouragement. Don't go beyond 10.",
      introMessage:
        "¡Hola! Ready to count in Spanish? We're learning the numbers from one to ten today. Let's get started!",
      topics: ['numbers 1-10', 'counting', 'how many'],
    },
  },

  {
    id: 'es-lesson-4',
    unitId: 'es-unit-1',
    title: 'Colors',
    description: 'Learn basic colors in Spanish',
    icon: '🎨',
    xpReward: 10,
    goals: [
      { description: 'Learn 6 colors in Spanish', xpReward: 6 },
      { description: 'Complete all activities', xpReward: 4 },
    ],
    vocabulary: [
      { word: 'Rojo', translation: 'Red', pronunciation: 'ROH-hoh', emoji: '🔴' },
      { word: 'Azul', translation: 'Blue', pronunciation: 'ah-SOOL', emoji: '🔵' },
      { word: 'Verde', translation: 'Green', pronunciation: 'BEHR-deh', emoji: '🟢' },
      { word: 'Amarillo', translation: 'Yellow', pronunciation: 'ah-mah-REE-yoh', emoji: '🟡' },
      { word: 'Negro', translation: 'Black', pronunciation: 'NEH-groh', emoji: '⚫' },
      { word: 'Blanco', translation: 'White', pronunciation: 'BLAHN-koh', emoji: '⚪' },
    ],
    phrases: [
      { text: '¿De qué color es esto?', translation: 'What color is this?', pronunciation: 'deh keh koh-LOHR ehs EHS-toh' },
      { text: 'Es rojo.', translation: 'It is red.', pronunciation: 'ehs ROH-hoh' },
    ],
    activities: [
      {
        id: 'es-lesson-4-act-1',
        type: 'multiple-choice',
        question: 'What does "azul" mean?',
        correctAnswer: 'Blue',
        options: ['Red', 'Blue', 'Green', 'Yellow'],
      },
      {
        id: 'es-lesson-4-act-2',
        type: 'multiple-choice',
        question: 'How do you say "green" in Spanish?',
        correctAnswer: 'Verde',
        options: ['Rojo', 'Azul', 'Verde', 'Amarillo'],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Luna, a warm Spanish teacher. You're teaching the colors 'Rojo', 'Azul', 'Verde', 'Amarillo', 'Negro', and 'Blanco'. Use a friendly, conversational tone and ask the student to repeat the words or identify colors. Stay focused on these basic colors.",
      introMessage:
        "¡Hola! Luna here. Let's learn the names of some basic colors in Spanish today. Ready to add some color to your vocabulary?",
      topics: ['colors'],
    },
  },

  {
    id: 'es-lesson-5',
    unitId: 'es-unit-1',
    title: 'Food & Drinks',
    description: 'Learn vocabulary for food and drinks in Spanish',
    icon: '🍕',
    xpReward: 15,
    goals: [
      { description: 'Learn 5 food and drink words', xpReward: 8 },
    ],
    vocabulary: [
      { word: 'Pan', translation: 'Bread', pronunciation: 'PAHN', emoji: '🍞' },
      { word: 'Leche', translation: 'Milk', pronunciation: 'LEH-cheh', emoji: '🥛' },
      { word: 'Agua', translation: 'Water', pronunciation: 'AH-gwah', emoji: '💧' },
      { word: 'Fruta', translation: 'Fruit', pronunciation: 'FROO-tah', emoji: '🍎' },
      { word: 'Queso', translation: 'Cheese', pronunciation: 'KEH-soh', emoji: '🧀' },
    ],
    phrases: [
      { text: 'Yo como pan.', translation: 'I eat bread.', pronunciation: 'yoh KOH-moh pahn' },
      { text: 'Yo bebo agua.', translation: 'I drink water.', pronunciation: 'yoh BEH-boh AH-gwah' },
    ],
    activities: [],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Luna, an encouraging Spanish teacher. You're teaching food and drink words like 'Pan', 'Leche', 'Agua', and 'Fruta'. Use short sentences and contractions. Ask the student to repeat the words and try the simple phrases like 'Yo como pan'.",
      introMessage:
        "¡Hola! I'm Luna. Let's talk about food! I love Spanish food. Want to learn how to say some common food and drink names in Spanish?",
      topics: ['food', 'drinks'],
    },
  },

  // ─── French ────────────────────────────────────────────────────────────────

  {
    id: 'fr-lesson-1',
    unitId: 'fr-unit-1',
    title: 'Bonjour! Greetings',
    description: 'Learn everyday French greetings',
    icon: '👋',
    xpReward: 10,
    goals: [
      { description: 'Learn 5 French greetings', xpReward: 5 },
      { description: 'Complete all activities', xpReward: 5 },
    ],
    vocabulary: [
      { word: 'Bonjour', translation: 'Hello / Good day', pronunciation: 'bohn-ZHOOR', emoji: '☀️' },
      { word: 'Bonsoir', translation: 'Good evening', pronunciation: 'bohn-SWAHR', emoji: '🌙' },
      { word: 'Au revoir', translation: 'Goodbye', pronunciation: 'oh ruh-VWAHR', emoji: '👋' },
      { word: 'Salut', translation: 'Hi (informal)', pronunciation: 'sah-LÜ', emoji: '🙋' },
      { word: 'Merci', translation: 'Thank you', pronunciation: 'mehr-SEE', emoji: '🙏' },
    ],
    phrases: [
      { text: 'Comment allez-vous ?', translation: 'How are you? (formal)', pronunciation: 'koh-MAHN tah-lay-VOO' },
      { text: 'Ça va bien, merci.', translation: 'I\'m doing well, thank you.', pronunciation: 'sah VAH BYAHN, mehr-SEE' },
      { text: 'Enchanté(e).', translation: 'Nice to meet you.', pronunciation: 'ahn-shahn-TAY' },
    ],
    activities: [
      {
        id: 'fr-lesson-1-act-1',
        type: 'multiple-choice',
        question: 'What does "Bonjour" mean?',
        correctAnswer: 'Hello / Good day',
        options: ['Hello / Good day', 'Goodbye', 'Good evening', 'Thank you'],
      },
      {
        id: 'fr-lesson-1-act-2',
        type: 'multiple-choice',
        question: 'How do you say "Goodbye" in French?',
        correctAnswer: 'Au revoir',
        options: ['Bonjour', 'Salut', 'Au revoir', 'Merci'],
      },
      {
        id: 'fr-lesson-1-act-3',
        type: 'translate',
        question: 'Translate: "Thank you"',
        correctAnswer: 'Merci',
        hint: 'It ends with "-ci".',
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Marc, a warm and friendly French teacher. Today you're teaching greetings like 'Bonjour' and 'Au revoir'. Introduce one greeting at a time, translate it, and ask the student to repeat it. Use a natural tone with contractions in English.",
      introMessage:
        "Bonjour! I'm Marc, and I'm so happy to help you learn French. Let's start with some basic greetings. Are you ready?",
      topics: ['greetings', 'farewells', 'politeness expressions', 'asking how someone is'],
    },
  },

  {
    id: 'fr-lesson-2',
    unitId: 'fr-unit-1',
    title: 'Introductions',
    description: 'Say your name and learn about others in French',
    icon: '🙋',
    xpReward: 10,
    goals: [
      { description: 'Say your name in French', xpReward: 5 },
      { description: 'Ask for someone\'s name', xpReward: 5 },
    ],
    vocabulary: [
      { word: 'Je m\'appelle', translation: 'My name is', pronunciation: 'zhuh mah-PELL', emoji: '🙋' },
      { word: 'Je suis', translation: 'I am', pronunciation: 'zhuh SWEE', emoji: '👤' },
      { word: 'De', translation: 'From', pronunciation: 'duh', emoji: '📍' },
      { word: 'Français(e)', translation: 'French', pronunciation: 'frahn-SAY', emoji: '🇫🇷' },
      { word: 'Enchanté(e)', translation: 'Pleased to meet you', pronunciation: 'ahn-shahn-TAY', emoji: '😊' },
    ],
    phrases: [
      { text: 'Comment vous appelez-vous ?', translation: 'What is your name? (formal)', pronunciation: 'koh-MAHN voo zah-play-VOO' },
      { text: 'Je m\'appelle Marie.', translation: 'My name is Marie.', pronunciation: 'zhuh mah-PELL mah-REE' },
      { text: 'D\'où venez-vous ?', translation: 'Where are you from?', pronunciation: 'doo vuh-nay-VOO' },
    ],
    activities: [
      {
        id: 'fr-lesson-2-act-1',
        type: 'multiple-choice',
        question: 'How do you say "My name is" in French?',
        correctAnswer: 'Je m\'appelle',
        options: ['Je suis', 'Je m\'appelle', 'Comment vous', 'D\'où venez'],
      },
      {
        id: 'fr-lesson-2-act-2',
        type: 'translate',
        question: 'Translate: "Where are you from?"',
        correctAnswer: 'D\'où venez-vous ?',
        hint: 'Starts with "D\'où".',
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Marc, a friendly French teacher. We're learning how to introduce ourselves using 'Je m'appelle', 'Je suis', and asking 'Comment vous appelez-vous?'. Introduce one phrase at a time, translate it, and encourage the student to repeat it. Keep it warm and conversational.",
      introMessage:
        "Bonjour! Marc here. It's so good to meet you! Today we'll learn how to introduce ourselves in French. It's going to be great!",
      topics: ['introductions', 'saying your name', 'asking names', 'where you are from'],
    },
  },

  // ─── Japanese ──────────────────────────────────────────────────────────────

  {
    id: 'ja-lesson-1',
    unitId: 'ja-unit-1',
    title: 'こんにちは — Greetings',
    description: 'Learn essential Japanese greetings',
    icon: '🎌',
    xpReward: 10,
    goals: [
      { description: 'Learn 5 Japanese greetings', xpReward: 5 },
      { description: 'Complete all activities', xpReward: 5 },
    ],
    vocabulary: [
      { word: 'こんにちは', translation: 'Hello', pronunciation: 'kon-ni-chi-wa', emoji: '👋' },
      { word: 'おはようございます', translation: 'Good morning', pronunciation: 'o-ha-yo go-zai-mas', emoji: '🌅' },
      { word: 'こんばんは', translation: 'Good evening', pronunciation: 'kon-ban-wa', emoji: '🌙' },
      { word: 'さようなら', translation: 'Goodbye', pronunciation: 'sa-yo-na-ra', emoji: '👋' },
      { word: 'ありがとう', translation: 'Thank you', pronunciation: 'a-ri-ga-to', emoji: '🙏' },
    ],
    phrases: [
      { text: 'お元気ですか？', translation: 'How are you?', pronunciation: 'o-gen-ki des-ka' },
      { text: '元気です、ありがとう。', translation: 'I\'m fine, thank you.', pronunciation: 'gen-ki des, a-ri-ga-to' },
      { text: 'はじめまして。', translation: 'Nice to meet you.', pronunciation: 'ha-ji-me-ma-shi-te' },
    ],
    activities: [
      {
        id: 'ja-lesson-1-act-1',
        type: 'multiple-choice',
        question: 'What does "こんにちは" mean?',
        correctAnswer: 'Hello',
        options: ['Hello', 'Goodbye', 'Good morning', 'Thank you'],
      },
      {
        id: 'ja-lesson-1-act-2',
        type: 'multiple-choice',
        question: 'How do you say "Good morning" in Japanese?',
        correctAnswer: 'おはようございます',
        options: ['こんにちは', 'おはようございます', 'こんばんは', 'さようなら'],
      },
      {
        id: 'ja-lesson-1-act-3',
        type: 'translate',
        question: 'Translate: "Thank you"',
        correctAnswer: 'ありがとう',
        hint: 'Pronounced "a-ri-ga-to".',
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Yuki, a warm and friendly Japanese teacher. Today we're learning basic greetings like 'こんにちは' and 'さようなら'. Introduce one item at a time, translate it, and ask the student to repeat it. Be energetic and use natural sentences with contractions in English.",
      introMessage:
        "こんにちは! I'm Yuki, and I'm so happy to be your Japanese teacher. Ready to learn your first Japanese words? Let's start with some greetings!",
      topics: ['greetings', 'farewells', 'politeness', 'time-of-day phrases'],
    },
  },

  {
    id: 'ja-lesson-2',
    unitId: 'ja-unit-1',
    title: 'Self Introduction',
    description: 'Introduce yourself in Japanese',
    icon: '🙋',
    xpReward: 10,
    goals: [
      { description: 'Say your name in Japanese', xpReward: 5 },
      { description: 'Complete all activities', xpReward: 5 },
    ],
    vocabulary: [
      { word: 'わたしは', translation: 'I am / As for me', pronunciation: 'wa-ta-shi-wa', emoji: '👤' },
      { word: 'なまえ', translation: 'Name', pronunciation: 'na-ma-e', emoji: '🏷️' },
      { word: 'です', translation: 'Am / Is / Are (polite)', pronunciation: 'des', emoji: '✅' },
      { word: 'どうぞよろしく', translation: 'Please treat me well', pronunciation: 'do-zo yo-ro-shi-ku', emoji: '🤝' },
      { word: 'から来ました', translation: 'I came from', pronunciation: 'ka-ra ki-ma-shi-ta', emoji: '📍' },
    ],
    phrases: [
      { text: 'わたしは アナ です。', translation: 'I am Ana.', pronunciation: 'wa-ta-shi-wa A-na des' },
      { text: 'おなまえは？', translation: 'What is your name?', pronunciation: 'o-na-ma-e-wa' },
      { text: 'アメリカから来ました。', translation: 'I came from America.', pronunciation: 'A-me-ri-ka ka-ra ki-ma-shi-ta' },
    ],
    activities: [
      {
        id: 'ja-lesson-2-act-1',
        type: 'multiple-choice',
        question: 'How do you say "I am" in Japanese?',
        correctAnswer: 'わたしは',
        options: ['わたしは', 'なまえ', 'どうぞ', 'から'],
      },
      {
        id: 'ja-lesson-2-act-2',
        type: 'multiple-choice',
        question: 'What does "おなまえは？" mean?',
        correctAnswer: 'What is your name?',
        options: ['How are you?', 'Where are you from?', 'What is your name?', 'Nice to meet you.'],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Yuki, a warm and friendly Japanese teacher. Today we're learning how to introduce yourself using 'わたしは...です'. Introduce the pattern simply, give an example, and ask the student to try saying their name. Keep it encouraging and use natural English with contractions.",
      introMessage:
        "こんにちは! Yuki here. It's so nice to meet you! Today we're learning a very important skill: how to introduce yourself in Japanese. You ready?",
      topics: ['self-introduction', 'saying your name', 'where you are from', 'polite expressions'],
    },
  },

  // ─── German ────────────────────────────────────────────────────────────────

  {
    id: 'de-lesson-1',
    unitId: 'de-unit-1',
    title: 'Hallo! Greetings',
    description: 'Learn how to greet people in German',
    icon: '👋',
    xpReward: 10,
    goals: [
      { description: 'Learn 5 German greetings', xpReward: 5 },
      { description: 'Complete all activities', xpReward: 5 },
    ],
    vocabulary: [
      { word: 'Hallo', translation: 'Hello', pronunciation: 'HAH-loh', emoji: '👋' },
      { word: 'Guten Morgen', translation: 'Good morning', pronunciation: 'GOO-ten MOR-gen', emoji: '🌅' },
      { word: 'Guten Abend', translation: 'Good evening', pronunciation: 'GOO-ten AH-bent', emoji: '🌙' },
      { word: 'Auf Wiedersehen', translation: 'Goodbye', pronunciation: 'owf VEE-der-zayn', emoji: '👋' },
      { word: 'Danke', translation: 'Thank you', pronunciation: 'DAHN-keh', emoji: '🙏' },
    ],
    phrases: [
      { text: 'Wie geht es Ihnen?', translation: 'How are you? (formal)', pronunciation: 'vee gayt es EE-nen' },
      { text: 'Mir geht es gut, danke.', translation: 'I\'m doing well, thank you.', pronunciation: 'meer gayt es GOOT, DAHN-keh' },
      { text: 'Schön, Sie kennenzulernen.', translation: 'Nice to meet you.', pronunciation: 'shern zee KEN-en-tsu-ler-nen' },
    ],
    activities: [
      {
        id: 'de-lesson-1-act-1',
        type: 'multiple-choice',
        question: 'What does "Guten Morgen" mean?',
        correctAnswer: 'Good morning',
        options: ['Good morning', 'Good evening', 'Goodbye', 'Hello'],
      },
      {
        id: 'de-lesson-1-act-2',
        type: 'multiple-choice',
        question: 'How do you say "Thank you" in German?',
        correctAnswer: 'Danke',
        options: ['Hallo', 'Bitte', 'Danke', 'Ja'],
      },
      {
        id: 'de-lesson-1-act-3',
        type: 'translate',
        question: 'Translate: "Goodbye"',
        correctAnswer: 'Auf Wiedersehen',
        hint: 'It literally means "until we see each other again".',
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Max, a warm and friendly German teacher. Today you're teaching greetings like 'Hallo' and 'Guten Morgen'. Introduce one greeting at a time, translate it, and ask the student to repeat it. Use a natural tone with contractions in English.",
      introMessage:
        "Hallo! I'm Max, and I'm so happy to help you learn German. Let's start with some basic greetings. Are you ready?",
      topics: ['greetings', 'farewells', 'time-of-day phrases', 'politeness'],
    },
  },

  {
    id: 'de-lesson-2',
    unitId: 'de-unit-1',
    title: 'Introductions',
    description: 'Say your name and meet new people in German',
    icon: '🙋',
    xpReward: 10,
    goals: [
      { description: 'Say your name in German', xpReward: 5 },
      { description: 'Ask for someone\'s name', xpReward: 5 },
    ],
    vocabulary: [
      { word: 'Ich heiße', translation: 'My name is', pronunciation: 'ikh HY-seh', emoji: '🙋' },
      { word: 'Ich bin', translation: 'I am', pronunciation: 'ikh BIN', emoji: '👤' },
      { word: 'Name', translation: 'Name', pronunciation: 'NAH-meh', emoji: '🏷️' },
      { word: 'Aus', translation: 'From', pronunciation: 'OWS', emoji: '📍' },
      { word: 'Freut mich', translation: 'Pleased to meet you', pronunciation: 'froyt mikh', emoji: '😊' },
    ],
    phrases: [
      { text: 'Wie heißen Sie?', translation: 'What is your name? (formal)', pronunciation: 'vee HY-sen zee' },
      { text: 'Ich heiße Thomas.', translation: 'My name is Thomas.', pronunciation: 'ikh HY-seh TOH-mas' },
      { text: 'Woher kommen Sie?', translation: 'Where are you from?', pronunciation: 'vo-HAYR KOM-en zee' },
      { text: 'Ich komme aus Deutschland.', translation: 'I come from Germany.', pronunciation: 'ikh KOM-eh ows DOYCH-lant' },
    ],
    activities: [
      {
        id: 'de-lesson-2-act-1',
        type: 'multiple-choice',
        question: 'How do you say "My name is" in German?',
        correctAnswer: 'Ich heiße',
        options: ['Ich bin', 'Ich heiße', 'Wie heißen', 'Freut mich'],
      },
      {
        id: 'de-lesson-2-act-2',
        type: 'multiple-choice',
        question: 'What does "Woher kommen Sie?" mean?',
        correctAnswer: 'Where are you from?',
        options: ['What is your name?', 'How are you?', 'Where are you from?', 'Nice to meet you.'],
      },
      {
        id: 'de-lesson-2-act-3',
        type: 'translate',
        question: 'Translate: "Pleased to meet you"',
        correctAnswer: 'Freut mich',
        hint: 'It\'s a short expression of pleasure.',
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Max, a friendly German teacher. We're learning how to introduce ourselves using 'Ich heiße', 'Ich bin', and asking 'Wie heißen Sie?'. Introduce one phrase at a time, translate it, and encourage the student to repeat it. Keep it warm and conversational.",
      introMessage:
        "Hallo! Max here. Great to see you again! Today we'll learn how to introduce ourselves in German. It's going to be fun!",
      topics: ['introductions', 'saying your name', 'asking names', 'where you are from'],
    },
  },

  // ─── French (extended) ─────────────────────────────────────────────────────

  {
    id: 'fr-lesson-3',
    unitId: 'fr-unit-1',
    title: 'Numbers 1–10',
    description: 'Count from one to ten in French',
    icon: '🔢',
    xpReward: 10,
    goals: [
      { description: 'Learn numbers 1 to 10 in French', xpReward: 7 },
      { description: 'Complete all activities', xpReward: 3 },
    ],
    vocabulary: [
      { word: 'Un', translation: '1 — One', pronunciation: 'uh', emoji: '1️⃣' },
      { word: 'Deux', translation: '2 — Two', pronunciation: 'duh', emoji: '2️⃣' },
      { word: 'Trois', translation: '3 — Three', pronunciation: 'twah', emoji: '3️⃣' },
      { word: 'Quatre', translation: '4 — Four', pronunciation: 'katr', emoji: '4️⃣' },
      { word: 'Cinq', translation: '5 — Five', pronunciation: 'sank', emoji: '5️⃣' },
      { word: 'Six', translation: '6 — Six', pronunciation: 'sees', emoji: '6️⃣' },
      { word: 'Sept', translation: '7 — Seven', pronunciation: 'set', emoji: '7️⃣' },
      { word: 'Huit', translation: '8 — Eight', pronunciation: 'weet', emoji: '8️⃣' },
      { word: 'Neuf', translation: '9 — Nine', pronunciation: 'nuhf', emoji: '9️⃣' },
      { word: 'Dix', translation: '10 — Ten', pronunciation: 'dees', emoji: '🔟' },
    ],
    phrases: [
      { text: 'Combien ?', translation: 'How many?', pronunciation: 'kom-byaN' },
      { text: 'Il y en a cinq.', translation: 'There are five.', pronunciation: 'eel-ee-on-a-sank' },
    ],
    activities: [
      {
        id: 'fr-lesson-3-act-1',
        type: 'multiple-choice',
        question: 'What is "cinq" in English?',
        correctAnswer: 'Five',
        options: ['Three', 'Four', 'Five', 'Six'],
      },
      {
        id: 'fr-lesson-3-act-2',
        type: 'multiple-choice',
        question: 'How do you say "eight" in French?',
        correctAnswer: 'Huit',
        options: ['Sept', 'Neuf', 'Huit', 'Six'],
      },
      {
        id: 'fr-lesson-3-act-3',
        type: 'translate',
        question: 'Translate: "Ten"',
        correctAnswer: 'Dix',
        hint: 'Pronounced "dees".',
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Marc, an energetic French teacher. We're counting from 1 to 10 in French. Introduce the numbers slowly, say them clearly, and have the student repeat them. Use a warm tone and give lots of encouragement. Don't go beyond 10.",
      introMessage:
        "Bonjour! Ready to count in French? We're learning the numbers from one to ten today. Let's get started!",
      topics: ['numbers 1-10', 'counting', 'how many'],
    },
  },

  {
    id: 'fr-lesson-4',
    unitId: 'fr-unit-1',
    title: 'Colors',
    description: 'Learn basic colors in French',
    icon: '🎨',
    xpReward: 10,
    goals: [
      { description: 'Learn 6 colors in French', xpReward: 6 },
      { description: 'Complete all activities', xpReward: 4 },
    ],
    vocabulary: [
      { word: 'Rouge', translation: 'Red', pronunciation: 'rooj', emoji: '🔴' },
      { word: 'Bleu', translation: 'Blue', pronunciation: 'bluh', emoji: '🔵' },
      { word: 'Vert', translation: 'Green', pronunciation: 'vair', emoji: '🟢' },
      { word: 'Jaune', translation: 'Yellow', pronunciation: 'jhohn', emoji: '🟡' },
      { word: 'Noir', translation: 'Black', pronunciation: 'nwahr', emoji: '⚫' },
      { word: 'Blanc', translation: 'White', pronunciation: 'blahn', emoji: '⚪' },
    ],
    phrases: [
      { text: 'De quelle couleur est-ce ?', translation: 'What color is this?', pronunciation: 'duh kel koo-leur es' },
      { text: "C'est rouge.", translation: 'It is red.', pronunciation: 'say rooj' },
    ],
    activities: [
      {
        id: 'fr-lesson-4-act-1',
        type: 'multiple-choice',
        question: 'What does "bleu" mean?',
        correctAnswer: 'Blue',
        options: ['Red', 'Blue', 'Green', 'Yellow'],
      },
      {
        id: 'fr-lesson-4-act-2',
        type: 'multiple-choice',
        question: 'How do you say "green" in French?',
        correctAnswer: 'Vert',
        options: ['Rouge', 'Bleu', 'Vert', 'Jaune'],
      },
      {
        id: 'fr-lesson-4-act-3',
        type: 'translate',
        question: 'Translate: "Black"',
        correctAnswer: 'Noir',
        hint: 'Think of "film noir".',
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Marc, a warm French teacher. You're teaching the colors 'Rouge', 'Bleu', 'Vert', 'Jaune', 'Noir', and 'Blanc'. Use a friendly, conversational tone and ask the student to repeat the words or identify colors. Stay focused on these basic colors.",
      introMessage:
        "Bonjour! Marc here. Let's learn the names of some basic colors in French today. Ready to add some color to your vocabulary?",
      topics: ['colors', 'adjectives', 'descriptions'],
    },
  },

  {
    id: 'fr-lesson-5',
    unitId: 'fr-unit-1',
    title: 'At the Café',
    description: 'Order food and drinks at a French café',
    icon: '☕',
    xpReward: 15,
    goals: [
      { description: 'Learn café vocabulary in French', xpReward: 8 },
      { description: 'Practice ordering in French', xpReward: 7 },
    ],
    vocabulary: [
      { word: 'Un café', translation: 'A coffee', pronunciation: 'uh kah-fay', emoji: '☕' },
      { word: 'Un thé', translation: 'A tea', pronunciation: 'uh tay', emoji: '🍵' },
      { word: "L'eau", translation: 'Water', pronunciation: 'loh', emoji: '💧' },
      { word: 'Un croissant', translation: 'A croissant', pronunciation: 'uh kwah-sahn', emoji: '🥐' },
      { word: "L'addition", translation: 'The bill', pronunciation: 'lah-dee-syohn', emoji: '🧾' },
    ],
    phrases: [
      { text: "Je voudrais un café, s'il vous plaît.", translation: 'I would like a coffee, please.', pronunciation: 'zhuh voo-dray uh kah-fay, seel voo play' },
      { text: "L'addition, s'il vous plaît.", translation: 'The bill, please.', pronunciation: 'lah-dee-syohn, seel voo play' },
    ],
    activities: [
      {
        id: 'fr-lesson-5-act-1',
        type: 'multiple-choice',
        question: 'How do you say "a coffee" in French?',
        correctAnswer: 'Un café',
        options: ['Un thé', 'Un café', "L'eau", 'Un croissant'],
      },
      {
        id: 'fr-lesson-5-act-2',
        type: 'translate',
        question: 'Translate: "The bill, please."',
        correctAnswer: "L'addition, s'il vous plaît.",
        hint: "L'addition means the bill.",
      },
      {
        id: 'fr-lesson-5-act-3',
        type: 'multiple-choice',
        question: 'What does "Je voudrais" mean?',
        correctAnswer: 'I would like',
        options: ['I want', 'I would like', 'Give me', 'Please'],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Marc, a friendly French teacher. We're at a Parisian café! You're teaching words like 'Un café', 'Un thé', and how to order with 'Je voudrais'. Introduce one item at a time, translate it, and ask the student to practice ordering. Keep it warm, energetic, and use contractions.",
      introMessage:
        "Bonjour! Imagine we're at a sunny café in Paris. Today you'll learn how to order your favorite drink in French. Ready to try?",
      topics: ['food', 'drinks', 'ordering', 'café phrases'],
    },
  },

  // ─── Japanese (extended) ───────────────────────────────────────────────────

  {
    id: 'ja-lesson-3',
    unitId: 'ja-unit-1',
    title: '数字 — Numbers 1–10',
    description: 'Learn to count from one to ten in Japanese',
    icon: '🔢',
    xpReward: 10,
    goals: [
      { description: 'Learn numbers 1 to 10 in Japanese', xpReward: 7 },
      { description: 'Complete all activities', xpReward: 3 },
    ],
    vocabulary: [
      { word: 'いち', translation: '1 — One', pronunciation: 'i-chi', emoji: '1️⃣' },
      { word: 'に', translation: '2 — Two', pronunciation: 'ni', emoji: '2️⃣' },
      { word: 'さん', translation: '3 — Three', pronunciation: 'san', emoji: '3️⃣' },
      { word: 'し／よん', translation: '4 — Four', pronunciation: 'shi / yon', emoji: '4️⃣' },
      { word: 'ご', translation: '5 — Five', pronunciation: 'go', emoji: '5️⃣' },
      { word: 'ろく', translation: '6 — Six', pronunciation: 'ro-ku', emoji: '6️⃣' },
      { word: 'しち／なな', translation: '7 — Seven', pronunciation: 'shi-chi / na-na', emoji: '7️⃣' },
      { word: 'はち', translation: '8 — Eight', pronunciation: 'ha-chi', emoji: '8️⃣' },
      { word: 'きゅう／く', translation: '9 — Nine', pronunciation: 'kyu / ku', emoji: '9️⃣' },
      { word: 'じゅう', translation: '10 — Ten', pronunciation: 'ju', emoji: '🔟' },
    ],
    phrases: [
      { text: 'いくつですか？', translation: 'How many?', pronunciation: 'i-ku-tsu des-ka' },
      { text: 'ごつあります。', translation: 'There are five.', pronunciation: 'go-tsu a-ri-mas' },
    ],
    activities: [
      {
        id: 'ja-lesson-3-act-1',
        type: 'multiple-choice',
        question: 'What does "さん" mean?',
        correctAnswer: '3 — Three',
        options: ['1 — One', '2 — Two', '3 — Three', '4 — Four'],
      },
      {
        id: 'ja-lesson-3-act-2',
        type: 'multiple-choice',
        question: 'How do you say "five" in Japanese?',
        correctAnswer: 'ご',
        options: ['さん', 'ご', 'しち／なな', 'はち'],
      },
      {
        id: 'ja-lesson-3-act-3',
        type: 'translate',
        question: 'Translate: "Ten"',
        correctAnswer: 'じゅう',
        hint: 'Pronounced "ju".',
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Yuki, an energetic Japanese teacher. We're counting from 1 to 10. Introduce the numbers slowly, say them clearly, and have the student repeat them. Be sure to mention that some numbers have two ways to say them! Keep it warm and encouraging.",
      introMessage:
        "こんにちは! Ready to count in Japanese? We're learning the numbers from one to ten today. I'll help you with the different ways to say some of them!",
      topics: ['numbers 1-10', 'counting', 'alternate readings'],
    },
  },

  {
    id: 'ja-lesson-4',
    unitId: 'ja-unit-1',
    title: 'Daily Verbs',
    description: 'Learn essential everyday action words in Japanese',
    icon: '🏃',
    xpReward: 10,
    goals: [
      { description: 'Learn 5 essential Japanese verbs', xpReward: 6 },
      { description: 'Complete all activities', xpReward: 4 },
    ],
    vocabulary: [
      { word: 'たべます', translation: 'To eat', pronunciation: 'ta-be-mas', emoji: '🍽️' },
      { word: 'のみます', translation: 'To drink', pronunciation: 'no-mi-mas', emoji: '🥤' },
      { word: 'いきます', translation: 'To go', pronunciation: 'i-ki-mas', emoji: '🚶' },
      { word: 'みます', translation: 'To see / watch', pronunciation: 'mi-mas', emoji: '👀' },
      { word: 'かいます', translation: 'To buy', pronunciation: 'ka-i-mas', emoji: '🛍️' },
    ],
    phrases: [
      { text: 'ごはんをたべます。', translation: 'I eat rice/a meal.', pronunciation: 'go-han-wo ta-be-mas' },
      { text: 'みずをのみます。', translation: 'I drink water.', pronunciation: 'mi-zu-wo no-mi-mas' },
    ],
    activities: [
      {
        id: 'ja-lesson-4-act-1',
        type: 'multiple-choice',
        question: 'What does "たべます" mean?',
        correctAnswer: 'To eat',
        options: ['To drink', 'To eat', 'To go', 'To buy'],
      },
      {
        id: 'ja-lesson-4-act-2',
        type: 'multiple-choice',
        question: 'How do you say "to drink" in Japanese?',
        correctAnswer: 'のみます',
        options: ['たべます', 'のみます', 'いきます', 'みます'],
      },
      {
        id: 'ja-lesson-4-act-3',
        type: 'translate',
        question: 'Translate: "To go"',
        correctAnswer: 'いきます',
        hint: 'Pronounced "i-ki-mas".',
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Yuki, a warm Japanese teacher. We're learning polite verbs like 'たべます' (eat) and 'のみます' (drink). Introduce one verb at a time, translate it, and give a short example. Encourage the student to repeat the words. Keep it friendly and use natural English.",
      introMessage:
        "こんにちは! Yuki here. Ready to learn some action words? We're going to learn how to talk about daily activities in Japanese today. Let's start!",
      topics: ['verbs', 'masu form', 'daily actions', 'polite Japanese'],
    },
  },

  {
    id: 'ja-lesson-5',
    unitId: 'ja-unit-1',
    title: 'Food & Drinks',
    description: 'Learn vocabulary for food and drinks in Japanese',
    icon: '🍣',
    xpReward: 15,
    goals: [
      { description: 'Learn 5 food and drink words', xpReward: 8 },
      { description: 'Practice ordering food', xpReward: 7 },
    ],
    vocabulary: [
      { word: 'すし', translation: 'Sushi', pronunciation: 'su-shi', emoji: '🍣' },
      { word: 'ラーメン', translation: 'Ramen', pronunciation: 'ra-men', emoji: '🍜' },
      { word: 'みず', translation: 'Water', pronunciation: 'mi-zu', emoji: '💧' },
      { word: 'おちゃ', translation: 'Green tea', pronunciation: 'o-cha', emoji: '🍵' },
      { word: 'ごはん', translation: 'Rice / Meal', pronunciation: 'go-han', emoji: '🍚' },
    ],
    phrases: [
      { text: 'これをください。', translation: 'This one, please.', pronunciation: 'ko-re-wo ku-da-sai' },
      { text: 'おいしいです！', translation: 'It is delicious!', pronunciation: 'o-i-shi-i des' },
    ],
    activities: [
      {
        id: 'ja-lesson-5-act-1',
        type: 'multiple-choice',
        question: 'What does "おちゃ" mean?',
        correctAnswer: 'Green tea',
        options: ['Water', 'Green tea', 'Sushi', 'Ramen'],
      },
      {
        id: 'ja-lesson-5-act-2',
        type: 'translate',
        question: 'Translate: "This one, please."',
        correctAnswer: 'これをください。',
        hint: 'これ means "this".',
      },
      {
        id: 'ja-lesson-5-act-3',
        type: 'multiple-choice',
        question: 'How do you say "It is delicious" in Japanese?',
        correctAnswer: 'おいしいです！',
        options: ['ありがとうございます', 'おいしいです！', 'これをください', 'どうぞ'],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Yuki, a friendly Japanese teacher. Today we're talking about delicious food and drinks! You're teaching words like 'すし', 'ラーメン', and how to order with 'これをください'. Introduce one item at a time, translate it, and ask the student to practice ordering. Keep it warm and energetic.",
      introMessage:
        "こんにちは! Today we're exploring Japanese food and drinks. It's one of my favorite topics! Are you hungry to learn some Japanese?",
      topics: ['food', 'drinks', 'ordering', 'Japanese cuisine'],
    },
  },

  // ─── German (extended) ─────────────────────────────────────────────────────

  {
    id: 'de-lesson-3',
    unitId: 'de-unit-1',
    title: 'Numbers 1–10',
    description: 'Count from one to ten in German',
    icon: '🔢',
    xpReward: 10,
    goals: [
      { description: 'Learn numbers 1 to 10 in German', xpReward: 7 },
      { description: 'Complete all activities', xpReward: 3 },
    ],
    vocabulary: [
      { word: 'Eins', translation: '1 — One', pronunciation: 'AYNS', emoji: '1️⃣' },
      { word: 'Zwei', translation: '2 — Two', pronunciation: 'TSVAI', emoji: '2️⃣' },
      { word: 'Drei', translation: '3 — Three', pronunciation: 'DRAI', emoji: '3️⃣' },
      { word: 'Vier', translation: '4 — Four', pronunciation: 'FEER', emoji: '4️⃣' },
      { word: 'Fünf', translation: '5 — Five', pronunciation: 'FUENF', emoji: '5️⃣' },
      { word: 'Sechs', translation: '6 — Six', pronunciation: 'ZEKS', emoji: '6️⃣' },
      { word: 'Sieben', translation: '7 — Seven', pronunciation: 'ZEE-ben', emoji: '7️⃣' },
      { word: 'Acht', translation: '8 — Eight', pronunciation: 'AKHT', emoji: '8️⃣' },
      { word: 'Neun', translation: '9 — Nine', pronunciation: 'NOYN', emoji: '9️⃣' },
      { word: 'Zehn', translation: '10 — Ten', pronunciation: 'TSAYN', emoji: '🔟' },
    ],
    phrases: [
      { text: 'Wie viele?', translation: 'How many?', pronunciation: 'vee FEE-leh' },
      { text: 'Es sind fünf.', translation: 'There are five.', pronunciation: 'es ZINT FUENF' },
    ],
    activities: [
      {
        id: 'de-lesson-3-act-1',
        type: 'multiple-choice',
        question: 'What is "fünf" in English?',
        correctAnswer: 'Five',
        options: ['Three', 'Four', 'Five', 'Six'],
      },
      {
        id: 'de-lesson-3-act-2',
        type: 'multiple-choice',
        question: 'How do you say "eight" in German?',
        correctAnswer: 'Acht',
        options: ['Sieben', 'Neun', 'Acht', 'Sechs'],
      },
      {
        id: 'de-lesson-3-act-3',
        type: 'translate',
        question: 'Translate: "Ten"',
        correctAnswer: 'Zehn',
        hint: 'Pronounced "TSAYN".',
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Max, an energetic German teacher. We're counting from 1 to 10 in German. Introduce the numbers slowly, say them clearly, and have the student repeat them. Use a warm tone and give lots of encouragement. Don't go beyond 10.",
      introMessage:
        "Hallo! Ready to count in German? We're learning the numbers from one to ten today. Let's get started!",
      topics: ['numbers 1-10', 'counting', 'German pronunciation'],
    },
  },

  {
    id: 'de-lesson-4',
    unitId: 'de-unit-1',
    title: 'Colors',
    description: 'Learn basic colors in German',
    icon: '🎨',
    xpReward: 10,
    goals: [
      { description: 'Learn 6 colors in German', xpReward: 6 },
      { description: 'Complete all activities', xpReward: 4 },
    ],
    vocabulary: [
      { word: 'Rot', translation: 'Red', pronunciation: 'ROHT', emoji: '🔴' },
      { word: 'Blau', translation: 'Blue', pronunciation: 'BLOW', emoji: '🔵' },
      { word: 'Grün', translation: 'Green', pronunciation: 'GRUEN', emoji: '🟢' },
      { word: 'Gelb', translation: 'Yellow', pronunciation: 'GELP', emoji: '🟡' },
      { word: 'Schwarz', translation: 'Black', pronunciation: 'SHVARTS', emoji: '⚫' },
      { word: 'Weiß', translation: 'White', pronunciation: 'VAIS', emoji: '⚪' },
    ],
    phrases: [
      { text: 'Welche Farbe ist das?', translation: 'What color is this?', pronunciation: 'VEL-kheh FAR-beh ist das' },
      { text: 'Das ist rot.', translation: 'This is red.', pronunciation: 'das ist ROHT' },
    ],
    activities: [
      {
        id: 'de-lesson-4-act-1',
        type: 'multiple-choice',
        question: 'What does "blau" mean?',
        correctAnswer: 'Blue',
        options: ['Red', 'Blue', 'Green', 'Yellow'],
      },
      {
        id: 'de-lesson-4-act-2',
        type: 'multiple-choice',
        question: 'How do you say "green" in German?',
        correctAnswer: 'Grün',
        options: ['Rot', 'Blau', 'Grün', 'Gelb'],
      },
      {
        id: 'de-lesson-4-act-3',
        type: 'translate',
        question: 'Translate: "Black"',
        correctAnswer: 'Schwarz',
        hint: 'Think of "Schwarzwald" — the Black Forest.',
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Max, a warm German teacher. You're teaching the colors 'Rot', 'Blau', 'Grün', 'Gelb', 'Schwarz', and 'Weiß'. Use a friendly, conversational tone and ask the student to repeat the words or identify colors. Stay focused on these basic colors.",
      introMessage:
        "Hallo! Max here. Let's learn the names of some basic colors in German today. Ready to add some color to your vocabulary?",
      topics: ['colors', 'adjectives', 'descriptions', 'German sounds'],
    },
  },

  {
    id: 'de-lesson-5',
    unitId: 'de-unit-1',
    title: 'Im Café',
    description: 'Order coffee and food at a German café',
    icon: '☕',
    xpReward: 15,
    goals: [
      { description: 'Learn café vocabulary in German', xpReward: 8 },
      { description: 'Practice ordering in German', xpReward: 7 },
    ],
    vocabulary: [
      { word: 'Einen Kaffee', translation: 'A coffee', pronunciation: 'AI-nen KAH-fay', emoji: '☕' },
      { word: 'Einen Tee', translation: 'A tea', pronunciation: 'AI-nen TAY', emoji: '🍵' },
      { word: 'Wasser', translation: 'Water', pronunciation: 'VAH-ser', emoji: '💧' },
      { word: 'Ein Croissant', translation: 'A croissant', pronunciation: 'ain kwah-SAHN', emoji: '🥐' },
      { word: 'Die Rechnung', translation: 'The bill', pronunciation: 'dee REKH-noong', emoji: '🧾' },
    ],
    phrases: [
      { text: 'Ich hätte gern einen Kaffee, bitte.', translation: 'I would like a coffee, please.', pronunciation: 'ikh HET-eh gern AI-nen KAH-fay, BIT-eh' },
      { text: 'Die Rechnung, bitte.', translation: 'The bill, please.', pronunciation: 'dee REKH-noong BIT-eh' },
    ],
    activities: [
      {
        id: 'de-lesson-5-act-1',
        type: 'multiple-choice',
        question: 'How do you say "a coffee" in German?',
        correctAnswer: 'Einen Kaffee',
        options: ['Einen Tee', 'Einen Kaffee', 'Wasser', 'Ein Croissant'],
      },
      {
        id: 'de-lesson-5-act-2',
        type: 'translate',
        question: 'Translate: "The bill, please."',
        correctAnswer: 'Die Rechnung, bitte.',
        hint: '"Die Rechnung" means the bill.',
      },
      {
        id: 'de-lesson-5-act-3',
        type: 'multiple-choice',
        question: 'What does "Ich hätte gern" mean?',
        correctAnswer: 'I would like',
        options: ['I want', 'I would like', 'Give me', 'Please'],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Max, a friendly German teacher. We're at a German café! You're teaching words like 'Einen Kaffee', 'Wasser', and how to order with 'Ich hätte gern'. Introduce one item at a time, translate it, and ask the student to practice ordering. Keep it warm, energetic, and use contractions.",
      introMessage:
        "Hallo! Imagine we're at a cosy German café. Today you'll learn how to order your favorite drink in German. Ready to try?",
      topics: ['food', 'drinks', 'ordering', 'café phrases', 'polite German'],
    },
  },

  // ─── Korean ────────────────────────────────────────────────────────────────

  {
    id: 'ko-lesson-1',
    unitId: 'ko-unit-1',
    title: '안녕하세요! Greetings',
    description: 'Learn basic Korean greetings',
    icon: '👋',
    xpReward: 10,
    goals: [
      { description: 'Learn 5 Korean greetings', xpReward: 5 },
      { description: 'Complete all activities', xpReward: 5 },
    ],
    vocabulary: [
      { word: '안녕하세요', translation: 'Hello', pronunciation: 'an-nyeong-ha-se-yo', emoji: '👋' },
      { word: '안녕히 가세요', translation: 'Goodbye (to someone leaving)', pronunciation: 'an-nyeong-hi ga-se-yo', emoji: '👋' },
      { word: '감사합니다', translation: 'Thank you', pronunciation: 'gam-sa-ham-ni-da', emoji: '🙏' },
      { word: '네', translation: 'Yes', pronunciation: 'ne', emoji: '✅' },
      { word: '아니요', translation: 'No', pronunciation: 'a-ni-yo', emoji: '❌' },
    ],
    phrases: [
      { text: '반갑습니다.', translation: 'Nice to meet you.', pronunciation: 'ban-gap-seum-ni-da' },
      { text: '어떻게 지내세요?', translation: 'How are you?', pronunciation: 'eo-tteo-ke ji-nae-se-yo' },
    ],
    activities: [
      {
        id: 'ko-lesson-1-act-1',
        type: 'multiple-choice',
        question: 'What does "안녕하세요" mean?',
        correctAnswer: 'Hello',
        options: ['Hello', 'Goodbye', 'Thank you', 'Yes'],
      },
      {
        id: 'ko-lesson-1-act-2',
        type: 'translate',
        question: 'Translate: "Thank you"',
        correctAnswer: '감사합니다',
        hint: 'Starts with "gam-sa".',
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Min-su, a warm and friendly Korean teacher. Today you're teaching basic greetings like '안녕하세요' and '감사합니다'. Introduce one item at a time, translate it, and ask the student to repeat it. Be energetic and use natural sentences with contractions.",
      introMessage:
        "안녕하세요! I'm Min-su, and I'm so happy to be your Korean teacher. Ready to learn your first Korean words? Let's start with some greetings!",
      topics: ['greetings', 'politeness', 'basic responses'],
    },
  },
  {
    id: 'ko-lesson-2',
    unitId: 'ko-unit-1',
    title: 'Self-Introduction',
    description: 'Learn to say your name and where you are from',
    icon: '👤',
    xpReward: 10,
    goals: [
      { description: 'Say your name in Korean', xpReward: 5 },
      { description: 'Say your nationality', xpReward: 5 },
    ],
    vocabulary: [
      { word: '이름', translation: 'Name', pronunciation: 'i-reum', emoji: '🏷️' },
      { word: '저는 ... 입니다', translation: 'I am ...', pronunciation: 'jeo-neun ... im-ni-da', emoji: '👤' },
      { word: '미국 사람', translation: 'American', pronunciation: 'mi-guk sa-ram', emoji: '🇺🇸' },
      { word: '학생', translation: 'Student', pronunciation: 'hak-saeng', emoji: '🎓' },
    ],
    phrases: [
      { text: '제 이름은 ... 입니다.', translation: 'My name is ...', pronunciation: 'je i-reu-meun ... im-ni-da' },
      { text: '어느 나라 사람이에요?', translation: 'Which country are you from?', pronunciation: 'eo-neu na-ra sa-ram-i-e-yo' },
    ],
    activities: [
      {
        id: 'ko-lesson-2-act-1',
        type: 'multiple-choice',
        question: 'How do you say "I am a student" in Korean?',
        correctAnswer: '저는 학생입니다',
        options: ['저는 학생입니다', '제 이름은 학생입니다', '미국 사람입니다', '네'],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Min-su, a friendly Korean teacher. We're learning how to introduce ourselves using '저는 ... 입니다'. Introduce the pattern simply, give an example, and ask the student to try saying their name. Keep it encouraging and use natural English with contractions.",
      introMessage:
        "안녕하세요! Min-su here. It's so nice to meet you! Today we're learning a very important skill: how to introduce yourself in Korean. You ready?",
      topics: ['introductions', 'names', 'nationality'],
    },
  },
  {
    id: 'ko-lesson-3',
    unitId: 'ko-unit-1',
    title: 'Numbers 1–10 (Sino-Korean)',
    description: 'Learn to count from one to ten',
    icon: '🔢',
    xpReward: 10,
    goals: [{ description: 'Learn numbers 1 to 10', xpReward: 10 }],
    vocabulary: [
      { word: '일', translation: '1', pronunciation: 'il', emoji: '1️⃣' },
      { word: '이', translation: '2', pronunciation: 'i', emoji: '2️⃣' },
      { word: '삼', translation: '3', pronunciation: 'sam', emoji: '3️⃣' },
      { word: '사', translation: '4', pronunciation: 'sa', emoji: '4️⃣' },
      { word: '오', translation: '5', pronunciation: 'o', emoji: '5️⃣' },
      { word: '육', translation: '6', pronunciation: 'yuk', emoji: '6️⃣' },
      { word: '칠', translation: '7', pronunciation: 'chil', emoji: '7️⃣' },
      { word: '팔', translation: '8', pronunciation: 'pal', emoji: '8️⃣' },
      { word: '구', translation: '9', pronunciation: 'gu', emoji: '9️⃣' },
      { word: '십', translation: '10', pronunciation: 'sip', emoji: '🔟' },
    ],
    phrases: [
      { text: '번호가 뭐예요?', translation: 'What is the number?', pronunciation: 'beon-ho-ga mwo-ye-yo' },
    ],
    activities: [
      {
        id: 'ko-lesson-3-act-1',
        type: 'multiple-choice',
        question: 'What is "3" in Sino-Korean?',
        correctAnswer: '삼',
        options: ['일', '이', '삼', '사'],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Min-su, an energetic Korean teacher. We're counting from 1 to 10 in Sino-Korean. Introduce the numbers slowly, say them clearly, and have the student repeat them. Use a warm tone and give lots of encouragement.",
      introMessage:
        "안녕하세요! Ready to count in Korean? We're learning the numbers from one to ten today. Let's get started!",
      topics: ['numbers', 'counting'],
    },
  },
  {
    id: 'ko-lesson-4',
    unitId: 'ko-unit-1',
    title: 'Food and Drinks',
    description: 'Basic food vocabulary',
    icon: '🍎',
    xpReward: 10,
    goals: [{ description: 'Learn common food items', xpReward: 10 }],
    vocabulary: [
      { word: '밥', translation: 'Rice/Meal', pronunciation: 'bap', emoji: '🍚' },
      { word: '물', translation: 'Water', pronunciation: 'mul', emoji: '💧' },
      { word: '김치', translation: 'Kimchi', pronunciation: 'gim-chi', emoji: '🥬' },
      { word: '고기', translation: 'Meat', pronunciation: 'go-gi', emoji: '🥩' },
      { word: '사과', translation: 'Apple', pronunciation: 'sa-gwa', emoji: '🍎' },
    ],
    phrases: [
      { text: '밥 먹었어요?', translation: 'Did you eat?', pronunciation: 'bap meog-eoss-eo-yo' },
    ],
    activities: [
      {
        id: 'ko-lesson-4-act-1',
        type: 'multiple-choice',
        question: 'How do you say "Water" in Korean?',
        correctAnswer: '물',
        options: ['밥', '물', '고기', '사과'],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Min-su, a warm Korean teacher. You're teaching food and drink words like '밥' (Rice), '물' (Water), and '김치'. Use short sentences and contractions. Ask the student to repeat the words and try the simple phrase '밥 먹었어요?'.",
      introMessage:
        "안녕하세요! I'm Min-su. Let's talk about food! Korean food is so delicious. Want to learn some names of common food and drinks in Korean?",
      topics: ['food', 'drinks'],
    },
  },
  {
    id: 'ko-lesson-5',
    unitId: 'ko-unit-1',
    title: 'Common Verbs',
    description: 'Learn basic action words',
    icon: '🏃',
    xpReward: 10,
    goals: [{ description: 'Learn 5 common verbs', xpReward: 10 }],
    vocabulary: [
      { word: '가다', translation: 'To go', pronunciation: 'ga-da', emoji: '🚶' },
      { word: '오다', translation: 'To come', pronunciation: 'o-da', emoji: '🏃' },
      { word: '먹다', translation: 'To eat', pronunciation: 'meok-da', emoji: '😋' },
      { word: '마시다', translation: 'To drink', pronunciation: 'ma-si-da', emoji: '🥤' },
      { word: '자다', translation: 'To sleep', pronunciation: 'ja-da', emoji: '😴' },
    ],
    phrases: [
      { text: '학교에 가요.', translation: 'I go to school.', pronunciation: 'hak-gyo-e ga-yo' },
    ],
    activities: [
      {
        id: 'ko-lesson-5-act-1',
        type: 'multiple-choice',
        question: 'What does "먹다" mean?',
        correctAnswer: 'To eat',
        options: ['To go', 'To eat', 'To drink', 'To sleep'],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Min-su, a warm Korean teacher. We're learning basic verbs like '가다' (to go) and '먹다' (to eat). Introduce one verb at a time, translate it, and give a short example. Encourage the student to repeat the words. Keep it friendly and use natural English.",
      introMessage:
        "안녕하세요! Min-su here. Ready to learn some action words? We're going to learn how to talk about daily activities in Korean today. Let's start!",
      topics: ['verbs', 'actions'],
    },
  },
  // ─── Chinese ───────────────────────────────────────────────────────────────

  {
    id: 'zh-lesson-1',
    unitId: 'zh-unit-1',
    title: '你好! Greetings',
    description: 'Learn basic Chinese greetings',
    icon: '👋',
    xpReward: 10,
    goals: [
      { description: 'Learn 5 Chinese greetings', xpReward: 5 },
      { description: 'Complete all activities', xpReward: 5 },
    ],
    vocabulary: [
      { word: '你好', translation: 'Hello', pronunciation: 'nǐ hǎo', emoji: '👋' },
      { word: '再见', translation: 'Goodbye', pronunciation: 'zài jiàn', emoji: '👋' },
      { word: '谢谢', translation: 'Thank you', pronunciation: 'xiè xie', emoji: '🙏' },
      { word: '对', translation: 'Correct / Yes', pronunciation: 'duì', emoji: '✅' },
      { word: '不', translation: 'No / Not', pronunciation: 'bù', emoji: '❌' },
    ],
    phrases: [
      { text: '你好吗？', translation: 'How are you?', pronunciation: 'nǐ hǎo ma' },
      { text: '我很好。', translation: 'I am very well.', pronunciation: 'wǒ hěn hǎo' },
      { text: '很高兴认识你。', translation: 'Nice to meet you.', pronunciation: 'hěn gāo xìng rèn shi nǐ' },
    ],
    activities: [
      {
        id: 'zh-lesson-1-act-1',
        type: 'multiple-choice',
        question: 'What does "你好" mean?',
        correctAnswer: 'Hello',
        options: ['Hello', 'Goodbye', 'Thank you', 'Yes'],
      },
      {
        id: 'zh-lesson-1-act-2',
        type: 'translate',
        question: 'Translate: "Goodbye"',
        correctAnswer: '再见',
        hint: 'Pronounced "zài jiàn".',
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Li Wei, a warm and patient Chinese teacher. Today you're teaching basic greetings like '你好' and '谢谢'. Introduce one item at a time, translate it, and give a quick tip about the tone. Ask the student to repeat it. Be energetic and use natural sentences with contractions.",
      introMessage:
        "你好! I'm Li Wei, and I'm so happy to be your Chinese teacher. Chinese tones might seem tricky, but we'll master them together! Ready to start with greetings?",
      topics: ['greetings', 'politeness', 'basic responses', 'introductions'],
    },
  },
  {
    id: 'zh-lesson-2',
    unitId: 'zh-unit-1',
    title: 'Numbers 1–10',
    description: 'Learn to count in Mandarin',
    icon: '🔢',
    xpReward: 10,
    goals: [{ description: 'Learn numbers 1 to 10', xpReward: 10 }],
    vocabulary: [
      { word: '一', translation: '1', pronunciation: 'yī', emoji: '1️⃣' },
      { word: '二', translation: '2', pronunciation: 'èr', emoji: '2️⃣' },
      { word: '三', translation: '3', pronunciation: 'sān', emoji: '3️⃣' },
      { word: '四', translation: '4', pronunciation: 'sì', emoji: '4️⃣' },
      { word: '五', translation: '5', pronunciation: 'wǔ', emoji: '5️⃣' },
      { word: '六', translation: '6', pronunciation: 'liù', emoji: '6️⃣' },
      { word: '七',translation: '7', pronunciation: 'qī', emoji: '7️⃣' },
      { word: '八',translation: '8', pronunciation: 'bā', emoji: '8️⃣' },
      { word: '九',translation: '9', pronunciation: 'jiǔ', emoji: '9️⃣' },
      { word: '十',translation: '10', pronunciation: 'shí', emoji: '🔟' },
    ],
    phrases: [
      { text: '你的电话号码是多少？', translation: 'What is your phone number?', pronunciation: 'nǐ de diàn huà hào mǎ shì duō shǎo' },
    ],
    activities: [
      {
        id: 'zh-lesson-2-act-1',
        type: 'multiple-choice',
        question: 'What is "8" in Chinese?',
        correctAnswer: '八',
        options: ['六', '七', '八', '九'],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Li Wei, an energetic Chinese teacher. We're counting from 1 to 10 in Mandarin. Introduce the numbers slowly, say them clearly, and have the student repeat them. Give a quick tip about the tones for each number. Keep it warm and encouraging.",
      introMessage:
        "你好! Ready to count in Chinese? Counting is very logical in Mandarin, and I'll help you with the tones. Let's get started!",
      topics: ['numbers', 'counting'],
    },
  },
  {
    id: 'zh-lesson-3',
    unitId: 'zh-unit-1',
    title: 'Family Members',
    description: 'Learn names for family',
    icon: '👨‍👩‍👧‍👦',
    xpReward: 10,
    goals: [{ description: 'Learn family vocabulary', xpReward: 10 }],
    vocabulary: [
      { word: '爸爸', translation: 'Dad', pronunciation: 'bà ba', emoji: '👨' },
      { word: '妈妈', translation: 'Mom', pronunciation: 'mā ma', emoji: '👩' },
      { word: '哥哥', pronunciation: 'gē ge', translation: 'Older brother', emoji: '👦' },
      { word: '姐姐', pronunciation: 'jiě jie', translation: 'Older sister', emoji: '👧' },
      { word: '弟弟', pronunciation: 'dì di', translation: 'Younger brother', emoji: '👶' },
      { word: '妹妹', pronunciation: 'mèi mei', translation: 'Younger sister', emoji: '👶' },
    ],
    phrases: [
      { text: '我家有四口人。', translation: 'There are four people in my family.', pronunciation: 'wǒ jiā yǒu sì kǒu rén' },
    ],
    activities: [
      {
        id: 'zh-lesson-3-act-1',
        type: 'multiple-choice',
        question: 'How do you say "Mom" in Chinese?',
        correctAnswer: '妈妈',
        options: ['爸爸', '妈妈', '哥哥', '姐姐'],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Li Wei, a warm Chinese teacher. Today we're learning about family! You're teaching words like '爸爸' (Dad) and '妈妈' (Mom). Introduce one family member at a time, translate it, and ask the student to repeat it. Use short, natural sentences.",
      introMessage:
        "你好! Family is so important in Chinese culture. Today we'll learn how to talk about your family members in Mandarin. Shall we begin?",
      topics: ['family'],
    },
  },
  {
    id: 'zh-lesson-4',
    unitId: 'zh-unit-1',
    title: 'Food and Drinks',
    description: 'Common Chinese food items',
    icon: '🥟',
    xpReward: 10,
    goals: [{ description: 'Learn food and drink words', xpReward: 10 }],
    vocabulary: [
      { word: '米饭', translation: 'Rice', pronunciation: 'mǐ fàn', emoji: '🍚' },
      { word: '面条', translation: 'Noodles', pronunciation: 'miàn tiáo', emoji: '🍜' },
      { word: '水', translation: 'Water', pronunciation: 'shuǐ', emoji: '💧' },
      { word: '茶', translation: 'Tea', pronunciation: 'chá', emoji: '🍵' },
      { word: '饺子', translation: 'Dumplings', pronunciation: 'jiǎo zi', emoji: '🥟' },
    ],
    phrases: [
      { text: '我喜欢吃饺子。', translation: 'I like to eat dumplings.', pronunciation: 'wǒ xǐ huān chī jiǎo zi' },
    ],
    activities: [
      {
        id: 'zh-lesson-4-act-1',
        type: 'multiple-choice',
        question: 'What is "Tea" in Chinese?',
        correctAnswer: '茶',
        options: ['水', '茶', '米饭', '面条'],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Li Wei, a friendly Chinese teacher. Today we're talking about delicious food and drinks! You're teaching words like '米饭' (Rice), '饺子' (Dumplings), and '茶' (Tea). Introduce one item at a time, translate it, and ask the student to practice repeating. Keep it warm and energetic.",
      introMessage:
        "你好! Are you hungry? I love talking about Chinese food! Today we'll learn the names of some common food and drinks. Ready to eat—I mean, learn?",
      topics: ['food', 'drinks'],
    },
  },
  {
    id: 'zh-lesson-5',
    unitId: 'zh-unit-1',
    title: 'Places',
    description: 'Learn common locations',
    icon: '🏫',
    xpReward: 10,
    goals: [{ description: 'Learn 5 place names', xpReward: 10 }],
    vocabulary: [
      { word: '家', translation: 'Home', pronunciation: 'jiā', emoji: '🏠' },
      { word: '学校', translation: 'School', pronunciation: 'xué xiào', emoji: '🏫' },
      { word: '商店', translation: 'Shop', pronunciation: 'shāng diàn', emoji: '🏪' },
      { word: '餐厅', translation: 'Restaurant', pronunciation: 'cān tīng', emoji: '🍴' },
      { word: '医院', translation: 'Hospital', pronunciation: 'yī yuàn', emoji: '🏥' },
    ],
    phrases: [
      { text: '我去学校。', translation: 'I go to school.', pronunciation: 'wǒ qù xué xiào' },
    ],
    activities: [
      {
        id: 'zh-lesson-5-act-1',
        type: 'multiple-choice',
        question: 'How do you say "Home" in Chinese?',
        correctAnswer: '家',
        options: ['家', '学校', '商店', '餐厅'],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You're Li Wei, a patient Chinese teacher. Today we're learning about places like '学校' (School), '家' (Home), and '商店' (Shop). Introduce one place at a time, translate it, and ask the student to repeat it. Use a natural tone with contractions in English.",
      introMessage:
        "你好! Today we're learning how to talk about different places in Chinese. It's very useful for getting around. Shall we start?",
      topics: ['places', 'locations'],
    },
  },
];