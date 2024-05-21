import ButtonCreateSegnalazione from '../create/ButtonCreateSegnalazione';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {

    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>Report Center</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <ButtonCreateSegnalazione />
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
