import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import { recepieReducer } from '../pages/recepie/reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig ={
    key:'root',
    storage,
}
const rootReducer = combineReducers({
form:formReducer,
 recepieReducer:recepieReducer,
});

export default persistReducer(persistConfig,rootReducer)