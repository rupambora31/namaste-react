import UserClass from './UserClass';
import { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    console.log('parent-constructor');
  }

  componentDidMount() {
    console.log('parent-componentDidMount');
  }
  render() {
    console.log('parent-render');
    return (
      <div>
        <h1>About Us -class component</h1>
        <h2>Hello, we deliver Healthy Food!</h2>
        <UserClass />
      </div>
    );
  }
}

export default About;
