import React, { lazy, Suspense } from 'react';
import { PageLoader } from 'components/common';
import { Base } from 'components/layout';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Used to render a lazy component with react-router
const waitFor = Tag => props => <Tag {...props} />;

const BlankPage = lazy(() => import('pages/BlankPage'));
const IndexPage = lazy(() => import('pages/IndexPage'));

const Routes = ({ location }) => {
    const currentKey = location.pathname.split('/')[1] || '/';
    const timeout = { enter: 500, exit: 500 };
    const animationName = 'fade-in';

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
