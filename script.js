// let counter = 0;
// let dom = document.querySelector('#root');
// function doCount() {
//   counter++;
//   let element = React.createElement(
//     'p',
//     {},
//     'count: ' + counter
//   );
//   ReactDOM.render(element, dom);
// }
let dom = document.querySelector('#root');
let element = React.createElement(
  'div', {}, [
    React.createElement('h2', {}, 'Hello World'),
    React.createElement('h3', {}, 'This is a paragraph'),
    React.createElement(
      'ul', {}, [
        React.createElement(
          'li', {}, 'This is a list item'
        ),
        React.createElement(
          'li', {}, 'This is another list item'
        ),
      ]
    ),
]);
ReactDOM.render(element, dom);
