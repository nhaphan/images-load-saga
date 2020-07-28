import { take, fork } from 'redux-saga/effects';
const { IMAGES } = require('../constants');

function* handleStatsRequest(id) {
  console.log('fetching stats for', id);
}

function* watchStatsRequest() {
  while (true) {
    const { images } = yield take(IMAGES.LOAD_IMAGES_SUCCESS);
    for (let i = 0; i < images.length; i++) {
      yield fork(handleStatsRequest, images[i].id);
    }
  }
}

export default watchStatsRequest;
