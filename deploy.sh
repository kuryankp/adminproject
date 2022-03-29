#!/bin/bash

scp off.sh kuryan@192.168.120.128:/home/kuryan/off.sh
ssh kuryan@192.168.120.128 chmod +x /home/kuryan/off.sh
ssh kuryan@192.168.120.128 /home/kuryan/off.sh
ssh kuryan@192.168.120.128 docker-compose down
ssh kuryan@192.168.120.128 docker pull kuryankp/adminprojectfrontend:v0.0.2
ssh kuryan@192.168.120.128 docker pull kuryankp/adminprojectbackend:v0.0.1
ssh kuryan@192.168.120.128 docker pull kuryankp/adminprojectdatabase:v0.0.1
scp docker-compose.yml kuryan@192.168.120.128:/home/kuryan/docker-compose.yml
ssh kuryan@192.168.120.128 docker-compose up -d