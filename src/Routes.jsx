import React from 'react';
import Page from 'components/Page';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import routes from 'config/routes';

/**
 * Routes
 */
const Routes = ({ location }) => (
    <Page>
        <Switch location={location}>
            {routes.map(route => (
                <Route
                    key={route.key}
                    component={route.component}
                    path={route.path}
                    exact={route.exact}
                />
            ))}
            <Redirect to="/" />
        </Switch>
    </Page>
);

export default withRouter(Routes);
