#!/bin/bash

scp install.sh kuryan@192.168.120.128:/home/kuryan/install.sh
ssh kuryan@192.168.120.128 chmod +x /home/kuryan/install.sh
ssh kuryan@192.168.120.128 ./install.sh
scp off.sh kuryan@192.168.120.128:/home/kuryan/off.sh
ssh kuryan@192.168.120.128 chmod +x /home/kuryan/off.sh
scp revivedb.sh kuryan@192.168.120.128:/home/kuryan/revivedb.sh
ssh kuryan@192.168.120.128 chmod +x /home/kuryan/revivedb.sh
scp dump_crone.sh kuryan@192.168.120.128:/home/kuryan/dump_crone.sh
ssh kuryan@192.168.120.128 chmod +x /home/kuryan/dump_crone.sh
scp monitor.sh kuryan@192.168.120.128:/home/kuryan/monitor.sh
ssh kuryan@192.168.120.128 chmod +x /home/kuryan/monitor.sh
scp cron kuryan@192.168.120.128:/home/kuryan/cron
ssh kuryan@192.168.120.128 crontab -r
ssh kuryan@192.168.120.128 crontab /home/kuryan/cron
scp delete.sh kuryan@192.168.120.128:/home/kuryan/delete.sh
ssh kuryan@192.168.120.128 chmod +x /home/kuryan/delete.sh

ssh kuryan@192.168.120.128 docker pull kuryankp/adminprojectfrontend:v0.0.2
ssh kuryan@192.168.120.128 docker pull kuryankp/adminprojectbackend:v0.0.1
ssh kuryan@192.168.120.128 docker pull kuryankp/adminprojectdatabase:v0.0.1
scp docker-compose.yml kuryan@192.168.120.128:/home/kuryan/docker-compose.yml
ssh kuryan@192.168.120.128 docker-compose up -d
