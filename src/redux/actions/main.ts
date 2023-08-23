import * as t from "../Types";

export const setInfo = (name) => (dispatch) => {
  dispatch({
    type: t.SET_NAME,
    payload: name,
  });
};

export const setNotification = (notification) => {
  return { type: t.SET_NOTIFICATION, payload: notification };
};
