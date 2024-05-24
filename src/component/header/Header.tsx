import ButtonCreateSegnalazione from '../create/ButtonCreateSegnalazione';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {

    return (
        <Navbar>
            <Container>
                <Navbar.Brand>Report Center</Navbar.Brand>
                <ButtonCreateSegnalazione />
            </Container>
        </Navbar>
    );
};

export default Header;
