/** @jsx React.DOM */
var React = require('react');
Component = require('../src/component.jsx');

// Add any test data here



React.renderComponent(
    <Component />,
    document.querySelector('body')
);