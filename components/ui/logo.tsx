import { Shield } from "lucide-react";
import logo from "../../app/assets/logo.png";
import Image from "next/image";
function Logo() {
  return (
    <div className="flex  items-center justify-center gap-2">
      <Image className="" width={100} height={100} src={logo} alt="Amparo" />
    </div>
  );
}

export default Logo;
