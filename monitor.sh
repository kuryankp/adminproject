#!/bin/bash

system_info=$(top 1 -ibn 1)
date_time=$(date '+%Y-%m-%d %H:%M:%S'.000000)

tasks=$(echo "$system_info" | grep Tasks | cut -d ' ' -f 2 | tr , .)
cpu0=$(echo "$system_info" | grep Cpu0 | cut -d ' ' -f 5 | tr y, .)
cpu1=$(echo "$system_info" | grep Cpu1 | cut -d ' ' -f 5 | tr , .)
memory=$(echo "$system_info" | grep "MiB Mem" | cut -d ' ' -f 16 | tr , .)

insert_tasks="INSERT INTO public.sdata (smcpc_id, datetime, value) VALUES (5, '$date_time', $tasks);"
insert_cpu0="INSERT INTO public.sdata (smcpc_id, datetime, value) VALUES (6, '$date_time', $cpu0);"
insert_cpu1="INSERT INTO public.sdata (smcpc_id, datetime, value) VALUES (7, '$date_time', $cpu1);"
insert_memory="INSERT INTO public.sdata (smcpc_id, datetime, value) VALUES (8, '$date_time', $memory);"

docker exec database psql -d datakkp -U kuryandb -c "$insert_tasks"
docker exec database psql -d datakkp -U kuryandb -c "$insert_cpu0"
docker exec database psql -d datakkp -U kuryandb -c "$insert_cpu1"
docker exec database psql -d datakkp -U kuryandb -c "$insert_memory"