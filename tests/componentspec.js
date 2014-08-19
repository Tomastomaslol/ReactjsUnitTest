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

    describe("component className",function(){
        var componets;
        beforeEach(function() {
            var mountedComponent = TestUtils.renderIntoDocument(component({}), container);
            componets = TestUtils.scryRenderedDOMComponentsWithClass(mountedComponent, mountedComponent.props.className);
        });
        
        it("should add props className to element", function() {
            expect(componets[0]).toBeDefined();       
        });

        it("should add className to parent to element", function() {
            expect(componets[0]._mountDepth).toBe(1);       
        });

            it("should only className to one element", function() {
            expect(componets.length).toBe(1);       
        });
    });

    describe("component structure",function(){
        var mountedComponent;
        beforeEach(function() {
            mountedComponent = TestUtils.renderIntoDocument(component({}), container);
        });
        // Aka do this later maybe
        xit("should add props className to element", function() {
           console.log('mountedComponent  :', mountedComponent._renderedChildren);
        });

    });

    describe("functional click test", function(){
        it("should change innerHtml when clicked ref=p", function(){
            
            var mountedComponent = TestUtils.renderIntoDocument(component({}), container);
        
            TestUtils.Simulate.click(mountedComponent.refs.p);
        
            expect(mountedComponent.refs.p.props.children).toBe("CLICK CLICK");
        });

        it("should change innerHtml when clicked ref=p and bubble event", function(){
            var componets;

            var mountedComponent = TestUtils.renderIntoDocument(component({}), container);
            componets = TestUtils.scryRenderedDOMComponentsWithClass(mountedComponent, "oldClass");
            expect(componets[0].props.className).toBe("oldClass");

            TestUtils.Simulate.click(mountedComponent.refs.p);

            componets = TestUtils.scryRenderedDOMComponentsWithClass(mountedComponent, "newClass");
            expect(componets[0].props.className).toBe("newClass");
        });
    });

});