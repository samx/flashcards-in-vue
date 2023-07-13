-- public.bins definition

-- Drop table

-- DROP TABLE public.bins;

CREATE TABLE public.bins (
	bin_id serial4 NOT NULL,
	bin_level int2 NOT NULL,
	CONSTRAINT bins_pk PRIMARY KEY (bin_id)
);