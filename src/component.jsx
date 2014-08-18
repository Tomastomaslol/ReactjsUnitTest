/** @jsx React.DOM */
var React = require('react');

// Component that will be exported from this NPM module
module.exports = ComponentName = React.createClass({
    getDefaultProps: function() {
        return {
           onMouseOut: function(){},
           onMouseOver: function(){},
           onMouseDown: function(){},
           onMouseUp: function(){}
        }
    },
    onClick: function(){
      console.log("CLICK CLICK CLICK CLICK");
    },
    render: function() {
        
        return (
            <p onClick={ this.onClick }>
               HELLO HELLO
            </p>
        );
    }
})