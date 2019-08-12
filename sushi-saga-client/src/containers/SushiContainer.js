import React, { Fragment } from 'react';
import MoreButton from '../components/MoreButton';
import Sushi from '../components/Sushi';

const SushiContainer = props => {
  console.log(props);
  const fourSushi = props.currentSushiPlatters.map(sushi => (
    <Sushi sushiData={sushi} id={sushi.id} key={sushi.id} />
  ));
  return (
    <Fragment>
      <div className="belt">
        {fourSushi}
        <MoreButton />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
