import { Container, Row, Col } from "react-bootstrap";
import AppLayout from "../layout/AppLayout";

export default function Error404() {
    return(

        <AppLayout>
        <Container>
            <Row>
                <Col>
                <h2>ERROR 404</h2>
                </Col>
            </Row>
        </Container>
     </AppLayout>
         )
}