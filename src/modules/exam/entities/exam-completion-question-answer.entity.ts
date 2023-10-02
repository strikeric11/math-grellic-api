import { Entity, ManyToOne } from 'typeorm';

import { Base as BaseEntity } from '#/common/entities/base.entity';
import { ExamCompletion } from './exam-completion.entity';
import { ExamQuestion } from './exam-question.entity';
import { ExamQuestionChoice } from './exam-question-choice.entity';

@Entity()
export class ExamCompletionQuestionAnswer extends BaseEntity {
  // TODO
  // @Column({ type: 'boolean', default: false })
  // is_correct: boolean;

  @ManyToOne(
    () => ExamCompletion,
    (examCompletion) => examCompletion.questionAnswers,
    {
      onDelete: 'CASCADE',
    },
  )
  completion: ExamCompletion;

  @ManyToOne(
    () => ExamQuestion,
    (examQuestion) => examQuestion.completionAnswer,
  )
  question: ExamQuestion;

  @ManyToOne(
    () => ExamQuestionChoice,
    (examQuestionChoice) => examQuestionChoice.questionAnswers,
  )
  selectedQuestionChoice: ExamQuestionChoice;
}
