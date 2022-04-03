select "genres"."name" as "genre",
       count("filmId") as "Appearing Lisa Monroe"
  from "castMembers"
  join "filmGenre" using ("filmId")
  join "genres" using ("genreId")
  where "actorId" = 178
  group by "genres"."name";
