select "payments"."amount" as "largestPayments",
       "customers"."firstName",
       "customers"."lastName"
  from "payments"
  join "customers" using ("customerId")
  order by "amount" desc
  limit 10
