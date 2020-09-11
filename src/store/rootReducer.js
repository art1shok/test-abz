import { ACTIONS_TYPES } from './actions';

const initialState = {
  usersListData: null,
  positionData: null,
  isLoading: false,
  error: null,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.SAVE_USERS_DATA: {
      const { payload } = action;

      return {
        ...state,
        error: null,
        usersListData: payload,
      };
    }

    case ACTIONS_TYPES.SAVE_POSITIONS: {
      const { payload } = action;

      return {
        ...state,
        error: null,
        positionData: payload,
      };
    }

    case ACTIONS_TYPES.SET_LOAD_ERROR: {
      const { payload } = action;

      return {
        ...state,
        error: payload,
        usersListData: null,
      };
    }

    case ACTIONS_TYPES.START_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ACTIONS_TYPES.STOP_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};
