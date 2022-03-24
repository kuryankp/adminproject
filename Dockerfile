FROM nginx
WORKDIR /bin
#RUN rm /etc/nginx/conf.d/default.conf
RUN rm /etc/nginx/nginx.conf
COPY ./.htpasswd /etc/nginx/.htpasswd
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./start.sh ./start.sh
RUN chmod +x /bin/start.sh
CMD ["start.sh"]
