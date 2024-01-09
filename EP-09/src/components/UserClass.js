import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: 'Dummy Name',
        location: 'earth',
        avatar_url: '',
      },
    };

    console.log('child-constructor');
  }
  async componentDidMount() {
    console.log('child-componentDidMount');
    // API calls

    const data = await fetch('https://api.github.com/users/rupambora31');
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    console.log('child-render');

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name} </h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @rupambora31</h4>
      </div>
    );
  }
}

export default UserClass;
