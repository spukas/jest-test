import React from 'react';
import { mount } from 'enzyme';
import Root from '../../Root';
import CommentList from '../CommentList';

let wrapper;

beforeEach(() => {
  const initialState = {
    comments: ['Comment 1', 'Comment 2'],
  };

  wrapper = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>,
  );
});

afterEach(() => {
    wrapper.unmount();
});

it('should render LI for each comment', () => {
  expect(wrapper.find('li').length).toEqual(2);
});

it('should render correct comment', () => {
  expect(wrapper.find('li').at(0).props('value').children).toEqual('Comment 1');
  expect(wrapper.find('li').at(1).props('value').children).toEqual('Comment 2');
})


