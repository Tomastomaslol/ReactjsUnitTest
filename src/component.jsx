/** @jsx React.DOM */
var React = require('react');

// Component that will be exported from this NPM module
module.exports = ComponentName = React.createClass({
    getDefaultProps: function() {
        return {
          onClick: function(){
              console.log("CLICK CLICK CLICK CLICK");
          },
           onMouseOut: function(){},
           onMouseOver: function(){},
           onMouseDown: function(){
            console.log("onMouseDownon MouseDownon MouseDown");
           },
           onMouseUp: function(){}
        }
    },
    onClick: function(){
    
    },
    render: function() {
        
        return (
            <p onClick={ this.props.onClick } onMouseDown={ this.props.onMouseDown }>
               HELLO HELLO
            </p>
        );
    }
})