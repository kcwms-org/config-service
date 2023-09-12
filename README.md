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
We are using [mongodb](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-community-with-docker/) hosted in [Docker](https://docs.docker.com/get-started/overview/) because I didn't want the hassle of setting up a local mongodb instance.

1. [Install Docker](https://docs.docker.com/get-docker/)

1. Create a mongodb container
    ```shell
    $ docker pull mongodb/mongodb-community-server
    ```
    ```shell
    $ docker run --name mongo -d mongodb/mongodb-community-server:latest    
    ```
1. View the running container
    ```shell
    $ docker ps
    ```
1. Stop the container
    ```shell
    $ docker container stop mongo
    ```
1. Restart the contaner
    ```Shell
    $ docker container start mongo
    ```

