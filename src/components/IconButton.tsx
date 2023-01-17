import { FC } from "react";

const IconButton: FC<{
  onClick: () => void;
  icon: string;
  alt: string;
}> = ({ onClick, icon, alt }) => {
  return (
    <button
      className="flex items-center justify-center p-2 bg-slate-200 rounded-lg"
      onClick={onClick}
    >
      <img src={icon} alt={alt} />
    </button>
  );
};

export default IconButton;
