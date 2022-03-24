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

create table if not exists "Sensor"
(
    id       serial
        constraint sensor_pk
            primary key,
    name     varchar(255) not null,
    datatype varchar(255) not null,
    comment  varchar(255)
);

alter table "Sensor"
    owner to kuryandb;

create unique index if not exists sensor_id_uindex
    on "Sensor" (id);

create table if not exists "Place"
(
    id      serial
        constraint place_pk
            primary key,
    name    varchar(255) not null,
    comment varchar(255)
);

alter table "Place"
    owner to kuryandb;

create unique index if not exists place_id_uindex
    on "Place" (id);

create table if not exists "SM_Cross"
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
            references "Sensor"
            on delete cascade
);

alter table "SM_Cross"
    owner to kuryandb;

create unique index if not exists sm_cross_id_uindex
    on "SM_Cross" (id);

create table if not exists "SMC_P_Cross"
(
    id            serial
        constraint smc_p_cross_pk
            primary key,
    smc_id        integer not null
        constraint smc_p_cross_sm_cross_id_fk
            references "SM_Cross"
            on delete cascade,
    place_id      integer not null
        constraint smc_p_cross_place_id_fk
            references "Place"
            on delete cascade,
    startdatetime timestamp,
    stopdatetime  timestamp,
    enabled       boolean
);

alter table "SMC_P_Cross"
    owner to kuryandb;

create unique index if not exists smc_p_cross_id_uindex
    on "SMC_P_Cross" (id);

create table if not exists sdata
(
    id       serial
        constraint sdata_pk
            primary key,
    smcpc_id integer                             not null
        constraint sdata_smc_p_cross_id_fk
            references "SMC_P_Cross",
    datetime timestamp default CURRENT_TIMESTAMP not null,
    value    real                                not null
);

alter table sdata
    owner to kuryandb;

create unique index if not exists sdata_id_uindex
    on sdata (id);

