import React from 'react'
import { Route, Switch } from 'react-router-dom'

// IMPORT COMPONENT
import Headers from '../components/headers'

// IMPORT PAGES
import HomePage from './homepage'
import CekResiPage from './cekresipage'
import CekTarifPage from './cektarifpage'

export default function Main() {
    return (
        <> 
            <Headers />
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/cekresi" component={CekResiPage} />
                <Route path="/cektarif" component={CekTarifPage} />
            </Switch>
        </>
    )
}
