const React = require('react');
const ReactDOM = require('react-dom');
const Relay = require('react-relay');
const Test = require('./test.jsx');

var Example = React.createClass({
  render: function(){
    return (
      <Test />
    )
  }
});

ReactDOM.render(<Example />, document.getElementById('app'));
