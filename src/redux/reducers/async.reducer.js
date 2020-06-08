import {
  ASYNC_ACTION_FINISH,
  ASYNC_ACTION_ERROR,
  ASYNC_ACTION_START,
} from "../constants/async.constants";

const initState = {
  loading: false,
  actionType: null,
  elmId: null,
  error: null,
};

const asyncReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ASYNC_ACTION_START:
      return {
        ...state,
        loading: true,
        actionType: payload.actionType,
        elmId: payload.elmId,
        error: null,
      };
    case ASYNC_ACTION_FINISH:
      return {
        ...state,
        loading: false,
        actionType: null,
        elmId: null,
        error: null,
      };
    case ASYNC_ACTION_ERROR:
      return {
        ...state,
        loading: false,
        actionType: null,
        elmId: null,
        error: payload.err,
      };
    default:
      return state;
  }
};

export default asyncReducer;
