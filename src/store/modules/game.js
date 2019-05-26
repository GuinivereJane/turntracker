// initial state
// shape: [{ id, quantity }]
import moment from 'moment';
const now = moment().format();

const state = {
  turn: 0,

  players: {
    '1': {
      active: false,
      name: 'player1',
      score: 0,
      priority: false,
      cp: 3,
      priority: [false, false, false, false, false],
      icon: require(`@/assets/chaos.png`),
    },
    '2': {
      active: false,
      name: 'player2',
      score: 0,
      priority: false,
      cp: 2,
      priority: [false, false, false, false, false],
      icon: require(`@/assets/sigmar.png`),
    },
  },
  startTime: now,
};

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
  increment(state, payload) {
    console.log(payload.target);
    state.players[payload.id][payload.target]++;
  },
  decrement(state, payload) {
    state.players[payload.id][payload.target]--;
  },
  setPriority(state, payload) {
    for (var player in state.players) {
      state.players[player].active = false;
    }
    state.players[payload.id].priority[state.turn] = true;
    state.turn < 5 && state.turn++;
  },
  setActive(state, payload) {
    for (var player in state.players) {
      state.players[player].active = false;
    }
    state.players[payload.id].cp++;
    state.players[payload.id].active = true;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
