import React, { useEffect, useState } from 'react';
import styles from './animated-progress-bar.module.scss';
import useAnimationFrames from './useAnimationFrames';
import { getPercentageGrade } from '../helpers';

export const gradeStyleMap = {
  gold: {
    progress: styles.goldProgress,
  },
  silver: {
    progress: styles.noMedalProgress,
  },
  bronze: {
    progress: styles.noMedalProgress,
  },
  default: {
    progress: styles.noMedalProgress,
  },
};

const AnimatedProgressBar = ({ percentage, quizNumber }) => {
  const [duration, setDuration] = useState(0);
  const grade = getPercentageGrade(percentage);
  let value = useAnimationFrames(percentage, duration);

  function getProgressBarWidth() {
    if (window.screen.width > 760) {
      return value * 4;
    } else if (window.screen.width < 370) {
      return value * 1.6;
    } else {
      return value * 2;
    }
  }

  useEffect(() => {
    if (quizNumber === 1) {
      setDuration(100);
    } else if (quizNumber === 2) {
      setDuration(300);
    } else {
      setDuration(500);
    }
  }, [quizNumber]);

  return (
    <div className={styles.progressDiv}>
      <div
        style={{ width: `${getProgressBarWidth()}px` }}
        className={gradeStyleMap[grade].progress}
      />
    </div>
  );
};

export default AnimatedProgressBar;
