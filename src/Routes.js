import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { PageLoader } from './components/common';
import { Base, BasePage } from './components/layout';

// Used to render a lazy component with react-router
const waitFor = Tag => props => <Tag {...props} />;

const BlankPage = lazy(() => import('./pages/BlankPage'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const IndexPage = lazy(() => import('./pages/IndexPage'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));

const listOfPages = ['/forgot-password', '/login', '/register'];

const Routes = ({ location }) => {
    const currentKey = location.pathname.split('/')[1] || '/';
    const timeout = { enter: 500, exit: 500 };
    const animationName = 'fade-in';

    if (listOfPages.indexOf(location.pathname) > -1) {
        return (
            <BasePage>
                <Suspense fallback={<PageLoader />}>
                    <Switch location={location}>
                        <Route path="/forgot-password" component={waitFor(ForgotPassword)} />
                        <Route path="/login" component={waitFor(Login)} />
                        <Route path="/register" component={waitFor(Register)} />
                    </Switch>
                </Suspense>
            </BasePage>
        );
    }

    return (
        <Base>
            <TransitionGroup>
                <CSSTransition
                    key={currentKey}
                    classNames={animationName}
                    exit={false}
                    timeout={timeout}>
                    <div>
                        <Suspense fallback={<PageLoader />}>
                            <Switch location={location}>
                                <Route path="/" component={waitFor(IndexPage)} exact />
                                <Route path="/blank" component={waitFor(BlankPage)} />
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
