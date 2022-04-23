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
      return city.city;
   });
   
   return city;
}