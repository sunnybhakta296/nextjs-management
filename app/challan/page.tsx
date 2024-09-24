import ChallanForm from '@/app/component/challan/ChallanForm';
import { getClients } from '@/app/lib/actions/expense';

export default async function Challan() {
    const clients = await getClients();
    return <ChallanForm clients={clients} />
}