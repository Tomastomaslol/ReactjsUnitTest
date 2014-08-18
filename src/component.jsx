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
    onClick: function(e){
      console.log("where is my event at ? ",  e);
      return e;
    },
    render: function() {
        
        return (
            <p onClick={ this.onClick }>
               HELLO HELLO
            </p>
        );
    }
})