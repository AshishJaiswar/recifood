import { Loader2 } from "lucide-react";

function loading() {
  return (
    <div className="flex justify-center">
      <Loader2 size={48} className="mr-2 mt-10 animate-spin" />
    </div>
  );
}

export default loading;
