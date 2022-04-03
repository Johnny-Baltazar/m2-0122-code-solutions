select "countries"."name" as "country",
       count("cityId") as "cities"
  from "cities"
  join "countries" using ("countryId")
  group by "country";
