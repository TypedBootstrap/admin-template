import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => (
    <footer className="py-4 bg-light mt-auto">
        <Container className="px-4" fluid>
            <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">Copyright &copy; Your Website 2024</div>
                <div>
                    <Link to="/">Privacy Policy</Link>
                    &middot;
                    <Link to="/">Terms &amp; Conditions</Link>
                </div>
            </div>
        </Container>
    </footer>
);

export default Footer;
