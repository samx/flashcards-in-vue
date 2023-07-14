-- public.cards definition

-- Drop table

-- DROP TABLE public.cards;

CREATE TABLE public.cards (
	card_id serial4 NOT NULL,
	user_id int4 NOT NULL,
	word text NOT NULL,
	definition text NOT NULL,
	bin_id int2 NOT NULL DEFAULT 1,
	bin_word_date_next_display timestamp NULL DEFAULT now(),
	word_wrong_count int2 NOT NULL DEFAULT 0,
	word_hard_to_remember bool NOT NULL DEFAULT false,
	CONSTRAINT cards_pk PRIMARY KEY (card_id),
	CONSTRAINT cards_un UNIQUE (word, user_id),
	CONSTRAINT cards_bin_fk FOREIGN KEY (bin_id) REFERENCES public.bins(bin_id),
	CONSTRAINT cards_fk FOREIGN KEY (user_id) REFERENCES public.users(user_id)
);