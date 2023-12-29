const parent = React.createElement(
  'div',
  { id: 'parent' },
  [
    React.createElement('div', { id: 'child1' }, [
      React.createElement('h1', {}, 'Hi from h1 tag!'),
      React.createElement('h2', {}, 'Hi from h2 tag!'),
    ]),
    React.createElement('div', { id: 'child2' }, [
      React.createElement('h1', {}, 'Hi from h1 tag!'),
      React.createElement('h2', {}, 'Hi from h2 tag!'),
    ]),
  ] //siblings with same parent using Array
);

//ReactElement(Object) => HTML(Which Browser Understands)

console.log(parent); //object(ReactElement)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
