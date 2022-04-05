select "genres"."name" as "genre",
      count(*) as "Appearing Lisa Monroe"
  from "castMembers"
  join "actors" using ("actorId")
  join "filmGenre" using ("filmId")
  join "genres" using ("genreId")
  where "firstName" = 'Lisa'
   and "lastName" = 'Monroe'
  group by "genres"."name";
