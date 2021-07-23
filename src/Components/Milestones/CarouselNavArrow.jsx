import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import PropTypes from 'prop-types';

export default function Arrow(props) {
  Arrow.propTypes = {
    direction: PropTypes.string,
    clickFunction: PropTypes.func,
  };
  Arrow.defaultProps = {
    direction: 'left',
    clickFunction: () => {
      // do nothing
    },
  };
  const { direction, clickFunction } = props;
  const icon = direction === 'left' ? <FaChevronLeft /> : <FaChevronRight />;

  return (
    <div
      onClick={clickFunction}
      role="button"
      tabIndex="0"
      onKeyPress={clickFunction}
    >
      {icon}
    </div>
  );
}
