import React from 'react';
import styles from './trivia-playlist-result.module.scss';
import { BFLogo } from '../BFLogo';
import { SeeMoreQuizzesButton } from '../SeeMoreQuizzesButton';
import { CloseButton } from '../CloseButton';
import { IndividualTriviaResult } from './IndividualTriviaResult';
import { calculatePercentage } from '../helpers';
import { getPercentageGrade } from '../helpers';
import { OverallPercentage } from './OverallPercentage';

export const TriviaPlaylistResult = ({ data, closeModal }) => {
  const quizzesWithResults = data?.quizzes?.filter(
    q => q.result?.correct >= 0 && q.result?.total >= 0
  );

  const finalResult = quizzesWithResults.reduce(function(acc, currentValue) {
    return {
      totalQuestions: (acc.totalQuestions ?? 0) + currentValue.result?.total,
      correctAnswers: (acc.correctAnswers ?? 0) + currentValue.result?.correct,
    };
  }, {});

  var overallPercentage = calculatePercentage(
    finalResult.correctAnswers,
    finalResult.totalQuestions
  );

  const grade = getPercentageGrade(overallPercentage);

  return (
    <div className={styles.triviaResultContainer}>
      <CloseButton closeModal={closeModal} playlistId={data?.id} />
      <div className={styles.titleContainer}>
        <BFLogo className={styles.buzzfeedIcon} />
        <h2 className={styles.title}>
          {data?.title ? data.title : 'Playlist Title'}
        </h2>
      </div>
      <OverallPercentage overallPercentage={overallPercentage} grade={grade} />
      <p className={styles.totalText}>
        You got {finalResult.correctAnswers} of {finalResult.totalQuestions}{' '}
        total questions correct!
      </p>
      <div className={styles.individualContainer}>
        {quizzesWithResults.map((quizResult, index) => (
          <IndividualTriviaResult
            key={index + 1}
            quizNumber={index + 1}
            percentage={calculatePercentage(
              quizResult.result.correct,
              quizResult.result.total
            )}
            quizName={quizResult.title}
          />
        ))}
      </div>
      <SeeMoreQuizzesButton
        styles={styles.seeMoreQuizzes}
        text={'Browse More Quizzes'}
      />
    </div>
  );
};
