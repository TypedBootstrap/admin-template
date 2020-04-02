import React, { Suspense } from 'react';
import Page from 'components/Page';
import PageLoader from 'components/PageLoader';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import routes from 'config/routes';

/**
 * Routes
 */
const Routes = ({ location }) => (
    <Page>
        <Suspense fallback={<PageLoader />}>
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
        </Suspense>
    </Page>
);

export default withRouter(Routes);
