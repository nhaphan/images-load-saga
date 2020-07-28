import { IMAGES } from '../constants';

const loadingReducer = (state = [], action) => {
    switch (action.type) {
        case IMAGES.LOAD:
            return true;
        case IMAGES.LOAD_IMAGES_SUCCESS:
            return false;
        case IMAGES.LOAD_IMAGES_FAIL:
            return false;
        default:
            return false;
    }
};

export default loadingReducer;
