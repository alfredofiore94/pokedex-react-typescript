import "./option-box-details.css";
interface optionBoxProps {
  nameProperty: string;
  value: string;
}

function OptionBoxDetails({ nameProperty, value }: optionBoxProps) {
  return (
    <div className="peso grid grid-cols-2 gap-2 rounded-xl border-4 ">
      <h3 className="text-right">{nameProperty}:</h3>
      <h3 className="text-left">{value}</h3>
    </div>
  );
}

export default OptionBoxDetails;
