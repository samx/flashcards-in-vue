CREATE OR REPLACE FUNCTION public.cards_update_bin_card(in_card_id integer, in_user_id integer, in_move_to_bin_id integer, in_interval_seconds integer, in_increment_wrong_count integer, in_word_hard_to_remember boolean)
 RETURNS void
 LANGUAGE plpgsql
AS $function$
begin
	
	EXECUTE
	$$ 
    UPDATE cards
    SET bin_word_date_next_display = NOW() + INTERVAL '$$ || in_interval_seconds || $$ seconds',
    bin_id = $$|| in_move_to_bin_id || $$,    
    word_wrong_count  = word_wrong_count + $$|| in_increment_wrong_count ||$$,
    word_hard_to_remember = $$ || in_word_hard_to_remember || $$
    WHERE card_id = $$|| in_card_id || $$ and user_id = $$|| in_user_id || $$ $$;
END;
$function$
;
