import AnimatedProgressBar from './AnimatedProgressBar';
import styles from './trivia-playlist-result.module.scss';

export const IndividualTriviaResult = ({
  quizNumber,
  percentage,
  quizName,
  startAnimation,
}) => {
  return (
    <div>
      <div className={styles.progressBarContainer}>
        <h2 className={styles.quizTitle}>Quiz {quizNumber}</h2>
        <p className={styles.dash}>&mdash;</p>
        <p className={styles.individualPercentage}>{percentage}%</p>
        <AnimatedProgressBar
          startAnimation={startAnimation}
          percentage={percentage}
          quizNumber={quizNumber}
        />
      </div>
      <p className={styles.quizName}>{quizName}</p>
    </div>
  );
};
