import ReactCountryFlag from "react-country-flag";
import { Country } from "../country/country";

type Props = {
    country: Country;
    priceRange: string;
    cbdRange: string;
    thcRange: string;
};
  
export default function ProductDetails({ country, priceRange, cbdRange, thcRange }: Props) {
    return (
      <>
        <div className="flex justify-between items-center mt-2">
          <span className="text-gray-600 flex items-center">
            <ReactCountryFlag countryCode={country.code} svg className="mr-2 rounded-full w-4 h-4" />
            {country.name}
          </span>
          <span className="text-lg text-gray-600">
            {priceRange}
          </span>
        </div>
        <div className="flex justify-between items-center mt-1">
          <span className="text-gray-600">CBD {cbdRange}</span>
          <span className="text-gray-600">THC {thcRange}</span>
        </div>
      </>
    );
}