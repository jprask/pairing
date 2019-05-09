import {
  SELECT_ORIGIN,
  SELECT_TARGET,
  UPDATE_PATH,
  RECEIVE_MAP
} from './actions'

const initialState = {
  routeOrigin: '',
  routeTarget: '',
  path: null,
  map: {},
}

const router = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SELECT_ORIGIN:
      return { ...state, routeOrigin: payload.node }
    case SELECT_TARGET:
      return { ...state, routeTarget: payload.node }
    case UPDATE_PATH:
      return { ...state, path: payload.path }
    case RECEIVE_MAP:
      return { ...state, map: payload.map }
    default: return state
  }
}

export default router
