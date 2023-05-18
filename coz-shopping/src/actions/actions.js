export const ADD_TO_BOOKMARK = "ADD_TO_BOOKMARK";
export const REMOVE_FROM_BOOKMARK = "REMOVE_FROM_BOOKMARK";
export const NOTIFY_BOOKMARK_ACTION = "NOTIFY_BOOKMARK_ACTION";
export const ENQUEUE_NOTIFICATION = "ENQUEUE_NOTIFICATION";
export const DEQUEUE_NOTIFICATION = "DEQUEUE_NOTIFICATION";

export const addToBookmark = (itemId) => {
  return {
    type: ADD_TO_BOOKMARK,
    payload: {
      itemId
    }
  }
}

export const removeFromBookmark = (itemId) => {
  return {
    type: REMOVE_FROM_BOOKMARK,
    payload: {
      itemId
    }
  }
}

export const notifyBookmarkAction = (message, dismissTime = 5000) => dispatch => {
  const uuid = Math.random();
  dispatch(enqueueNotification(message, dismissTime, uuid));
  setTimeout(() => {
    dispatch(dequeueNotification());
  }, dismissTime);
}

export const enqueueNotification = (message, dismissTime, uuid) => {
  return {
    type: ENQUEUE_NOTIFICATION,
    payload: {
      message,
      dismissTime,
      uuid
    }
  }
}

export const dequeueNotification = () => {
  return {
    type: DEQUEUE_NOTIFICATION
  }
}