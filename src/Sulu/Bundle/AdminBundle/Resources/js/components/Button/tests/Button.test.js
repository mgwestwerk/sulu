// @flow
import React from 'react';
import {mount, render, shallow} from 'enzyme';
import Button from '../Button';

test('Should render the button with icon', () => {
    expect(render(<Button icon="su-plus">Add something</Button>)).toMatchSnapshot();
});

test('Should render with skin primary', () => {
    expect(render(<Button skin="primary" />)).toMatchSnapshot();
});

test('Should render with skin secondary', () => {
    expect(render(<Button skin="secondary" />)).toMatchSnapshot();
});

test('should render disabled with skin secondary', () => {
    expect(render(<Button disabled={true} skin="secondary" />)).toMatchSnapshot();
});

test('Should render with skin link', () => {
    expect(render(<Button skin="link" />)).toMatchSnapshot();
});

test('Should render with skin text', () => {
    expect(render(<Button skin="text" />)).toMatchSnapshot();
});

test('Should render with skin icon', () => {
    expect(render(<Button skin="icon" />)).toMatchSnapshot();
});

test('Should render with skin icon and active', () => {
    expect(render(<Button active={true} skin="icon" />)).toMatchSnapshot();
});

test('Should render with skin icon and dropdown icon', () => {
    expect(render(<Button showDropdownIcon={true} skin="icon" />)).toMatchSnapshot();
});

test('Should render with skin primary and dropdown icon', () => {
    expect(render(<Button showDropdownIcon={true} skin="primary" />)).toMatchSnapshot();
});

test('Should render with skin secondary and dropdown icon', () => {
    expect(render(<Button showDropdownIcon={true} skin="secondary" />)).toMatchSnapshot();
});

test('Should render with skin link and dropdown icon', () => {
    expect(render(<Button showDropdownIcon={true} skin="link" />)).toMatchSnapshot();
});

test('Should call the callback on click', () => {
    const preventDefaultSpy = jest.fn();
    const onClick = jest.fn();
    const button = shallow(<Button onClick={onClick} skin="primary" />);
    button.find('button').simulate('click', {preventDefault: preventDefaultSpy});
    expect(preventDefaultSpy).toBeCalled();
    expect(onClick).toBeCalled();
});

test('Should call the buttonRef callback correctly', () => {
    const buttonRefSpy = jest.fn();
    const button = mount(<Button buttonRef={buttonRefSpy} />);

    expect(buttonRefSpy).toBeCalledWith(button.find('button').instance());
});
