'use client'

import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useActionState } from "react";
import { saveInPayments } from "@/app/lib/actions/payments";

export default  function PaymentForm({clients}) {
  return (
    <Container>
      <Form
        action={saveInPayments}
        style={{ marginTop: "150px" }}
        className="form"
      >
        <Col style={{marginTop: "10px"}}>
          <Form.Select name="clientSlug" id="clientSlug" required>
            <option value="">Select Client</option>
            {clients.map((client) => (
              <option key={client.slug} value={client.slug}>
                {client.name}
              </option>
            ))}
          </Form.Select>
        </Col>

        <Row style={{ marginTop: "10px" }}>
          <Col>
            <Form.Control
              type="text"
              placeholder="Challan Number"
              name="challanNo"
              id="challanNo"
              required
            />
          </Col>
          <Col>
            <Form.Control
              type="date"
              placeholder="Payment Date"
              name="createdDate"
              id="createdDate"
              required
            />
          </Col>
        </Row>

        <Row style={{ marginTop: "10px" }}>
          <Col>
            <Form.Control
              type="number"
              placeholder="Amount"
              name="amount"
              id="amount"
              required
            />
          </Col>
        </Row>

        <Row style={{ marginTop: "10px" }}>
          <Button className="" type="submit">
            Submit
          </Button>
        </Row>
      </Form>
    </Container>
  );
}
