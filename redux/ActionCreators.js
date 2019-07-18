import * as ActionTypes from './ActionTypes';

export const addComment = (projectId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        projectId: projectId,
        rating: rating,
        author: author,
        comment: comment
    }
});