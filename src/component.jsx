/** @jsx React.DOM */
var React = require('react');

// Component that will be exported from this NPM module
module.exports = ComponentName = React.createClass({
    getDefaultProps: function() {
        return {
          onClick: function(e){
              //console.log("onClick event : ", e);
          },
           onMouseOut: function(e){
            //console.log("onMouseOut event : ", e);
           },
           onMouseOver: function(e){
            //console.log("onMouseOver event : ", e);
           },
           onMouseDown: function(e){
            //console.log("onMouseDown event : ", e);
           },
           onMouseUp: function(e){
            //console.log("onMouseUp event : ", e);
           },
           className : "helloInternet",
           childtext : "noclick"
        }
    },
    handleClick: function(){
        this.props.childtext = "CLICK CLICK";
        this.setState({liked: false});
    },
    render: function() {
        
        return (
            <p onClick={ this.props.onClick }  className= { this.props.className } onMouseDown={ this.props.onMouseDown } onMouseUp={ this.props.onMouseUp } onMouseOver={ this.props.onMouseOver } onMouseOut={ this.props.onMouseOut }>
               HELLO AMA Im a Component
               <div>
                  <div>Im am a stupid div in a div lol</div>
               </div>
               <p>
                 <p ref="p" onClick={this.handleClick}>{this.props.childtext}</p>
               </p>
            </p>
        );
    }
});