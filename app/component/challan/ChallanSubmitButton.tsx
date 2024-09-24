import { Button } from "react-bootstrap";
import { useFormStatus } from "react-dom";

export default function ChallnSubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button variant="primary" type="submit" disabled={pending}>
            {pending ? "Submitting...." : "Submit"}
        </Button>
    );
}