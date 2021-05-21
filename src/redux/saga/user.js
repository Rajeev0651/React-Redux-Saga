import { call, put, delay, takeEvery } from 'redux-saga/effects'
import store from '../store'

const url = 'https://graphqlzero.almansi.me/api'

function getApi() {
  const state = store.getState();
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    "body": JSON.stringify({
      query: `{
        albums(options: { paginate: { page: ${state.fetched}, limit: 1 } }) {
          data {
            title
          }
        }
      }`
    })
  }).then(function (response) {
    return response.json();
  })
    .catch((error) => { throw error })
}

function* fetchUser(action) {
  while (true) {
    try {
      const users = yield call(getApi);
      console.log(users.data.albums.data[0].title)
      yield put({ type: 'GET_USER_SUCCESS', users: users.data.albums.data[0].title });
      yield delay(5000);
    }
    catch (e) {
      yield put({ type: 'GET_USER_FAILED', message: e.message })
    }
  }
}
function* userSaga() {
  yield takeEvery('GET_USERS_REQUESTED', fetchUser);
}
export default userSaga;