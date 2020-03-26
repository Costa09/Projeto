import {combineReducers} from 'redux'
import login from './login'
import repositories from './repositories'
import sign from './sign'

export default combineReducers({
    login,
    repositories,
    sign
})