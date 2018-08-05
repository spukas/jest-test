import React from 'react'
import { mount } from 'enzyme';
import CommentForm from '../CommentForm';
import Root from '../../Root';

let wrapper;

beforeEach(() => {
  wrapper = mount(<Root><CommentForm /></Root>);
});

afterEach(() => {
  wrapper.unmount();
});

it('should render textarea and button', () => {
  expect(wrapper.find('textarea').length).toEqual(1)
  expect(wrapper.find('button').length).toEqual(1)
});

describe('textarea', () => {
  beforeEach(() => {
    wrapper.find('textarea').simulate('change', { target: { value: 'comment' } });
    wrapper.update();
  })
  it('should let user enter text', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual('comment');
  });

  it('should clear textarea after submit', () => {
    wrapper.find('form').simulate('submit');
    wrapper.update();
    expect(wrapper.find('textarea').prop('value')).toEqual('');
  });
});




