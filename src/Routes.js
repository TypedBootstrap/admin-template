import { Route, Switch, withRouter } from 'react-router-dom';
import { Base, BasePage } from './components/layout';
import {
    Blank,
    Charts,
    Dashboard,
    ForgotPassword,
    Login,
    NotFound,
    Register,
    Tables
} from './components/pages';

const listofPages = ['/forgot-password', '/login', '/register'];

const Routes = ({ location }) => {
    if (listofPages.indexOf(location.pathname) > -1) {
        return (
            <BasePage>
                <Switch>
                    <Route path="/forgot-password">
                        <ForgotPassword />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                </Switch>
            </BasePage>
        );
    }

    return (
        <Base>
            <Switch>
                <Route path="/blank">
                    <Blank />
                </Route>
                <Route path="/charts">
                    <Charts />
                </Route>
                <Route path="/404">
                    <NotFound />
                </Route>
                <Route path="/tables">
                    <Tables />
                </Route>
                <Route path="/" exact>
                    <Dashboard />
                </Route>
            </Switch>
        </Base>
    );
};

export default withRouter(Routes);
