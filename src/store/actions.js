import { apiService } from '../services/apiService';

export const ACTIONS_TYPES = {
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
  SET_LOAD_ERROR: 'SET_LOAD_ERROR',
  SAVE_USERS_DATA: 'SAVE_USERS_DATA',
  SAVE_POSITIONS: 'SAVE_POSITIONS',
};

const startLoading = () => ({
  type: ACTIONS_TYPES.START_LOADING,
});

const stopLoading = () => ({
  type: ACTIONS_TYPES.STOP_LOADING,
});

const setUsersError = (error) => ({
  type: ACTIONS_TYPES.SET_LOAD_ERROR,
  payload: error,
});

const saveUsers = (data) => ({
  type: ACTIONS_TYPES.SAVE_USERS_DATA,
  payload: data,
});

const savePositions = (data) => ({
  type: ACTIONS_TYPES.SAVE_POSITIONS,
  payload: data,
});

export const loadUsers = (count = 6) => (dispatch) => {
  dispatch(startLoading());
  apiService.getUsers(count)
    .then((data) => dispatch(saveUsers(data)))
    .catch((err) => {
      dispatch(setUsersError(err.message));
    })
    .finally(() => dispatch(stopLoading()));
};

export const loadPositions = () => (dispatch) => {
  dispatch(startLoading());

  apiService.getPosition()
    .then((data) => dispatch(savePositions(data)))
    .catch((err) => {
      dispatch(setUsersError(err.message));
    })
    .finally(() => dispatch(stopLoading()));
};

export const createUser = (userData, openPopup) => async (dispatch) => {
  dispatch(startLoading());
  const token = await apiService.getToken();
  const formData = new FormData();

  Object.entries(userData).map(([key, value]) => {
    formData.append(key, value);
  });
  apiService.postUser(formData, token)
    .then(() => {
      dispatch(loadUsers());
      openPopup();
    }).finally(() => dispatch(stopLoading()));
};
