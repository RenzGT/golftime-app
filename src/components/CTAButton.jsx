import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const CTAButton = ({ label, toLink }) => {
  return (
    <Button className="text-center bg-slate-950 hover:bg-slate-950/90 capitalize text-xs rounded-none drop-shadow-lg">
      <Link to={toLink}>{label}</Link>
    </Button>
  );
};
