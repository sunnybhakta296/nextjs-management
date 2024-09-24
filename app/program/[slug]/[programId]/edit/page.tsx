'use client'
import { updateProgram } from "@/app/lib/actions/program";
import { Form, Button, Row, Col } from "react-bootstrap";

export default async function Program({ params }: any) {
    const { programId, slug } = params;
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12">   
                        <Form
                            action={updateProgram.bind(null, programId, slug)}
                            className="client-form"
                            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                        >
                            <Row>
                                <Col>
                                    <Form.Group controlId="cutting">
                                        <Form.Label>Cutting:</Form.Label>
                                        <Form.Control type="number" name="cutting" className="form-control" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="stiched">
                                        <Form.Label>Stiched:</Form.Label>
                                        <Form.Control type="number" name="stiched" className="form-control" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group controlId="thredCutting">
                                        <Form.Label>Thred Cutting:</Form.Label>
                                        <Form.Control type="number" name="thredCutting" className="form-control" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="press">
                                        <Form.Label>Press:</Form.Label>
                                        <Form.Control type="number" name="press" className="form-control" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group controlId="nara">
                                        <Form.Label>Nara:</Form.Label>
                                        <Form.Control type="number" name="nara" className="form-control" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="packaging">
                                        <Form.Label>Packaging:</Form.Label>
                                        <Form.Control type="number" name="packaging" className="form-control" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button type="submit" className="btn btn-primary">Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
}
