-- public.users definition

-- Drop table

-- DROP TABLE public.users;

CREATE TABLE public.users (
	user_id serial4 NOT NULL,
	username text NOT NULL,
	provider_id text NOT NULL,
	provider text NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY (user_id)
);