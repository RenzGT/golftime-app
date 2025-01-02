import { Button } from "./ui/button";

export const TabButton = ({ label, onClick, active }) => {
  return (
    <Button
      variant="outline"
      className={`border-none rounded-none text-base m-1 ${active ? "bg-slate-100" : ""}`}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};
