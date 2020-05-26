import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    number: PropTypes.string,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, number, onClick } = this.props;
    onClick(label, number);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
        number,
      },
    } = this;

    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' tab-list-active';
    }

    return (
      // console.log(number),
      <li
        className={className}
        onClick={onClick}
      >
        {label} <span>{number}</span>
      </li>
    );
  }
}

export default Tab;