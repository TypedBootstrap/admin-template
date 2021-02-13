import classnames from 'classnames';
import { useSelector } from 'react-redux';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

const Base = ({ children }) => {
    const { sidebarToggled } = useSelector(state => state.ui);

    return (
        <div className={classnames('base', { 'sidebar-toggled': sidebarToggled })}>
            <Header />
            <div className="wrapper">
                <Sidebar />
                <div className="content-wrapper">
                    {children}
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Base;
