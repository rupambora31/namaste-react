const heading = React.createElement(
  'h1',
  { id: 'heading' },
  'Hello world from React!'
);

console.log(heading); //"heading" is an object(React-Element)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);
