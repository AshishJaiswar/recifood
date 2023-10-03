import { Filter } from "lucide-react";
function Filters() {
  return (
    <div className="py-2">
      <h3 className="flex items-center text-lg font-medium p-1 text-slate-800">
        <Filter size={18} strokeWidth={1.5} />{" "}
        <span className="ml-1">Filters</span>
      </h3>
    </div>
  );
}

export default Filters;
