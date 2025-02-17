import { useState } from "react";
import {
  Col,
  Container,
  Row,
  Image,
  Form,
  Button,
  FloatingLabel,
  Toast,
} from "react-bootstrap";
import { useSession } from "../store/Session";
import { useNavigate } from "react-router";

export function SignIn() {
  const signIn = useSession((state) => state.signIn);
  const navigate = useNavigate();

  const [signData, setSignData] = useState({
    user_id: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    toggle: false,
    message: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    signIn(signData)
      .then(() => {
        navigate("/");
      })
      .catch((reason) => {
        setErrorMessage({ toggle: true, message: reason });
      });
  }

  const changeControl = (event) => {
    const {
      target: { name, value },
    } = event;
    setSignData({ ...signData, [name]: value });
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <Image
            id="logo"
            size="sm"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDE5OCAxNDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyI+CiAgICA8ZyBpZD0i66CI7J207Ja0LTEiIHNlcmlmOmlkPSLroIjsnbTslrQgMSIgdHJhbnNmb3JtPSJtYXRyaXgoNC4xNjY2NywwLDAsNC4xNjY2NywtMTc0MywtNTcyKSI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSw0NjUuMDk2LDE0OC44NTgpIj4KICAgICAgICAgICAgPHBhdGggZD0iTTAsLTEwLjgwM0wwLDBMLTMuMzg0LDBMLTMuMzg0LC03LjQxOEwtMjkuNzE2LC03LjQxOEwtMjkuNzE2LC0xMC44MDNMMCwtMTAuODAzWiIgc3R5bGU9ImZpbGw6cmdiKDM1LDI1LDIyKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgICAgICA8L2c+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSw0NDguODg4LDE2My40ODUpIj4KICAgICAgICAgICAgPHBhdGggZD0iTTAsNC4wMzdMMCw3LjQyMkwtMjkuNzE0LDcuNDIyTC0yOS43MTQsLTMuMzg1TC0yNi4zMywtMy4zODVMLTI2LjMzLDQuMDM3TDAsNC4wMzdaIiBzdHlsZT0iZmlsbDpyZ2IoMzUsMjUsMjIpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgICAgIDwvZz4KICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDQyMS44NzcsMTQwLjc1NykiPgogICAgICAgICAgICA8cGF0aCBkPSJNMCw4LjEwMUwwLDUuMzk5TDEwLjgwMyw1LjM5OUwxMC44MDMsMi43MDJMMCwyLjcwMkwwLDBMMTAuODAzLDBMMTAuODAzLC0yLjcwMkwtMi43MDIsLTIuNzAyTC0yLjcwMiwxMC44MDNMMTAuODAzLDEwLjgwM0wxMC44MDMsOC4xMDFMMCw4LjEwMVoiIHN0eWxlPSJmaWxsOnJnYigzNSwyNSwyMik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsNDM4LjA4MSwxNTEuNTYpIj4KICAgICAgICAgICAgPHBhdGggZD0iTTAsNS44MzhMMCwtMEwxMC44MDgsLTBMMTAuODA4LC0yLjcwMkwtMi43MDEsLTIuNzAyTC0yLjcwMSw4LjU0TDEwLjgwOCw4LjU0TDEwLjgwOCw1LjgzOEwwLDUuODM4WiIgc3R5bGU9ImZpbGw6cmdiKDM1LDI1LDIyKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgICAgICA8L2c+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSw0NjUuMDk4LDE2Mi44MDMpIj4KICAgICAgICAgICAgPHBhdGggZD0iTTAsMi43MDFMMCwtNS40MDRMLTEzLjUwOSwtNS40MDRMLTEzLjUwOSwtMi43MDNMLTIuNzAyLC0yLjcwM0wtMi43MDIsLTAuMDAxTC0xMy41MDksLTAuMDAxTC0xMy41MDksOC4xMDVMMCw4LjEwNUwwLDUuNDAzTC0xMC44MDgsNS40MDNMLTEwLjgwOCwyLjcwMUwwLDIuNzAxWiIgc3R5bGU9ImZpbGw6cmdiKDE5NSwxNCwzNSk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
          />
        </Col>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                size="mb"
                type="text"
                name="user_id"
                onChange={changeControl}
                placeholder="Email"
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                size="mb"
                type="password"
                name="password"
                onChange={changeControl}
                placeholder="Password"
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Button type="submit" variant="outline-primary" size="sm">
              로그인
            </Button>
          </Col>
        </Row>
      </Form>
      <Toast
        onClose={() => setErrorMessage({ ...errorMessage, toggle: false })}
        show={errorMessage.toggle}
        delay={3000}
        autohide
      >
        <Toast.Body>{errorMessage.message}</Toast.Body>
      </Toast>
    </Container>
  );
}
