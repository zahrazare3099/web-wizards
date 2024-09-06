import Image from "next/image";
import { FeatureProps } from "./feature.types";

const Feature: React.FC<FeatureProps> = (props) => {
  const { title, description, icon } = props;
  return (
    <article className="flex-1 flex flex-col items-center lg:items-start gap-4">
      <Image src={icon} width={52} height={52} alt={`feature-${icon}`} />
      <h4 className="text-lg font-bold ">{title}</h4>
      <p className="max-w-md text-lg text-center lg:text-right">
        {description}
      </p>
    </article>
  );
};

export default Feature;
