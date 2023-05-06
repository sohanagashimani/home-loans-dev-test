import { BsArrowRightCircle } from "react-icons/bs";
import Border from "./Border";

export default function ProductCard({ product }) {
  const {
    name,
    comparisonRate,
    advertisedRate,
    gotoSiteUrl,
    companyLogo,
    pros,
  } = product;
  return (
    <div className="rounded-lg shadow-lg bg-white  text-black md:w-2/5 xl:w-1/4 flex flex-col justify-between">
      <div className="p-4 flex flex-col justify-between self-end flex-grow">
        <div className="flex flex-col justify-between h-[9rem]">
          <div>
            <h2 className="text-lg font-semibold">{name}</h2>
          </div>
          <div>
            <Border />
            <div className="flex justify-between mt-2">
              <div className="text-gray-600">
                Advertised rate: {advertisedRate}%
              </div>
              <div className="text-gray-600">
                Comparison rate: {comparisonRate}%
              </div>
            </div>
            <Border />
          </div>
        </div>
        <div className="mt-2 flex-grow flex flex-col">
          <h3 className="text-md font-semibold mb-2">Pros:</h3>
          <ul className="list-disc pl-2">
            {pros.map((pro) => (
              <li key={pro} className="list-none">
                <span className="mr-2 text-green-500 font-bold">&#x2713;</span>
                {pro}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="px-4">
          <Border />
        </div>
        <div className="p-4 flex justify-between items-center">
          <img src={companyLogo} className="mr-auto w-24" alt={name} />
          <div className="rounded-md  bg-green-500 p-1 px-2 text-white flex justify-between align-middle cursor-pointer">
            <a href={gotoSiteUrl} target="_blank">
              Go to site
            </a>
            <span className="mt-1 ml-2">
              <BsArrowRightCircle />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
