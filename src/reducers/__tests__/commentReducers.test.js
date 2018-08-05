import { COMMENT_SAVE } from '../../actions/types';
import commentReducer from '../commentReducer';

it('should update state', () => {
  const action = { type: COMMENT_SAVE, payload: 'New comment' };
  const newState = commentReducer([], action);

  expect(newState).toEqual(['New comment']);
});

it('should handle unknown type', () => {
  const action = { payload: 'New comment' };
  const newState = commentReducer([], action);

  expect(newState).toEqual([]);
});
