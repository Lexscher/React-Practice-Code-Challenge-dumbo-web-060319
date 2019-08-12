import React, { Fragment } from 'react';
import MoreButton from '../components/MoreButton';
import Sushi from '../components/Sushi';

const SushiContainer = props => {
  const fourSushis = props.currentSushi.map(sushi => {
    return (
      <Sushi
        key={sushi.id}
        sushi={sushi}
        handleEatenSushi={props.handleEatenSushi}
      />
    );
  });
  return (
    <Fragment>
      <div className="belt">
        {fourSushis}
        <MoreButton moreSushi={props.moreSushi} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
