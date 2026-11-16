import myiQuizJson from '../../content/myi-quiz.json';

export type MyiQuizQuestion = (typeof myiQuizJson)['questions'][number];

export function useMyiQuiz() {
  const questions = myiQuizJson.questions as MyiQuizQuestion[];
  const timeLimitMinutes = myiQuizJson.timeLimitMinutes;

  const questionKey = (id: string) => `myiQuiz.questions.${id}`;

  return {
    questions,
    timeLimitMinutes,
    questionKey,
  };
}