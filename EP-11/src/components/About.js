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
      <div className=" m-4 p-4">
        <h1 className="font-medium text-4xl">About Us -class component</h1>
        <h2 className="font-normal text-xl pt-2 pb-8">
          Hello, we deliver Healthy Food!
        </h2>
        <UserClass />
      </div>
    );
  }
}

export default About;
