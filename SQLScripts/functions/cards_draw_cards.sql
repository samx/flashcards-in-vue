DROP FUNCTION cards_draw_cards(integer);
CREATE OR REPLACE FUNCTION public.cards_draw_cards(in_user_id integer)
 RETURNS TABLE(card_id integer, word text, definition text, bin_level smallint, word_wrong_count smallint, word_hard_to_remember boolean, bin_id smallInt)
 LANGUAGE plpgsql
AS $function$

BEGIN
    RETURN QUERY
	select cards.card_id, cards.word, cards.definition, bins.bin_level, cards.word_wrong_count, cards.word_hard_to_remember, cards.bin_id 
	FROM cards
	left join bins
	on (bins.bin_id = cards.bin_id)
	WHERE cards.word_hard_to_remember = false -- do not show hard words
		and cards.user_id = in_user_id 
		and now() > cards.bin_word_date_next_display
		and bins.bin_level < 11 -- do not show never words
	ORDER BY cards.bin_id desc;
	END;
$function$
;
