import styles from './count.module.scss';
import useAnimationFrames from './useAnimationFrames';
import { useEffect, useState } from 'react';

export const gradeStyleMap = {
  gold: {
    container: styles.goldPercentageContainer,
    total: styles.goldOverallPercentage,
  },
  silver: {
    container: styles.silverPercentageContainer,
    total: styles.silverOverallPercentage,
  },
  bronze: {
    container: styles.bronzePercentageContainer,
    total: styles.bronzeOverallPercentage,
  },
  default: {
    container: styles.noMedalPercentageContainer,
    total: styles.noMedalOverallPercentage,
  },
};

const Count = ({ grade, percentage, countFinishedCallback }) => {
  const [duration, setDuration] = useState(3000);
  const [countComplete, setCountComplete] = useState(false);
  const count = useAnimationFrames(percentage, duration);

  useEffect(() => {
    if (percentage < 10) {
      setDuration(500);
    }
    if (count === percentage) {
      setCountComplete(true);
      countFinishedCallback();
    }
  }, [count, countFinishedCallback, percentage]);

  return (
    <div className={styles.countLayout}>
      <div className={gradeStyleMap[grade].container}>
        <p
          className={`${gradeStyleMap[grade].total} ${
            countComplete ? styles.countComplete : null
          }`}
        >
          {count}%
        </p>
      </div>
    </div>
  );
};

export default Count;
