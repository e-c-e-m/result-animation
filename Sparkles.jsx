import { Fragment } from 'react';
import styles from './trivia-playlist-result.module.scss';

const Sparkle = ({ number, showSparkles }) => (
  <div
    className={`${
      showSparkles ? styles.backgroundImage : styles.hiddenBackgroundImage
    } ${styles[`backgroundImage--${number}`]}`}
    aria-hidden="true"
  />
);

export const gradeSparklesMap = {
  gold: [1, 2, 3, 4, 5, 6, 7, 8],
  silver: [1, 2, 3, 4, 5, 6],
  bronze: [1, 2, 3, 4],
  default: [1, 2],
};

const SparkleList = ({ grade, showSparkles }) => {
  return (
    <Fragment>
      {gradeSparklesMap[grade].map((number, index) => (
        <Sparkle key={index} number={number} showSparkles={showSparkles} />
      ))}
    </Fragment>
  );
};

export default SparkleList;
