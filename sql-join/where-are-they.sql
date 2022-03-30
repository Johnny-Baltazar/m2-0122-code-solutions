select "addresses"."line1",
       "cities"."name" as "cityName",
       "addresses"."district",
       "countries"."name" as "country"
  from "addresses"
  join "cities" using ("cityId")
  join "countries" using ("countryId")
