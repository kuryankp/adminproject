FROM nginx:1.20.1-alpine

WORKDIR /bin

RUN apk add php7 php7-fpm php7-pgsql php7-common php7-session php7-iconv php7-json php7-gd php7-curl php7-xml php7-imap php7-cgi fcgi php7-pdo php7-soap php7-xmlrpc php7-posix php7-mcrypt php7-gettext php7-ldap php7-ctype php7-dom php7-simplexml php7-mbstring
RUN rm /etc/nginx/conf.d/default.conf
RUN rm /etc/nginx/nginx.conf
COPY ./build /usr/share/nginx/html
COPY nginx/files/info.php /usr/share/nginx/html
COPY nginx/conf/.htpasswd /etc/nginx/.htpasswd
COPY nginx/conf/kuryan.site.conf /etc/nginx/conf.d/default.conf
COPY nginx/conf/nginx.conf /etc/nginx/nginx.conf
RUN rm /etc/php7/php.ini
COPY ./php/php.ini /etc/php7/php.ini

COPY ./php/phpPgAdmin-7.13.0.tar.gz /usr/share/webapps/
RUN tar zxvf /usr/share/webapps/phpPgAdmin-7.13.0.tar.gz -C /usr/share/webapps/
RUN mv /usr/share/webapps/phpPgAdmin-7.13.0 /usr/share/webapps/phppgadmin
RUN cp /usr/share/webapps/phppgadmin/conf/config.inc.php-dist /usr/share/webapps/phppgadmin/conf/config.inc.php
RUN ln -s /usr/share/webapps/phppgadmin/ /usr/share/nginx/html/
RUN rm /usr/share/webapps/phppgadmin/conf/config.inc.php
COPY ./php/config.inc.php /usr/share/webapps/phppgadmin/conf/config.inc.php
RUN rm /usr/share/webapps/phpPgAdmin-7.13.0.tar.gz

COPY ./start.sh ./start.sh
RUN chmod +x /bin/start.sh

CMD ["start.sh"]