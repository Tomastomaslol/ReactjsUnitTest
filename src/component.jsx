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
           onMouseDown: function(){},
           onMouseUp: function(){}
        }
    },
    onClick: function(){
    
    },
    render: function() {
        
        return (
            <p onClick={ this.props.onClick }>
               HELLO HELLO
            </p>
        );
    }
})