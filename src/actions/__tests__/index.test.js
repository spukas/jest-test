import { COMMENT_SAVE } from '../types';
import { commentSave } from '../index';

describe('commentSave()', () => {
  it('should return correct type', () => {
    const action = commentSave();
    expect(action.type).toEqual(COMMENT_SAVE);
  });

  it('should return correct payload', () => {
    const action = commentSave('New comment');
    expect(action.payload).toEqual('New comment');
  });
});
