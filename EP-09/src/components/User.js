import { useState } from 'react';

const User = (props) => {
  const [count, setCount] = useState(100);
  const [count2] = useState(101);
  return (
    <div className="user-card">
      <h2>Name: {props.name} </h2>
      <h3>Location: Guwahati</h3>
      <h4>Contact: @rupambora3107</h4>
      <h5>Count: {count}</h5>
      <h5>Count 2: {count2}</h5>
    </div>
  );
};

export default User;
