FROM postgres:13-alpine

RUN apk add git
RUN git clone https://kuryankp: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@github.com/kuryankp/adminprojectdump.git /var/lib/postgresql/data/dump

RUN git config --global credential.helper store
RUN git config --global user.name "kuryankp"
RUN git config --global user.email "kuryankirill0511@mail.ru"

COPY ./dump.sh /bin/dump.sh
RUN chmod +x /bin/dump.sh

COPY ./revive.sh /bin/revive.sh
RUN chmod +x /bin/revive.sh

CMD ["postgres"]