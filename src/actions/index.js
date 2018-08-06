import axios from 'axios';
import { COMMENT_SAVE, COMMENTS_FETCH } from './types';

export const commentSave = comment => ({
  type: COMMENT_SAVE,
  payload: comment,
});

export const fetchComments = async () => {
  const fetchedComments = await axios.get(
    'http://jsonplaceholder.typicode.com/comments',
  );
  const filteredComments = fetchedComments.data.map(comment => comment.name);

  return {
    type: COMMENTS_FETCH,
    payload: filteredComments,
  };
};
