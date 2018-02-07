import React from 'react';
import PropTypes from 'prop-types';

function DayInfo(props){
  const metaBox = {
    padding: '15px',
    margin: '10px',
    background: '#e8e8e8'
  };

  const infoBox = {
    display:'flex',
    flexWrap: 'wrap',
    borderBottom: '1px solid',
    paddingBottom: '10px',
  };
  return (
    <div style={infoBox}>
      <h3 style = {{width:'100%'}}>{props.day}: {props.location}</h3>
      <span style={metaBox}>Hours: {props.hours}</span>
      <span style={metaBox}>Booth: {props.booth}</span>
    </div>
  );
}

DayInfo.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string,
};

export default DayInfo;
