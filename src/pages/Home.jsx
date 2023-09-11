import { Container, Row, Col } from "react-bootstrap";
import Layout from '../layout/AppLayout';

export default function Home (){
    return(
        <Layout>
            <Container>
                <Row>
                    <Col>
                       <h2>Home</h2>
                       <h3 className='mb-4 text-center'>I'm a code woman, not a coder!!!!</h3>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}