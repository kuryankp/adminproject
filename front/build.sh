#!/bin/bash

npm run build
docker build -t kuryankp/adminprojectfrontend:v0.0.2
docker push kuryankp/adminprojectfrontend:v0.0.2