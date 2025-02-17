import { Container, Row, Col } from "react-bootstrap";

export function StatusBar() {
  return (
    <div className="bg-secondary mt-auto">
      <Container className="p-3">
        <Row>
          <Col className="text-center">
            <a href="/">Instagram</a>
          </Col>
          <Col className="text-center">
            <a href="/">Facebook</a>
          </Col>
          <Col className="text-center">
            <a href="/">Twitter</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
