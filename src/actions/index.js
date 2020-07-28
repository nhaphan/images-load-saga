import { IMAGES, STATS } from '../constants';

const loadImages = () => {
  return {
    type: IMAGES.LOAD,
  };
};

const setImages = images => {
  return {
    type: IMAGES.LOAD_IMAGES_SUCCESS,
    images: images,
  };
};

const setError = error => {
  return {
    type: IMAGES.LOAD_IMAGES_FAIL,
    error: error,
  };
};

const loadImageStats = id => {
  return {
    type: STATS.LOAD,
    id,
  };
};

const setImageStats = (id, downloads) => {
  return {
    type: STATS.LOAD_STATS_SUCCESS,
    id,
    downloads,
  };
};

const setImageStatsError = id => {
  return {
    type: STATS.LOAD_STATS_FAIL,
    id,
  };
};
export {
  loadImages,
  setImages,
  setError,
  loadImageStats,
  setImageStats,
  setImageStatsError,
};
