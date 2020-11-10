import map from 'lodash/fp/map'
import flatMap from 'lodash/fp/flatMap'
import fromPairs from 'lodash/fp/fromPairs'
import flow from 'lodash/fp/flow'
import concat from 'lodash/fp/concat'

const types = flow(
  flatMap(x => [x + '_REQUEST', x + '_SUCCESS', x + '_FAILURE']),
  concat([
    'GET_TOKEN_FROM',
    'GET_TOKEN_TO',
    'GET_FROM_VALUE',
    'GET_TO_VALUE'
  ]),
  map(x => [x, x]),
  fromPairs
)([])

function initialState () {
  return {
    tokenFrom: null,
    tokenTo: null,
    fromValue: 0,
    toValue: 0
  }
}

const state = initialState()

const getters = {
  tokenFrom (state) {
    return state.tokenFrom
  },
  tokenTo (state) {
    return state.tokenTo
  },
  fromValue (state) {
    return state.fromValue
  },
  toValue (state) {
    return state.toValue
  }
}

const mutations = {
  [types.GET_TOKEN_FROM] (state, tokenFrom: any) {
    state.tokenFrom = tokenFrom
  },
  [types.GET_TOKEN_TO] (state, tokenTo: any) {
    state.tokenTo = tokenTo
  },
  [types.GET_FROM_VALUE] (state, fromValue: string | number) {
    state.fromValue = fromValue
  },
  [types.GET_TO_VALUE] (state, toValue: string | number) {
    state.toValue = toValue
  }
}

const actions = {
  setTokenFrom ({ commit }, token: any) {
    commit(types.GET_TOKEN_FROM, token)
  },
  setTokenTo ({ commit }, token: any) {
    commit(types.GET_TOKEN_TO, token)
  },
  setFromValue ({ commit }, fromValue: string | number) {
    commit(types.GET_FROM_VALUE, fromValue)
  },
  setToValue ({ commit }, toValue: string | number) {
    commit(types.GET_TO_VALUE, toValue)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
