FROM mysql:8.0.30

ADD ./scripts/schema.sql /docker-entrypoint-initdb.d/1.sql
ADD ./scripts/data.sql /docker-entrypoint-initdb.d/2.sql

CMD [ "mysqld"]