import type { Typology } from "../../../models/pokemon";
import "./option-table-details.css";
interface optionTableProps {
  nameProperty: string;
  values: Typology[];
}

function OptionTableDetails({ nameProperty, values }: optionTableProps) {
  return (
    <table className="table rounded-xl border-4">
      <thead>
        <tr>
          <th>{nameProperty}</th>
        </tr>
      </thead>
      <tbody>
        {values && values.length > 0 ? (
          values.map((value, index) => (
            <tr key={index}>
              <td>{value.name} </td>
            </tr>
          ))
        ) : (
          <tr>
            <td>Nessun eleemnto disponibile </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
export default OptionTableDetails;
