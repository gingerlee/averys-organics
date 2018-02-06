import React from 'react';
import PropTypes from 'prop-types';

function MonthProduce(props){
  return (
    <div>
      <h3>{props.month}</h3>
      <div>
        {props.selction.map((item, i) =>
          <div>
            {item}
            key = {i}
          </div>
        )}
      </div>
    </div>
  );
}

export default MonthProduce;
