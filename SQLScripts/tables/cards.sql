-- public.cards definition

-- Drop table

-- DROP TABLE public.cards;

CREATE TABLE public.cards (
	card_id serial4 NOT NULL,
	user_id int4 NOT NULL,
	word text NOT NULL,
	definition text NOT NULL,
	bin_word_level int2 NOT NULL DEFAULT 0,
	bin_word_date_added timestamp NOT NULL DEFAULT now(),
	word_wrong_count int2 NOT NULL DEFAULT 0,
	CONSTRAINT cards_pk PRIMARY KEY (card_id),
	CONSTRAINT cards_un UNIQUE (word, user_id),
	CONSTRAINT cards_fk FOREIGN KEY (user_id) REFERENCES public.users(user_id)
);