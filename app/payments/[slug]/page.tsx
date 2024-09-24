import { OUT } from "@/app/constant";
import { getClientBySlug } from "@/app/lib/actions/clients";

export default async function ListPayment({ params }: { slug: string }) {
  const { slug } = params;
  const clientBySlug = await getClientBySlug(slug);
  const payments = clientBySlug?.payments || [];
  const formatDate = (date: string) => {
    return new Date(date).toJSON().slice(0, 10).split("-").reverse().join("-");
  };

  return (
    <div className="container mx-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200">Challan No</th>
            <th className="py-2 px-4 border-b border-gray-200">Amount</th>
            <th className="py-2 px-4 border-b border-gray-200">Type</th>
            <th className="py-2 px-4 border-b border-gray-200">Date</th>
          </tr>
        </thead>
        <tbody>
          {payments &&
            payments.map((payment) => (
              <tr key={payment.challanNo}>
                <td className="py-2 px-4 border-b border-gray-200">
                  {payment.challanNo}
                </td>
                <td
                  className="py-2 px-4 border-b border-gray-200"
                  style={{ color: `${(payment.type == OUT) ? "red" : "green"}` }}
                >
                  {payment.amount.toFixed(2)}
                </td>

                <td className="py-2 px-4 border-b border-gray-200">
                  {payment.type}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {formatDate(payment.createdDate)}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
