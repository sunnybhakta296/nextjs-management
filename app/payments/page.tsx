import { getClients } from "../lib/actions/expense";
import PaymentForm from "../component/payment/PaymentForm";

export default async function Payment() {
  const clients = await getClients();
  return (
    <PaymentForm clients={clients} />
  )
}
