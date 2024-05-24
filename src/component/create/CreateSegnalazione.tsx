import SegnalazioneModel from '../../models/SegnalazioneModel';
import SegnalazioniService from '../../service/SegnalazioniService';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Form , Button } from 'react-bootstrap';

const CreateSegnalazioneForm = () => {
    const { register, handleSubmit: handleSubmitForm, watch } = useForm<SegnalazioneModel>()
    const description = watch('description');
    const clienteName = watch('cliente.name');
    const clienteSurname = watch('cliente.surname');
    const tecnicoName = watch('tecnico.name');
    const tecnicoSurname = watch('tecnico.surname');
    const isSubmitDisabled = !description || !clienteName || !clienteSurname || !tecnicoName || !tecnicoSurname;


    const handleSubmit: SubmitHandler<SegnalazioneModel> = async (data) => {
        await SegnalazioniService.createSegnalazioni(data);
    };

    return (
        <Form onSubmit={handleSubmitForm(handleSubmit)}>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control type="textarea" placeholder="description" {...register('description')} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Cliente name</Form.Label>
                <Form.Control type="text" placeholder="cliente name" {...register('cliente.name')} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Cliente surname</Form.Label>
                <Form.Control type="text" placeholder="cliente surname" {...register('cliente.surname')} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Tecnico name</Form.Label>
                <Form.Control type="text" placeholder="tecnico name" {...register('tecnico.name')} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Tecnico surname</Form.Label>
                <Form.Control type="text" placeholder="tecnico surname" {...register('tecnico.surname')} />
            </Form.Group>
            <Button variant="outline-success" type="submit" disabled={isSubmitDisabled}>Success</Button>
        </Form>
    );
};

export default CreateSegnalazioneForm;