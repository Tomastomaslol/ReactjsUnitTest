var React = require('react/addons');

var TestUtils = React.addons.TestUtils;
var component = require("../src/component.jsx");

describe("Label Test",function(){
    it("true to be true", function () {
        expect(true).toBe(true);

    });

    it("false to be false", function () {
        expect(false).toBe(false);
    });



    it("should work", function () {
        var mountedComponent = TestUtils.renderIntoDocument(component({
        	onClick : function(){
        		console.log("DDDD");
        	}
        }));
        //console.log(mountedComponent);
        //console.log(TestUtils.renderIntoDocument, typeof TestUtils.renderIntoDocument);
        //console.log(mountedComponent.onClick, typeof mountedComponent.onClick);
        //console.log(component.onClick, typeof component.onClick);
        TestUtils.Simulate.click(mountedComponent.getDOMNode());


    });
});



/*

//var assert = require('assert');
//var sinon = require('sinon');


*/