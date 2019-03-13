import { SAVES_LOADING } from '../actions/recipe_saves_actions';

const SavesLoadingReducer = (state = false, action) => {
    switch (action.type) {
        case SAVES_LOADING:
            return true;
        default:
            return false;
    }
};

export default SavesLoadingReducer;