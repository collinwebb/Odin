//testing
const React = require('react');
const Relay = require('react-relay');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <span>Packaging complete ^_^ {this.props.example}</span>
      </div>
    )
  }
});
