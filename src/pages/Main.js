import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './Login'
import AdminIndex from './AdminIndex'

export default function Main() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login}></Route>
            <Route path="/index/"  component={AdminIndex}></Route>
        </BrowserRouter>
    )
}
