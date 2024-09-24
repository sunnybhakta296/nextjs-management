import { getProgramById } from "@/app/lib/actions/program";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Client({ params }: any) {
  const { programId, slug } = params;
  const program = await getProgramById(programId);

  if (!program) {
    return notFound();
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <table className="table table-striped">
            <tbody>
              <tr>
                <th>Info</th>
                <td>{program.info}</td>
              </tr>
              <tr>
                <th>Loto No</th>
                <td>#{program.lotNo}</td>
              </tr>
              <tr>
                <th>Measurement</th>
                <td>{program.measurement}</td>
              </tr>
              <tr>
                <th>Cutting</th>
                <td>{program.cutting.total}</td>
              </tr>
              <tr>
                <th>Stiched</th>
                <td>{program.stiched.total}</td>
              </tr>
              <tr>
                <th>Thred Cutting</th>
                <td>{program.thredCutting.total}</td>
              </tr>
              <tr>
                <th>Press</th>
                <td>{program.press.total}</td>
              </tr>
              <tr>
                <th>Packaging</th>
                <td>{program.packaging.total}</td>
              </tr>
              <tr>
                <th>Nara</th>
                <td>{program.nara.total}</td>
              </tr>
            </tbody>
          </table>

          <Link
            href={`/program/${slug}/${programId}/edit`}
            className="btn btn-primary"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
}
