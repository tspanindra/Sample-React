import React from 'react'

export default class Timestamp extends React.PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   const currentDisplayTime = this.props.timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
  //   const nextDisplayTime = this.nextProps.timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
  //   return currentDisplayTimei !== nextDisplayTime;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('Updating timestamp');
  }

  render() {
    return (
      <div>
        {this.props.timestamp.toString()}
      </div>
    )
  }
}
