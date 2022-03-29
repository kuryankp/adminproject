create table if not exists mcu
(
    id          serial
        constraint mcu_pk
            primary key,
    name        varchar(255) not null,
    mac_address varchar(20)  not null,
    comment     varchar(255)
);

alter table mcu
    owner to kuryandb;

create unique index if not exists mcu_id_uindex
    on mcu (id);

create table if not exists "sensor"
(
    id       serial
        constraint sensor_pk
            primary key,
    name     varchar(255) not null,
    datatype varchar(255) not null,
    comment  varchar(255)
);

alter table "sensor"
    owner to kuryandb;

create unique index if not exists sensor_id_uindex
    on "sensor" (id);

create table if not exists "place"
(
    id      serial
        constraint place_pk
            primary key,
    name    varchar(255) not null,
    comment varchar(255)
);

alter table "place"
    owner to kuryandb;

create unique index if not exists place_id_uindex
    on "place" (id);

create table if not exists "sm_cross"
(
    id        serial
        constraint sm_cross_pk
            primary key,
    mcu_id    integer not null
        constraint sm_cross_mcu_id_fk
            references mcu
            on delete cascade,
    sensor_id integer not null
        constraint sm_cross_sensor_id_fk
            references "sensor"
            on delete cascade
);

alter table "sm_cross"
    owner to kuryandb;

create unique index if not exists sm_cross_id_uindex
    on "sm_cross" (id);

create table if not exists "smc_p_cross"
(
    id            serial
        constraint smc_p_cross_pk
            primary key,
    smc_id        integer not null
        constraint smc_p_cross_sm_cross_id_fk
            references "sm_cross"
            on delete cascade,
    place_id      integer not null
        constraint smc_p_cross_place_id_fk
            references "place"
            on delete cascade,
    startdatetime timestamp,
    stopdatetime  timestamp,
    enabled       boolean
);

alter table "smc_p_cross"
    owner to kuryandb;

create unique index if not exists smc_p_cross_id_uindex
    on "smc_p_cross" (id);

create table if not exists sdata
(
    id       serial
        constraint sdata_pk
            primary key,
    smcpc_id integer                             not null
        constraint sdata_smc_p_cross_id_fk
            references "smc_p_cross",
    datetime timestamp default CURRENT_TIMESTAMP not null,
    value    real                                not null
);

alter table sdata
    owner to kuryandb;

create unique index if not exists sdata_id_uindex
    on sdata (id);

