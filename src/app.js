const css = require('./app.scss');

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom/es"
import Login from "./components/Login"
import store from "./store"
import Validate from "./components/Validate"
import HeaderWrapper from "./components/HeaderWrapper"
import History from './components/history'
import Contracts from "./components/containers/Contracts"
import NewClient from "./components/containers/NewClient"
import NewContract from "./components/containers/NewContract"
import Footer from "./components/Footer"
import PList from "./components/presentational/PriceListTable"

import Filter from "./components/containers/Filter"


class App extends React.Component {

    render() {
        return (
            <Router history={History}>
                <div className="main__wrapper">
                    <HeaderWrapper/>
                    <Switch>
                        <Route exact={true} path="/login" component={Login}/>
                        <Route exact path="/validate/:hash" component={Validate}/>
                        <Route path="/"
                            exact={true}
                            render={()=>(
                                <section>
                                    <Filter/>
                                    <Contracts/>
                                    {/*<PList/>*/}
                                </section>
                            )
                            }
                        />
                        <Route exact path="/new_client" component={NewClient}/>
                        <Route exact path="/add_contract" component={NewContract}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
