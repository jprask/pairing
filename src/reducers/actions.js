import { findShortestPath, fetchRoutes } from '../models'

/** COMPUTE PATH */
export const UPDATE_PATH = 'UPDATE_PATH'
export const updatePath = path => ({
  type: UPDATE_PATH, payload: { path }
})

export const computePath = () => (dispatch, getState) => {
  const { map, routeOrigin, routeTarget } = getState()

  dispatch(updatePath(findShortestPath(map, routeOrigin, routeTarget)))
}

/** SELECT NODES */
export const SELECT_ORIGIN = 'SELECT_ORIGIN'
export const selectOrigin = node => (dispatch, getState) => {
  dispatch({
    type: SELECT_ORIGIN,
    payload: { node }
  })

  if (getState()['routeTarget'])
    dispatch(computePath())
}

export const SELECT_TARGET = 'SELECT_TARGET'
export const selectTarget = node => (dispatch, getState) => {
  dispatch({
    type: SELECT_TARGET,
    payload: { node }
  })

  if (getState()['routeOrigin'])
    dispatch(computePath())
}


/** FETCH */
export const RECEIVE_MAP = 'RECEIVE_MAP'
export const receiveMap = map => ({
  type: RECEIVE_MAP,
  payload: { map }
})

export const fetchMap = () => (dispatch, getState) => {
  fetchRoutes(map => dispatch(receiveMap(map)))
}
