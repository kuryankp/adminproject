#!/bin/sh

rm /var/lib/postgresql/data/dump/dump.sql
pg_dumpall -U kuryandb > /var/lib/postgresql/data/dump/dump.sql
message=$(date)
git -C /var/lib/postgresql/data/dump add .
git -C /var/lib/postgresql/data/dump commit -m "$message"
git -C /var/lib/postgresql/data/dump push