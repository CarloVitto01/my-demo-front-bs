import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CreateSegnalazioneForm from './CreateSegnalazione';

const ButtonCreateSegnalazione = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Create
        </Button>
  
        <Modal show={show} onHide={handleClose}>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          <Modal.Body>
            <CreateSegnalazioneForm />
          </Modal.Body>
        </Modal>
      </>
    );
};

export default ButtonCreateSegnalazione;
