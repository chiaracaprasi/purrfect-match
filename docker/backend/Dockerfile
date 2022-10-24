FROM python:3.10.7-slim-buster

WORKDIR /api
COPY requirements.txt /tmp/requirements.txt
COPY wait_for_it.sh /wait_for_it.sh
RUN apt-get update
RUN apt-get install -y python3-dev default-libmysqlclient-dev build-essential
RUN pip install --no-cache-dir -r /tmp/requirements.txt

RUN chmod +x /wait_for_it.sh

CMD [ "python3"]