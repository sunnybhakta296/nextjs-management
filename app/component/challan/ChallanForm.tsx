"use client";
import { saveChallan } from "@/app/lib/actions/challan";
import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import ChallnSubmitButton from "./ChallanSubmitButton";

export default function ChallanForm({ clients }) {
  const [fields, setFields] = useState([
    { product: "", quantity: "", unitPrice: "" },
  ]);

  const handleAddField = () => {
    setFields([...fields, { product: "", quantity: "", unitPrice: "" }]);
  };

  const handleChange = (index, field, value) => {
    const updatedFields = [...fields];
    updatedFields[index][field] = value;
    setFields(updatedFields);
  };

  return (
    <Container>
      <Form
        action={saveChallan.bind(null, fields)}
        style={{ marginTop: "50px" }}
        className="form"
      >
        <Row style={{ marginBottom: "10px" }}>
          <Col>
            <Form.Control
              type="number"
              placeholder="GST Percentage"
              name="gst"
              id="gst"
              value="0"
            />
          </Col>
          <Col>
            <Form.Select name="clientSlug" id="clientSlug" required>
              <option value="">Select Client</option>
              {clients.map((client) => (
                <option key={client.slug} value={client.slug}>
                  {client.name}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="Challan Number"
              name="challanNo"
              id="challanNo"
            />
          </Col>
          <Col>
            <Form.Control
              type="date"
              placeholder="Challan Date"
              name="challanDate"
              id="challanDate"
              required
            />
          </Col>
        </Row>

        <Button
          variant="primary"
          onClick={handleAddField}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          +
        </Button>

        {fields.map((field, index) => (
          <Row key={index} style={{ marginBottom: "10px" }}>
            <Col>
              <Form.Control
                type="text"
                placeholder="Product"
                value={field.product}
                onChange={(e) => handleChange(index, "product", e.target.value)}
                name={`product-${index}`}
                id={`product-${index}`}
                required
              />
            </Col>
            <Col>
              <Form.Control
                type="number"
                placeholder="Quantity"
                value={field.quantity}
                onChange={(e) =>
                  handleChange(index, "quantity", e.target.value)
                }
                name={`quantity-${index}`}
                id={`quantity-${index}`}
                required
              />
            </Col>
            <Col>
              <Form.Control
                type="number"
                placeholder="UnitPrice"
                value={field.unitPrice}
                onChange={(e) =>
                  handleChange(index, "unitPrice", e.target.value)
                }
                name={`unitPrice-${index}`}
                id={`unitPrice-${index}`}
                required
              />
            </Col>
            <Col>
              <Button variant="danger">-</Button>
            </Col>
          </Row>
        ))}

        <ChallnSubmitButton />
      </Form>
    </Container>
  );
}
