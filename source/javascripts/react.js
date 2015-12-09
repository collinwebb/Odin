const React = require('react');
const ReactDOM = require('react-dom');

var Test = React.createClass({
  render: function(){
    return (
      <div>
        Derp Test!
      </div>
    )
  }
});

ReactDOM.render(<Test />, document.getElementById('app'));
