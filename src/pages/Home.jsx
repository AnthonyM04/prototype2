import { Container, Row, Col } from "react-bootstrap";
import AppLayout from "../layout/AppLayout";

export default function Home() {
    return(

        <AppLayout>
        <Container>
            <Row>
                <Col>
                <h2>Home</h2>
                </Col>
            </Row>
        </Container>
     </AppLayout>
         )
}