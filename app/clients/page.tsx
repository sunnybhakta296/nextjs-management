import React from "react";
import { getClients } from "../lib/actions/expense";
import Link from "next/link";

export default async function client() {
  const clients = await getClients();
  return (
    <div className="container mx-auto">
      <div className="flex justify-end mb-4 mt-10">
        <Link href="/payments" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Payments
        </Link>
        <Link href="/programs" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
            Program
        </Link>
        <Link href="/challan" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
            Create Challan

        </Link>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200">Name</th>
            <th className="py-2 px-4 border-b border-gray-200">Program</th>
            <th className="py-2 px-4 border-b border-gray-200">Challan</th>
            <th className="py-2 px-4 border-b border-gray-200">Payment</th>
          </tr>

        </thead>
        <tbody>
          {clients &&
            clients.map((client) => (
              <tr key={client.slug}>
                <td className="py-2 px-4 border-b border-gray-200">
                  {client.name}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <Link href={`/program/${client.slug}`}>View</Link>&nbsp;&nbsp;
                  {/* <Link href={`/program`}>Create</Link> */}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <Link href={`/challan/${client.slug}`}>View</Link> &nbsp;&nbsp;
                  {/* <Link href={`/challan`}>Create</Link> */}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <Link href={`/payments/${client.slug}`}>view</Link> &nbsp;&nbsp;
                  {/* <Link href={`/payments`}>Create</Link> */}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
