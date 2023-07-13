CREATE OR REPLACE FUNCTION public.users_create_user(in_username text, in_provider text, in_provider_id text, OUT new_user_id integer)
 RETURNS integer
 LANGUAGE plpgsql
AS $function$

BEGIN


	INSERT INTO users ( 
		username,
		provider,
		provider_id
	)
	VALUES (
		in_username,
		in_provider,
		in_provider_id
        )
	RETURNING user_id INTO new_user_id;
 END;
  $function$
;