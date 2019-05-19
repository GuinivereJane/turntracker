// initial state
// shape: [{ id, quantity }]
import moment from 'moment';
const now = moment().format();

const state = {
  players: {
    '1': { name: 'player1', turn: 0, score: 0 },
    '2': { name: 'player2', turn: 0, score: 0 },
  },
  priority: [],
  startTime: now,
};

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
  increment(state, payload) {
    state.players[payload.id][payload.target]++;
  },
  decrement(state, payload) {
    state.players[payload.id][payload.target]--;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
