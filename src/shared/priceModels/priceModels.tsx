import { PriceModel } from "./priceModel";
import { priceModelsMockData } from "./priceModelsMockData";

export const PriceModels = () => {
  const priceModels = priceModelsMockData();

  return (
    <section className="flex justify-center items-end gap-6">
      {priceModels.map((priceModel, i) => (
        <PriceModel key={i} priceModel={priceModel} />
      ))}
    </section>
  );
};
