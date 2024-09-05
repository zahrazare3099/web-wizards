import { Badge } from "../badge";
import { PriceType } from "./price.types";

const Price: React.FC<PriceType> = (props) => {
  const { size = "normal", text = "رایگان", price, className } = props;
  return (
    <>
      {price != null && price > 0 ? (
        <p
          className={`flex items-center gap-1 font-bold dark:text-white/90 ${className}`}
        >
          {price.toLocaleString()} &nbsp; تومان
        </p>
      ) : (
        <Badge variant="success" size="small">
          رایگان
        </Badge>
      )}
    </>
  );
};

export default Price;
