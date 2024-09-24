import { getChallan } from "@/app/lib/actions/challan";
import Link from "next/link";

export default async function ChallanList({params}: any) {
    const { slug } = params;
    const client = await getChallan(slug);
    const challans = client?.challans || [];

    return (
        <div className="container mx-auto">
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b border-gray-200">{client.name}</th>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b border-gray-200">Challan No</th>
                        <th className="py-2 px-4 border-b border-gray-200">Grand Total</th>
                        <th className="py-2 px-4 border-b border-gray-200">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {challans &&
                        challans.map((challan) => (
                            <tr key={challan._id}>
                                <td className="py-2 px-4 border-b border-gray-200">
                                    <Link href={`/challan/${client.slug}/${challan._id.toString()}`}>
                                        {challan.challanNo}
                                    </Link>
                                    {challan.name}
                                </td>
                                <td className="py-2 px-4 border-b border-gray-200">
                                    
                                    {challan.grandTotal}
                                </td>
                                <td className="py-2 px-4 border-b border-gray-200">
                                    
                                    {challan.challanDate.toString()} 
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}