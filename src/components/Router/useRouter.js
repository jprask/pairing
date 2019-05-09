import { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectOrigin, selectTarget, fetchMap } from '../../reducers/actions'

const useRouter = () => {
  const routerState = useSelector(state => ({
    nodes: Object.keys(state.map),
    routeOrigin: state.routeOrigin,
    routeTarget: state.routeTarget,
    shortestPath: state.path
  }))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMap())
  }, [dispatch])

  const selectOriginCallback = useCallback(
    node => {
      dispatch(selectOrigin(node))
    },
    [dispatch],
  )

  const selectTargetCallback = useCallback(
    node => {
      dispatch(selectTarget(node))
    },
    [dispatch],
  )

  return {
    ...routerState,
    selectOrigin: selectOriginCallback,
    selectTarget: selectTargetCallback,
  }
}

export { useRouter }
