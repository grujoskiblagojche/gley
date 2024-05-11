import Link from "next/link";
import { PriceModelCard } from "./priceModelTypes";

type Props = {
  priceModel: PriceModelCard;
};

export const PriceModel = ({ priceModel }: Props) => (
  <div className="flex flex-col flex-1 items-center rounded-xl bg-red-700 w-full max-w-[480px] min-h-[460px]">
    {priceModel.isOptimal && (
      <p className="text-red-50 text-2xl font-bold my-3">Optimal choice</p>
    )}
    <div className="flex flex-col items-center w-full flex-1 rounded-xl rounded-b-lg bg-gradient-to-tr from-kinemoe-900 to-kinemoe-950 gap-6">
      <div className="flex p-3 justify-center w-full h-14 rounded-t-xl bg-gradient-to-r from-green-950 to-green-700">
        <h4 className="text-kinemoe-50 text-2xl font-bold">
          {priceModel.title}
        </h4>
      </div>
      <h5 className="text-green-600 text-2xl font-bold">{priceModel.price}</h5>
      <ul className="flex  flex-col w-full grow mb-6 px-6 gap-4">
        {priceModel.features.map((feat, i) => (
          <li key={i} className="text-kinemoe-100 text-xl font-normal">
            {feat}
          </li>
        ))}
      </ul>
      <div className="flex w-full p-6">
        <Link
          href={"/"}
          className="text-green-50 hover:text-green-100 bg-green-600 hover:bg-green-700 shadow-lg active:shadow-md shadow-green-800 hover:shadow-green-900 active:scale-95 text-2xl font-bold rounded-2xl p-4 w-full outline-none text-center transition-all"
        >
          REGISTER
        </Link>
      </div>
    </div>
  </div>
);
