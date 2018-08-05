import { COMMENT_SAVE } from './types';

export const commentSave = comment => ({
  type: COMMENT_SAVE,
  payload: comment,
});
