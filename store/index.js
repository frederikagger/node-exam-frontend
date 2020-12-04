export const state = () => ({
  token: "",
  user: {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    birthday: null,
    country: "",
    profilePicURL: '',
    _id: ''
  }
});

export const getters = {
  token: state => {
    return state.token;
  },
  user: state => {
    return state.user;
  }
};

export const mutations = {
  login(state, payload) {
    state.token = payload;
  },
  logout(state) {
    state.token = "";
  },
  saveUser(state, payload) {
    state.user = payload;
  }
};

export const actions = {
  login({ commit }, token) {
    commit("login", token);
  },
  logout({ commit }) {
    commit("logout");
  },
  saveUser({ commit }, user) {
    commit("saveUser", user);
  }
};
