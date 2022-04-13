import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { Container, Row, Col, Form } from "react-bootstrap";

const RegisterForm = ({ userForm }) => {
  const router = useRouter();
  const contentType = "application/json";
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    email: userForm.email,
    password: userForm.password,
  });

  // POST //
  const postData = async (form) => {
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error(res.status);
      }

      router.push("/");
      setMessage("Created account! Redirecting...");
    } catch (error) {
      setMessage("Failed to create account. Please try again.");
    }
  };

  // HANDLE FORM CHANGE //
  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // HANDLE FORM SUBMIT //
  const handleSubmit = (e) => {
    e.preventDefault();
    postData(form);
  };

  // RETURN //
  return (
    <Container fluid>
      <Row>
        <form onSubmit={handleSubmit}>
          <Col>
            <label htmlFor="email">email</label>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </Col>
          <Col>
            <label htmlFor="password">password</label>
            <input
              type="text"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </Col>
          <button type="submit">submit</button>
          <p>{message}</p>
        </form>
      </Row>
    </Container>
  );
};

export default RegisterForm;
