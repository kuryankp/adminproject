#!/bin/bash

./off.sh

docker image rm $(docker image ls -q)
docker volume rm $(docker volume ls -q)

rm cron docker-compose.yml dump_crone.sh monitor.sh off.sh revivedb.sh install.sh
echo 228 | sudo -S snap remove docker
rm delete.sh
