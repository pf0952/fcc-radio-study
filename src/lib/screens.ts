export const screens = [
  { id: 'home', label: 'Home' },
  { id: 'study', label: 'Study' },
  { id: 'exams', label: 'Practice Exams' },
  { id: 'review', label: 'Review' },
  { id: 'browser', label: 'Question Browser' },
  { id: 'settings', label: 'Settings' },
  { id: 'about', label: 'About' },
] as const;

export type ScreenId = (typeof screens)[number]['id'];
