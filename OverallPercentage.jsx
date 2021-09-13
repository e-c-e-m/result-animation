import { Fragment, useState } from 'react';

import SparkleList from './Sparkles';
import Count from './Count';

export const OverallPercentage = ({ grade, overallPercentage }) => {
  const [showSparkles, setShowSparkles] = useState(false);

  function countFinishedCallback() {
    setShowSparkles(true);
  }
  return (
    <Fragment>
      <SparkleList
        showSparkles={showSparkles}
        overallPercentage={overallPercentage}
        grade={grade}
      />
      <Count
        countFinishedCallback={countFinishedCallback}
        percentage={overallPercentage}
        grade={grade}
      />
    </Fragment>
  );
};
