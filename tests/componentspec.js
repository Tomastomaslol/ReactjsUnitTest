var React = require('react/addons');

var TestUtils = React.addons.TestUtils;
var component = require("../src/component.jsx");

describe("component test Test",function(){

    var mountedComponent;
    var container = document.createElement("div");

    afterEach(function() {
        if (mountedComponent && mountedComponent.isMounted()) {
            // Only components with a parent will be unmounted
         //   React.unmountComponentAtNode(mountedComponent.getDOMNode().parent);
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



    it("should call onClick", function () {
        var onClickSpy = jasmine.createSpy('onClickSpy');
        
        var mountedComponent = TestUtils.renderIntoDocument(component({
            onClick: onClickSpy
        }), container);

        TestUtils.Simulate.click(mountedComponent.getDOMNode());
        expect(onClickSpy.calls.any()).toBe(true);

   });

        it("should call onMouseOut", function () {
          
            var superSpy = jasmine.createSpy();
            
            var mountedComponent = TestUtils.renderIntoDocument(component({
                onMouseDown : superSpy
            }), container);
            
            TestUtils.Simulate.mouseDown(mountedComponent.getDOMNode());
            expect(superSpy.calls.any()).toBe(true);
            
            

    });
});


/*

           onMouseOut: function(){},
           onMouseOver: function(){},
           onMouseDown: function(){},
           onMouseUp: function(){}



*/