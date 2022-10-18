FROM python:3.10.7-slim-buster


WORKDIR /api
COPY requirements.txt /tmp/requirements.txt
RUN apt-get update
RUN apt-get install -y python3-mysqldb
RUN pip install --no-cache-dir -r /tmp/requirements.txt

COPY . .

CMD [ "python3", "-m" , "api.app"]
