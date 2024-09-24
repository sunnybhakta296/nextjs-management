import { addProgram, getClients } from "@/app/lib/actions/expense";
import { Col, Form } from "react-bootstrap";

export default async function Client() {
  const clients = await getClients();

return (
    <section>
        <div className="container">
            <form
                action={addProgram}
                className="client-form"
                style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
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
                <div className="row">
                    <div className="col">
                        <label htmlFor="lotNo">Lot No:</label>
                        <input
                            type="text"
                            id="lotNo"
                            name="lotNo"
                            className="form-control"
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="measurement">Measurement:</label>
                        <input
                            type="text"
                            id="measurement"
                            name="measurement"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="info">Info:</label>
                        <textarea
                            id="info"
                            name="info"
                            className="form-control"
                        ></textarea>
                    </div>
                    <div className="col">
                        <label htmlFor="cutting">Cutting:</label>
                        <input
                            type="text"
                            id="cutting"
                            name="cutting"
                            className="form-control"
                        />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    </section>
);
}
