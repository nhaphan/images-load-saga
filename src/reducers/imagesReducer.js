import { IMAGES } from '../constants';

const imagesReducer = (state = [], action) => {
  if (action.type === IMAGES.LOAD_IMAGES_SUCCESS) {
    
    return [...state, ...action.images];
  }
  return state;
};

export default imagesReducer;
