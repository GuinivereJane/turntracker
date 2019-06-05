// initial state
// shape: [{ id, quantity }]
import moment from 'moment';
const now = moment().format();

const state = {
  turn: 0,
  startTime: now,
  endTime: null,
  players: {
    '1': {
      active: false,
      name: 'player1',
      score: 0,
      priority: false,
      cp: 3,
      priority: [false, false, false, false, false],
      turnTimes: [[], [], [], [], []],
      icon: require(`@/assets/chaos.png`),
    },
    '2': {
      active: false,
      name: 'player2',
      score: 0,
      priority: false,
      cp: 2,
      priority: [false, false, false, false, false],
      turnTimes: [[], [], [], [], []],
      icon: require(`@/assets/sigmar.png`),
    },
  },
};

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
  stampTime(state, { id, action }) {
    let timestamp = { action, time: moment() };
    state.players[id].turnTimes[state.turn - 1].push(timestamp);
  },
  increment(state, payload) {
    state.players[payload.id][payload.target]++;
  },
  decrement(state, payload) {
    state.players[payload.id][payload.target]--;
  },
  setPriority(state, payload) {
    console.log(payload);
    for (var player in state.players) {
      state.players[player].active = false;
    }
    state.turn === 0 && state.turn++;

    state.players[payload.id].priority[state.turn - 1] = true;
  },
  clearActive(state) {
    for (var player in state.players) {
      state.players[player].active = false;
    }
  },
  nextTurn(state) {
    state.turn < 5 && state.turn++;
  },
  setActive(state, payload) {
    for (var player in state.players) {
      state.players[player].active = false;
    }
    state.players[payload.id].active = true;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
