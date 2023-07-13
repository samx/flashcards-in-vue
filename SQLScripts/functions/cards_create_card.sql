CREATE OR REPLACE FUNCTION public.cards_create_card(in_user_id integer, in_word text, in_definition text, OUT new_card_id integer)
 RETURNS integer
 LANGUAGE plpgsql
AS $function$

BEGIN


	INSERT INTO cards ( 
		word,
		definition,
		user_id 
	)
	VALUES (
		in_word,
		in_definition,
		in_user_id
        )
	RETURNING card_id INTO new_card_id;
 END;
  $function$
;
