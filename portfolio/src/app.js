import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Acceuil from './Component/Acceuil/Acceuil'
import About from './Component/apropos/About'
import Projet from './Component/Projet/Projet'


const App = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Acceuil} />
            <Route exact path='/about/' component={About} />
            <Route exact path='/Projets/' component={Projet} />
        </Switch>
        </BrowserRouter>
    )
}

export default App