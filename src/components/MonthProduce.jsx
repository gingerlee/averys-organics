import React from 'react';
import PropTypes from 'prop-types';

function MonthProduce(props){
  return (
    <div>
      <h3>{props.month}</h3>
      <div>
        {props.selection.map((item, i) =>
          <div key = {i}>
            {item}
          </div>
        )}
      </div>
    </div>
  );
}

MonthProduce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.arrayOf(PropTypes.string)
};

export default MonthProduce;
