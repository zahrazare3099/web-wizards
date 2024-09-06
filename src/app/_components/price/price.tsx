import { Badge } from "../badge";
import { IconToman } from "../icons/icons";
import { PriceType } from "./price.types";
import { Size } from "../types/Size.type";

const sizeClasses: Record<Size, { textSize: string; svgSize: number }> = {
  tiny: { textSize: "text-base", svgSize: 16 },
  small: { textSize: "text-lg", svgSize: 18 },
  normal: { textSize: "text-xl", svgSize: 20 },
  large: { textSize: "text-2xl", svgSize: 22 },
};

const Price: React.FC<PriceType> = (props) => {
  const { size = "normal", text = "رایگان", price, className } = props;
  const svgSize = sizeClasses[size].svgSize;
  return (
    <>
      {price != null && price > 0 ? (
        <span
          className={`flex items-center gap-1 font-bold dark:text-white/90 ${sizeClasses[size].textSize} ${className}`}
        >
          {price.toLocaleString()}
          <IconToman
            strokeWidth={1}
            viewBox="0 0 16 16"
            width={svgSize}
            height={svgSize}
          />
        </span>
      ) : (
        <Badge variant="success" size="small">
          رایگان
        </Badge>
      )}
    </>
  );
};

export default Price;
