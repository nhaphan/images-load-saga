import { IMAGES } from '../constants';

const errorReducer = (state = null, action) => {
    switch (action.type) {
        case IMAGES.LOAD_IMAGES_FAIL:
            return action.error;
        case IMAGES.LOAD:
        case IMAGES.LOAD_IMAGES_SUCCESS:
            return null;
        default:
            return null;
    }
};

export default errorReducer;
