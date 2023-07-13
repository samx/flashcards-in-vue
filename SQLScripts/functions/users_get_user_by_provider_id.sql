CREATE OR REPLACE FUNCTION public.users_get_user_by_provider_id(in_provider text, in_provider_id text)
 RETURNS SETOF users
 LANGUAGE plpgsql
AS $function$

BEGIN
     RETURN QUERY
         SELECT *
         FROM users 
         WHERE provider = in_provider and provider_id  = in_provider_id;
END;
$function$
;
