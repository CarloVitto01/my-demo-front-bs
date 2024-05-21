import { useEffect, useState } from "react";
import Segnalazioni from "../../models/SegnalazioneModel";
import SegnalazioniService from "../../service/SegnalazioniService";
import { useForm } from "react-hook-form";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Form, Button } from 'react-bootstrap';
import './ViewComponent.css'

type FilteredSegnalazioni = Segnalazioni & {
  surnameInput?: string;
  dateInput?: Date;
};

const ViewComponent = () => {
  const [segnalazioniList, setSegnalazioniList] = useState<Segnalazioni[]>([]);
  const { register, handleSubmit } = useForm<FilteredSegnalazioni>();

  useEffect(() => {
    SegnalazioniService.getSegnalazioni().then((res) => {
      setSegnalazioniList(res.data);
    });
  }, []);

  const filterReset = () => {
    SegnalazioniService.getSegnalazioni().then((res) => {
      setSegnalazioniList(res.data);
    });
  };

  const deleteLesson = async (id: number) => {
    await SegnalazioniService.deleteSegnalazione(id);
    console.log("Ho eliminato la segnalazione con id : " + id);
    window.location.reload();
  };

  const filterBy = async (data: FilteredSegnalazioni) => {
    const { surnameInput, dateInput } = data;
    const filtered = await SegnalazioniService.filteredSegnalazioneBy(surnameInput!, dateInput!);
    console.log(filtered.data);
    setSegnalazioniList(filtered.data);
  };

  return (
    <div className="bodyViewComponent">
      <div className="bodySearch">
        <Form onSubmit={handleSubmit(filterBy)}>
          <Form.Group className="mb-3">
            <Form.Label>Data: </Form.Label>
            <Form.Control type="date" placeholder="Date" {...register('dateInput')} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Cliente Surname</Form.Label>
            <Form.Control type="text" placeholder="Cliente surname" {...register('surnameInput')} />
          </Form.Group>
          <Button variant="outline-success" type="submit">Filter</Button>
          <Button variant="outline-warning" type="button" onClick={filterReset}>Reset</Button>
        </Form>
      </div>
      <div className={`containerCardSegnalazioni`}>
        {segnalazioniList.map((segnalazioni: Segnalazioni) => (
          <Card style={{ width: '18rem' }} key={segnalazioni.id}>
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
