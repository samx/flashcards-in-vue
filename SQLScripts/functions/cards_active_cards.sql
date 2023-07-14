CREATE OR REPLACE FUNCTION public.cards_active_cards(in_user_id integer)
 RETURNS TABLE(card_id integer, bin_level smallint)
 LANGUAGE plpgsql
AS $function$

BEGIN
    RETURN QUERY
	select cards.card_id, bins.bin_level
	FROM cards
	left join bins
	on (bins.bin_id = cards.bin_id)
	WHERE 
		cards.word_hard_to_remember = false 
		and cards.user_id = in_user_id 
		and bins.bin_level < 11;
	END;
$function$
;
