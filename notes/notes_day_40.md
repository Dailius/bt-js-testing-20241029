
[QA road map](https://roadmap.sh/qa)

## I. Sweetshop project continuation Sprint with Jira

## II. Docker

Virtual container - simple way to setup.
Image - template of some programming tool/app/server. Later on we build this image into container.
All applications communicate by ports.
Docker container has internal and external port.

Download image and list all local images:
```
    docker pull nginx
    docker images
``` 

CREATE container:
```
    docker run nginx
    docker run -d nginx
    docker run -d -p 8050:80 nginx
    docker run -d -p 8051:80 -p 8052:80 nginx
    docker run --name my_cnt_nginx -d -p 8053:80 nginx
```

STOP and START container:
```
    docker start <container_id or container-name>
    docker stop <container_id or container-name>
```

GET list of running containers:
```
    docker ps
    <!-- or -->
    docker container ls
```

GET list of all containers:
```
    docker ps -a
    <!-- or -->
    docker container ls -a
```

DELETE container:
```
    docker rm <container_id or container-name>
    docker rm -f <container_id or container-name>
```

localhost ip address 127.0.0.1
open browser with 127.0.0.1:8050 or localhost:8050

Docker volumes:
```
    docker run --name my_web -v <source dir>:<dest dir> -d -p 8050:80 nginx
    docker run --name my_web -v .:/usr/share/nginx/html:ro -d -p 8050:80 nginx
```
