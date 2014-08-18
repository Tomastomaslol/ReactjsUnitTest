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

    describe("click click click", function() {

      var onClickSpy = jasmine.createSpy();

      beforeEach(function() {
        // This component broadcasts events and has lifecycle methods
        // so it should be rendered into an accessible container.
        mountedComponent = TestUtils.renderIntoDocument(component({

        }), container);

        
        //container.addEventListener("click", this.eventSpy, false);
        container.addEventListener("click", onClickSpy, false);
      });

      afterEach(function() {
        container.removeEventListener("click", onClickSpy, false);
      });

      it("should broadcast with data when component is clicked", function() {
        // TestUtils can simulate events
        TestUtils.Simulate.click(mountedComponent.getDOMNode());
        console.log("onClickSpy.calls.allArgs : ", onClickSpy.calls.allArgs());
        console.log("onClickSpy.calls.count : ", onClickSpy.calls.any());
        //expect(onClickSpy).toHaveBeenCalled();
      });
    });





/*
    it("should work", function () {

        console.log("Has document : ", document);
        var onClickSpy = jasmine.createSpy('onClickSpy');
        var mountedComponent = TestUtils.renderIntoDocument(component({
            onClick: onClickSpy
        }), container);
        
        spyOn(mountedComponent, 'onClick');
        
        spyOn(mountedComponent, 'onClick');
        
         
        console.log("onClickSpy", onClickSpy.calls.any());

        TestUtils.Simulate.click(mountedComponent.getDOMNode());

        console.log("onClickSpy", onClickSpy.calls.any());

        mountedComponent.onClick();
        console.log("call count : ", mountedComponent.onClick);
        expect(mountedComponent.onClick).toHaveBeenCalled();

   });
*/
});