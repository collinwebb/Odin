const React = require('react');
const ReactDOM = require('react-dom');
const Relay = require('react-relay');
const Test = require('./test.jsx');
//const Login = require('./login.jsx');

var Example = React.createClass({
  render: function(){
    return (
      <div>
        <Test example="props works."/>
      </div>
    );
  }
});

ReactDOM.render(<Example />, document.getElementById('app'));
