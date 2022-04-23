import { any } from "joi";
import Property from "../../../models/Property.model";

export default async function getCities() {
   const cities = await Property.findAll({
      attributes: ["city"],
      group: ["city"],
   });
   
   const citiesArray = cities.map((city) => {
      return city.get();
   });

   const city = citiesArray.map((city) => {
      const re = /(\b[a-z](?!\s))/g;
      return {value: city.city, label: city.city.replace(re, function(x: any){return x.toUpperCase();})};
   });
   
   return city;
}