import axios from 'axios';

let timer;
export default {
  async signup(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup',
    });
  },
  async login(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'login',
    });
  },
  async auth(context, payload) {
    let URL =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBjFDRwjWB4QxudxhQ3sTKpjU3pj-4jcQk';

    if (payload.mode === 'signup') {
      URL =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBjFDRwjWB4QxudxhQ3sTKpjU3pj-4jcQk';
    }

    // const response = await fetch(URL, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: payload.email,
    //     password: payload.password,
    //     returnSecureToken: true,
    //   }),
    // });

    const response = await axios({
      method: 'post',
      url: URL,
      data: {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      },
    });

    const responseData = await response.data;

    // if (!response.ok) {
    //   const error = new Error(
    //     responseData.message || 'Failed to authenticate.'
    //   );
    //   throw error;
    // }

    const expiresIn = +responseData.expiresIn * 1000;

    const expirationData = new Date().getTime() + expiresIn;

    localStorage.setItem('token', responseData.idToken);
    localStorage.setItem('userId', responseData.localId);
    localStorage.setItem('tokenExpiration', expirationData);

    timer = setTimeout(() => {
      context.dispatch('logout');
    }, expiresIn);

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
    });
  },
  autoLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    const expiresIn = localStorage.getItem('tokenExpiration');
    const expirationDate = +expiresIn - new Date().getTime();

    if (expirationDate < 0) {
      return;
    }

    timer = setTimeout(() => {
      context.dispatch('logout');
    }, expirationDate);

    if (token && userId) {
      context.commit('setUser', {
        token,
        userId,
      });
    }
  },
  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration');

    clearTimeout(timer);

    context.commit('setUser', {
      token: null,
      userId: null,
    });
  },
};
