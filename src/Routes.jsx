import React, { Suspense } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Page from 'components/Page';
import PageLoader from 'components/PageLoader';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import routes from 'config/routes';

/**
 * Routes
 */
const Routes = ({ location }) => {
    const currentLocation = location.pathname.split('/')[1] || '/';

    return (
        <Page>
            <TransitionGroup>
                <CSSTransition
                    key={currentLocation}
                    classNames="fade-in"
                    exit={false}
                    timeout={{ enter: 500, exit: 500 }}>
                    <div>
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
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </Page>
    );
};

export default withRouter(Routes);
