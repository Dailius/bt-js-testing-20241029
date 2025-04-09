
[QA road map](https://roadmap.sh/qa)

## I. Repeat
## II. Docker exercise

Sukurti 3 konteinerius, vienu metu visus paleisti, patikrinti per CLI ir naršyklę, sustabdyti visus aktyvius konteinerius.

    1as konteineris:
    Image: nginx:latest
    Name: nginx_first
    Port: 8091:80

    2as konteineris:
    Image: nginx:1.25.2-alpine
    Name: nginx_second
    Port: 8092:80

    3as konteineris:
    Image: nginx:1.25.4-alpine
    Name: nginx_third
    1st port: 8093:80
    2nd port: 3333:80


## III. Manage multiple containers
```powershell
# List active containers id: 
    docker ps -q

# List all containers id: 
    docker ps -aq
```

```powershell
# Stop active containers by ID
docker stop $(docker ps -q)

# Filter containers by parameters:
docker ps -a --filter "ancestor=nginx"
docker ps -a --filter "name=my"

# Filter same containers by parameters and display id only:
docker ps -aq --filter "ancestor=nginx"
docker ps -aq --filter "name=my"

# Run all container that have image nginx:
docker start $(docker ps -aq --filter "ancestor=nginx")

# Delete all active containers:
docker rm -f $(docker ps -q)
```

## III. Navigate inside container

```powershell

```

## IV. Dockerfile and docker compose


```powershell

```

```powershell

```

```powershell

```

```powershell

```