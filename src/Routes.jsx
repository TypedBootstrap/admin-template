import React from 'react';
import Page from 'components/Page';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

// Pages
import BlankPage from 'pages/BlankPage';
import IndexPage from 'pages/IndexPage';

/**
 * Routes
 */
const Routes = ({ location }) => (
    <Page>
        <Switch location={location}>
            <Route key="blank" component={BlankPage} path="/blank" exact />
            <Route key="index" component={IndexPage} path="/" exact />
            <Redirect to="/" />
        </Switch>
    </Page>
);

export default withRouter(Routes);
