import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    console.log(this.props.name + 'child-constructor');
  }
  componentDidMount() {
    console.log(this.props.name + 'child-componentDidMount');
    // API calls
  }

  render() {
    const { location } = this.props; // de-structuring
    console.log(this.props.name + 'child-render');
    return (
      <div className="user-card">
        <h2>Name: {this.props.name} </h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @rupambora3107</h4>
        <h5>Count: {this.state.count}</h5>
        <button
          onClick={() => {
            //NEVER UPDATE STATE-VARIABLES DIRECTLY!
            this.setState({ count: this.state.count + 100 });
          }}
        >
          Increase Count
        </button>
      </div>
    );
  }
}

export default UserClass;
