import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    return (
      <div key={this.props.user.id}>
        <p> {this.props.user.name} </p>
        <p> {this.props.user.email} </p>
        <Image source={this.props.user.avatar} alternativeText="User avatar" />
      </div>
    );
  }
}

export default UserProfile;