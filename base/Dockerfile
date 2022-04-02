FROM postgres:13-alpine

RUN apk add git git-lfs
RUN git clone https://kuryankp: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@github.com/kuryankp/adminprojectdump.git /var/lib/postgresql/data/dump

RUN git config --global credential.helper store
RUN git config --global user.name "kuryankp"
RUN git config --global user.email "kuryankirill0511@mail.ru"

COPY ./dump.sh /bin/dump.sh
RUN chmod +x /bin/dump.sh

COPY ./revive.sh /bin/revive.sh
RUN chmod +x /bin/revive.sh

CMD ["postgres"]