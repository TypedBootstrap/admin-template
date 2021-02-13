import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const LogoutModal = ({ isOpen, handleToggle }) => (
    <Modal isOpen={isOpen} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>Ready to Leave?</ModalHeader>
        <ModalBody>Select "Logout" below if you are ready to end your current session.</ModalBody>
        <ModalFooter>
            <Button color="secondary" onClick={handleToggle}>
                Cancel
            </Button>{' '}
            <Button color="primary" onClick={handleToggle}>
                Logout
            </Button>
        </ModalFooter>
    </Modal>
);

export default LogoutModal;
