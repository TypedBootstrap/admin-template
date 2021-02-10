import React, { Suspense } from 'react';
import Base from 'components/Layout/Base';
import PageLoader from 'components/PageLoader';
import routes from 'config/routes';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Routes = ({ location }) => {
    const currentLocation = location.pathname.split('/')[1] || '/';

    return (
        <Base>
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
        </Base>
    );
};

export default withRouter(Routes);
