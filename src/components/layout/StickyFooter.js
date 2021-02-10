import React from 'react';
import { Container } from 'reactstrap';

const StickyFooter = () => (
    <footer className="sticky-footer">
        <Container className="my-auto">
            <div className="copyright text-center my-auto">
                <span>Copyright © Your Website 2019</span>
            </div>
        </Container>
    </footer>
);

export default StickyFooter;
