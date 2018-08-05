import React from 'react'
import { shallow } from 'enzyme';

import App from '../App';
import CommentForm from '../CommentForm';
import CommentList from '../CommentList';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
})

it('should render CommentForm', () => {
  expect(wrapper.find(CommentForm).length).toBe(1);
})

it('should render CommentList', () => {
  expect(wrapper.find(CommentList).length).toBe(1);
})
