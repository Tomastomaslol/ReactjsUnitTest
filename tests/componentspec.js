var React = require('react/addons');

var TestUtils = React.addons.TestUtils;
var component = require("../src/component.jsx");

describe("component test Test",function(){

    var mountedComponent;
    var container = document.createElement("div");

    afterEach(function() {
        if (mountedComponent && mountedComponent.isMounted()) {
            // Only components with a parent will be unmounted
            React.unmountComponentAtNode(mountedComponent.getDOMNode().parent);
        }
    });


    
    it("should mount a component", function () {
        mountedComponent = TestUtils.renderIntoDocument(component({

        }), container);

        expect(mountedComponent).toBeDefined();

    });

    it("false to be false", function () {
        expect(false).toBe(false);
    });



    it("should work", function () {
        var onClickSpy = jasmine.createSpy('onClickSpy');
        
        var mountedComponent = TestUtils.renderIntoDocument(component({
            onClick: onClickSpy
        }), container);

        TestUtils.Simulate.click(mountedComponent.getDOMNode());
        //console.log('onClickSpy.calls.any : ', onClickSpy.calls.any());
        expect(onClickSpy.calls.any()).toBe(true);

   });

});