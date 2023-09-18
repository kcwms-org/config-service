# config-service
A very simple key/value pair to store configuration data.
It exposes the following endpoints

1. GET | POST /setting
1. PUT | DELETE /setting/:settingId


They all returns 
```json
[
    {
        "key":"",
        "value":"",
        "environment":"",
        "created_date": "2023-09-12"

    }
]
```



# The Database
We are using [mongodb](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-community-with-docker/) hosted in [Docker](https://docs.docker.com/get-started/overview/) because I didn't want the hassle of setting up a local mongodb server.

1. [Install Docker](https://docs.docker.com/get-docker/)

1. Build an image by running this next to the Dockerfile
    ```shell
    $ docker build -t kcwms-mongodb . 
    ```
1. Create a docker volume to store and persists our database files outside of the container
    ```shell
    $ docker volume create mongodb-data
    ```
1. Run our container
    1. In the background ( -d )
    1. Delete the container when we stop it ( -rm )
    1. Store the database files a docker volume so each time the container is started, the data is saved ( -v )
    ```shell
    $ docker run --rm -d -v mongodb-data:/data/db -p 27017:27017 --name kcwms-mongodb-server kcwms-mongodb
    ```
1. View the running container
    ```shell
    $ docker ps
    ```
1. Stop the container
    ```shell
    $ docker container stop kcwms-mongodb-server
    ```
1. Restart the contaner
    ```Shell
    $ docker container start kcwms-mongodb-server
    ```

