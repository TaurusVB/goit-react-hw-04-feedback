import React, { Component } from 'react';
import { NotificationMessage } from './Notification.styled';

export default class Notification extends Component {
  render() {
    const { message } = this.props;

    return <NotificationMessage>{message}</NotificationMessage>;
  }
}
