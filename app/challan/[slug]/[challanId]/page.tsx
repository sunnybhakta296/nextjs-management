import ChallanDetail from "@/app/component/challan/ChallanDetail";
import { getChallanById } from "@/app/lib/actions/challan";

export default async function ChallanById({ params }) {
  const { challanId } = params;
  const challanById = await getChallanById(challanId);
  return <ChallanDetail challanById={JSON.stringify(challanById)} />;
}
