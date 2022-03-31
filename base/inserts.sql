INSERT INTO public.mcu (name, mac_address, comment) VALUES ('jblgo3', '2A:31:14:5B:6D:87', 'FIRST ');
INSERT INTO public.mcu (name, mac_address, comment) VALUES ('jblgo4', '3A:2B:1E:55:4F:11', 'SECOND');
INSERT INTO public.mcu (name, mac_address, comment) VALUES ('ON2P1SC', '3A:2B:1E:55:4F:11', 'Сервер');

INSERT INTO public."sensor" (name, datatype, comment) VALUES ('sensor1', 'temperature', 'temperature sensor');
INSERT INTO public."sensor" (name, datatype, comment) VALUES ('sensor2', 'humidity', 'humidity sensor');
INSERT INTO public."sensor" (name, datatype, comment) VALUES ('sensor3', 'vibration', 'ok');
INSERT INTO public."sensor" (name, datatype, comment) VALUES ('sensor4', 'illumination', 'gimme mana');
INSERT INTO public."sensor" (name, datatype, comment) VALUES ('tasks', 'count', 'Количество процессов');
INSERT INTO public."sensor" (name, datatype, comment) VALUES ('cpu0', '%_of_usage', 'Процессор 0');
INSERT INTO public."sensor" (name, datatype, comment) VALUES ('cpu1', '%_of_usage', 'Процессор 1');
INSERT INTO public."sensor" (name, datatype, comment) VALUES ('memory', 'MB usage', 'Память');

INSERT INTO public."place" (name, comment) VALUES ('lab', 'chemistry...');
INSERT INTO public."place" (name, comment) VALUES ('class', '34 machines');
INSERT INTO public."place" (name, comment) VALUES ('G412', 'Серверная');

INSERT INTO public."sm_cross" (mcu_id, sensor_id) VALUES (1, 1);
INSERT INTO public."sm_cross" (mcu_id, sensor_id) VALUES (1, 2);
INSERT INTO public."sm_cross" (mcu_id, sensor_id) VALUES (2, 3);
INSERT INTO public."sm_cross" (mcu_id, sensor_id) VALUES (2, 4);
INSERT INTO public."sm_cross" (mcu_id, sensor_id) VALUES (3, 5);
INSERT INTO public."sm_cross" (mcu_id, sensor_id) VALUES (3, 6);
INSERT INTO public."sm_cross" (mcu_id, sensor_id) VALUES (3, 7);
INSERT INTO public."sm_cross" (mcu_id, sensor_id) VALUES (3, 8);

INSERT INTO public."smc_p_cross" (smc_id, place_id, startdatetime, stopdatetime, enabled) VALUES (1, 1, '2009-04-01 12:15:08.000000', '2009-04-01 12:17:21.000000', false);
INSERT INTO public."smc_p_cross" (smc_id, place_id, startdatetime, stopdatetime, enabled) VALUES (2, 2, '2013-05-31 14:02:29.000000', '2013-05-31 14:00:41.000000', true);
INSERT INTO public."smc_p_cross" (smc_id, place_id, startdatetime, stopdatetime, enabled) VALUES (3, 1, '2015-06-03 08:17:18.000000', '2015-06-03 08:22:38.000000', false);
INSERT INTO public."smc_p_cross" (smc_id, place_id, startdatetime, stopdatetime, enabled) VALUES (4, 2, '2017-09-02 13:24:09.000000', '2017-09-02 13:21:19.000000', true);
INSERT INTO public."smc_p_cross" (smc_id, place_id, startdatetime, stopdatetime, enabled) VALUES (5, 3, '2014-09-03 12:24:48.000000', '2014-09-03 12:28:44.000000', true);
INSERT INTO public."smc_p_cross" (smc_id, place_id, startdatetime, stopdatetime, enabled) VALUES (6, 3, '2014-10-23 00:15:28.000000', '2014-10-23 00:14:48.000000', true);
INSERT INTO public."smc_p_cross" (smc_id, place_id, startdatetime, stopdatetime, enabled) VALUES (7, 3, '2015-11-24 01:16:29.000000', '2015-11-24 01:15:29.000000', true);
INSERT INTO public."smc_p_cross" (smc_id, place_id, startdatetime, stopdatetime, enabled) VALUES (8, 3, '2019-03-27 11:22:33.000000', '2019-03-27 11:22:34.000000', true);

INSERT INTO public.sdata (smcpc_id, datetime, value) VALUES (1, '2004-04-04 04:04:44.000000', 44);
INSERT INTO public.sdata (smcpc_id, datetime, value) VALUES (2, '2012-02-12 12:02:12.000000', 12.02);
INSERT INTO public.sdata (smcpc_id, datetime, value) VALUES (3, '2011-04-29 02:33:23.000000', 32.2);
INSERT INTO public.sdata (smcpc_id, datetime, value) VALUES (4, '2013-06-02 15:02:34.000000', 26);
INSERT INTO public.sdata (smcpc_id, datetime, value) VALUES (4, '2014-03-02 00:00:00.000000', 28.3);
