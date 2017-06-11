import React, { Component } from 'react'

import { View } from 'react-native'

import Svg, { Path } from 'react-native-svg'

import paths, { viewBox } from './paths'

export default class UtilityIcon extends Component {
  render() {
    const path = paths[this.props.name]
    return (
      <Svg
        height={this.props.height?this.props.height:20}
        width={this.props.width?this.props.width:20}
        viewBox={viewBox}
        style={this.props.style}
      >
        <Path d={path} fill={this.props.color} />
      </Svg>
    )
  }
}

UtilityIcon.defaultProps = {
  color: '#54698d',
  name: 'like',
  style: {
    height: 24,
    width: 24,
  }
};
