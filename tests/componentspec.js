var React = require('react/addons');

var TestUtils = React.addons.TestUtils;
var component = require("../src/component.jsx");

describe("component test test ",function(){

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

    describe("component events",function(){

        it("should call onClick when event is triggerd", function () {
            var onClickSpy = jasmine.createSpy('onClickSpy');
            
            var mountedComponent = TestUtils.renderIntoDocument(component({
                onClick: onClickSpy
            }), container);

            TestUtils.Simulate.click(mountedComponent.getDOMNode());
            expect(onClickSpy.calls.any()).toBe(true);

       });

        it("should call onMouseOut when event is triggerd", function () {
              
                var MouseDowSpy = jasmine.createSpy();
                
                var mountedComponent = TestUtils.renderIntoDocument(component({
                    onMouseDown : MouseDowSpy
                }), container);
                
                TestUtils.Simulate.mouseDown(mountedComponent.getDOMNode());
                expect(MouseDowSpy.calls.any()).toBe(true);
        });

        it("should call onMouseOver when event is triggerd", function () {
              
                var MouseOverSpy = jasmine.createSpy();
                
                var mountedComponent = TestUtils.renderIntoDocument(component({
                    onMouseOver : MouseOverSpy
                }), container);

                TestUtils.Simulate.mouseOver(mountedComponent.getDOMNode());
                expect(MouseOverSpy.calls.any()).toBe(true);            
        });

        it("should call onMouseDown when event is triggerd", function () {
              
                var superSpy = jasmine.createSpy();
                
                var mountedComponent = TestUtils.renderIntoDocument(component({
                    onMouseDown : superSpy
                }), container);

                TestUtils.Simulate.mouseDown(mountedComponent.getDOMNode());
                expect(superSpy.calls.any()).toBe(true);
        });

        it("should call onMouseUp when event is triggerd", function () {
          
            var onMouseUpSpy = jasmine.createSpy();
            
            var mountedComponent = TestUtils.renderIntoDocument(component({
                onMouseUp : onMouseUpSpy
            }), container);

            TestUtils.Simulate.mouseUp(mountedComponent.getDOMNode());
            expect(onMouseUpSpy.calls.any()).toBe(true);            
        });
    });
});