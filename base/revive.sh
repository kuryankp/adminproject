#!/bin/sh

git -C /var/lib/postgresql/data/dump/ pull
psql -f /var/lib/postgresql/data/dump/dump.sql postgres -U kuryandb