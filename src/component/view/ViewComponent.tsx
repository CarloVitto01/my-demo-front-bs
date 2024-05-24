import { useState } from "react";
import Segnalazioni from "../../models/SegnalazioneModel";
import SegnalazioniService from "../../service/SegnalazioniService";
import { SubmitHandler, useForm } from "react-hook-form";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Form, Button, Col, Row } from 'react-bootstrap';
import './ViewComponent.css'


const ViewComponent = () => {
  const [segnalazioniList, setSegnalazioniList] = useState<Segnalazioni[]>([]);
  const { register, handleSubmit } = useForm<Segnalazioni>();

  const deleteLesson = async (id: number) => {
      await SegnalazioniService.deleteSegnalazione(id);
      console.log("Segnalazione eliminata con successo, ID: " + id);
      setSegnalazioniList(segnalazioniList.filter(segnalazione => segnalazione.id !== id));
  };

  const filterBy: SubmitHandler<Segnalazioni> = async (data) => {
    const filtered = await SegnalazioniService.filteredSegnalazioneBy(data.cliente.surname, data.date);
    console.log(filtered.data);
    setSegnalazioniList(filtered.data);
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <Form onSubmit={handleSubmit(filterBy)}>
          <Row>
            <Col xs={6}>
              <Form.Label>Data: </Form.Label>
              <Form.Control type="date" placeholder="Date" {...register('date')} />
            </Col>
            <Col xs={6}>
              <Form.Label>Cliente Surname</Form.Label>
              <Form.Control type="text" placeholder="Cliente surname" {...register('cliente.surname')} />
            </Col>
          </Row>
            <Col className="d-flex justify-content-center mt-2">
              <Button variant="outline-success" type="submit">Filter</Button>
            </Col>
        </Form>
      </div>
      <div className={`containerCardSegnalazioni`}>
        {segnalazioniList.map((segnalazioni: Segnalazioni) => (
          <Card style={{ width: '18rem', margin: '1em' }} key={segnalazioni.id}>
            <Card.Body>
              <Card.Title>Description:</Card.Title>
              <Card.Text>
                {segnalazioni.description}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Data creazione: {segnalazioni.date.toString()}</ListGroup.Item>
              <ListGroup.Item>Cliente: {segnalazioni.cliente.name} {segnalazioni.cliente.surname}</ListGroup.Item>
              <ListGroup.Item>Tecnico: {segnalazioni.tecnico.name} {segnalazioni.tecnico.surname}</ListGroup.Item>
            </ListGroup>
            <Button variant="outline-success" type="button" onClick={() => deleteLesson(segnalazioni?.id!)}>Delete</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ViewComponent;
