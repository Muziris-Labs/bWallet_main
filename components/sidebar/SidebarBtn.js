import { Button } from "@material-tailwind/react";
import GradientIcon from "../ui/GradientIcon";

const SidebarBtn = ({ icon, label }) => {
  return (
    <Button className="flex items-center gap-1.5 px-3 py-1.5">
      <div className="rounded-lg bg-black p-1">
        <GradientIcon icon={icon} isHovered={true} />
      </div>

      <p className="text-xs">{label}</p>
    </Button>
  );
};

export default SidebarBtn;
