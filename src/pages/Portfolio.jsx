import { Container, Row, Col } from "react-bootstrap";
import Layout from '../layout/AppLayout';
import Gallery from '../layout/Gallery';

export default function Portfolio (){
    return(
        <Layout>
            <Container>
                <Row>
                    <Col className="text-center">
                        <h2>Portfolio</h2>
                        <h3 className='mb-4 text-center'>I'm a code woman, not a coder!!!!</h3>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}