import { getPrograms } from "@/app/lib/actions/program";
import Link from "next/link";

export default async function Client({ params }: any) {
    const { slug } = params;
    const client = await getPrograms(slug);
    const programs = client?.programs || [];

    return (
      <div className="container mx-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200">
                {client.name}
              </th>
            </tr>
          </thead>
          <tbody>
            {programs &&
              programs.map((program) => (
                <tr key={program._id}>
                  <td className="py-2 px-4 border-b border-gray-200">
                    <Link
                      href={`/program/${
                        client.slug
                      }/${program._id.toString()}`}
                    >
                      {program.lotNo}
                    </Link>
                    {program.name}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
};
