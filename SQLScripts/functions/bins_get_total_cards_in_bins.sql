CREATE OR REPLACE FUNCTION public.bins_get_total_cards_in_bins(in_user_id integer)
 RETURNS TABLE(total_cards_in_bins bigint, bin_level smallint, bin_id integer)
 LANGUAGE plpgsql
AS $function$

BEGIN
     RETURN QUERY
	SELECT COUNT(cards.bin_id) total_cards_in_bins, bins.bin_level, bins.bin_id
	FROM bins
	LEFT JOIN (select c.bin_id from cards c where c.user_id = in_user_id) cards
	ON bins.bin_id = cards.bin_id 
	GROUP BY bins.bin_level, bins.bin_id 
	ORDER BY bins.bin_level asc;
	END;
$function$
;
