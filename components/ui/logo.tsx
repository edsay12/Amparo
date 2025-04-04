import { Shield } from "lucide-react";

function Logo() {
  return (
    <div className="flex  items-center justify-center gap-2">
      <Shield className="text-violet-500 h-6 w-6" />
      <h1 className=" font-bold text-xl">Contra a Violência</h1>
    </div>
  );
}

export default Logo;
