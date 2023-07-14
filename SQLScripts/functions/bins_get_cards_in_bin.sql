CREATE OR REPLACE FUNCTION public.bins_get_cards_in_bin(in_user_id integer, in_bin_id integer)
 RETURNS TABLE(word text, definition text, bin_id smallint, word_wrong_count smallint, bin_word_date_next_display timestamp with time zone)
 LANGUAGE plpgsql
AS $function$

BEGIN
     RETURN QUERY
	SELECT cards.word, cards.definition, cards.bin_id, cards.word_wrong_count, cards.bin_word_date_next_display  
	FROM cards
	WHERE cards.user_id = in_user_id and cards.bin_id = in_bin_id
	ORDER BY cards.bin_word_date_next_display asc;
	END;
$function$
;
