import { updateProgram } from "@/app/lib/actions/program";
import { Form, Button, Row, Col } from "react-bootstrap";

export default async function Program({ params }: any) {
    const { programId } = params;
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12">   
                        <h1>Edit</h1>
                        <Form
                            onSubmit={updateProgram.bind(null, programId)}
                            className="client-form"
                            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                        >
                            <Row>
                                <Col>
                                    <Form.Group controlId="cutting">
                                        <Form.Label>Cutting:</Form.Label>
                                        <Form.Control type="text" name="cutting" className="form-control" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="stiched">
                                        <Form.Label>Stiched:</Form.Label>
                                        <Form.Control type="text" name="stiched" className="form-control" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group controlId="thredCutting">
                                        <Form.Label>Thred Cutting:</Form.Label>
                                        <Form.Control type="text" name="thredCutting" className="form-control" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="press">
                                        <Form.Label>Press:</Form.Label>
                                        <Form.Control type="text" name="press" className="form-control" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group controlId="nara">
                                        <Form.Label>Nara:</Form.Label>
                                        <Form.Control type="text" name="nara" className="form-control" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="packaging">
                                        <Form.Label>Packaging:</Form.Label>
                                        <Form.Control type="text" name="packaging" className="form-control" />
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
        //         <div className="col-12">   
        //             <h1>Edit</h1>
        //         <form
        //             action={updateProgram.bind(null, programId)}
        //             className="client-form"
        //             style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        //         >
        //             <div className="col">
        //                 <label htmlFor="cutting">Cutting:</label>
        //                 <input type="text" id="cutting" name="cutting" className="form-control" />
        //                 <button type="button" className="btn btn-secondary">Button</button>
        //             </div>
        //             <div className="col">
        //                 <label htmlFor="stiched">Stiched:</label>
        //                 <input type="text" id="stiched" name="stiched" className="form-control" />
        //             </div>
        //             <div className="col">
        //                 <label htmlFor="thredCutting">Thred Cutting:</label>
        //                 <input type="text" id="thredCutting" name="thredCutting" className="form-control" />
        //             </div>
        //             <div className="col">
        //                 <label htmlFor="press">Press:</label>
        //                 <input type="text" id="press" name="press" className="form-control" />
        //             </div>
        //             <div className="col">
        //                 <label htmlFor="nara">Nara:</label>
        //                 <input type="text" id="nara" name="nara" className="form-control" />
        //             </div>
        //             <div className="col">
        //                 <label htmlFor="packaging">Packaging:</label>
        //                 <input type="text" id="packaging" name="packaging" className="form-control" />
        //             </div>

        //             <button type="submit" className="btn btn-primary">Submit</button>
        //         </form>
        //         </div>
        //     </div>
        //     </div>
        // </section>
//     );
// }