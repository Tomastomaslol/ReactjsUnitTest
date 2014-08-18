/** @jsx React.DOM */
var React = require('react');

// Component that will be exported from this NPM module
module.exports = ComponentName = React.createClass({
    getDefaultProps: function() {
        return {
          onClick: function(){
              console.log("onClick event : ", e);
          },
           onMouseOut: function(){
            console.log("onMouseOut event : ", e);
           },
           onMouseOver: function(){
            console.log("onMouseOver event : ", e);
           },
           onMouseDown: function(){
            console.log("onMouseDown event : ", e);
           },
           onMouseUp: function(){
            console.log("onMouseUp event : ", e);
           }
        }
    },
    onClick: function(){
     // da fuq should i do with this ?
    },
    render: function() {
        
        return (
            <p onClick={ this.props.onClick } onMouseDown={ this.props.onMouseDown } onMouseUp={ this.props.onMouseUp } onMouseOver={ this.props.onMouseOver } onMouseOut={ this.props.onMouseOut }>
               HELLO AMA Im a Component
            </p>
        );
    }
})