import Lh from '../helpers/LaneHelper'

const boardReducer = (state = {lanes: [], lastAction: ''}, action) => {
  const {payload, type} = action
  let newState
  switch (type) {
    case 'LOAD_BOARD':
      newState = Lh.initialiseLanes(state, payload)
      break
    case 'ADD_CARD':
      newState = Lh.appendCardToLane(state, payload)
      break
    case 'REMOVE_CARD':
      newState = Lh.removeCardFromLane(state, payload)
      break
    case 'MOVE_CARD':
      newState = Lh.moveCardAcrossLanes(state, payload)
      break
    case 'UPDATE_CARDS':
      newState = Lh.updateCardsForLane(state, payload)
      break
    case 'UPDATE_LANES':
      newState = Lh.updateLanes(state, payload)
      break
    case 'PAGINATE_LANE':
      newState = Lh.paginateLane(state, payload)
      break
    case 'MOVE_LANE':
      newState = Lh.moveLane(state, payload)
      break
    case 'ADD_LANE':
      newState = Lh.addLane(state, payload)
      break
    default:
      newState = state
      break
  }

  newState.lastAction = newState !== state ? type : ''
  return newState
}

export default boardReducer
