import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import Login from './pages/Login'
import Repositories from './pages/Repositories'
import Cadastro from './pages/Cadastro'

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Repositories,
        Cadastro,
    })
)

export default Routes 