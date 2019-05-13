# Introduction

This is the Asp.net core version using clean architecture. This structure was fully inspired by [Robert_C._Martin (Aka Uncle Bob)](https://en.wikipedia.org/wiki/Robert_C._Martin) and [JasonGT](https://www.youtube.com/watch?v=Zygw4UAxCdg&t=1301s) and the source code is on [GitHub](https://github.com/JasonGT/NorthwindTraders).


Each Folder contains a ReadMe.md where applicable (because some folder are auto generated thus deleting the ReadMe.md) to explain the purpose of that folder.

As such please feel free to ask me any question where you find confusing.

## Project Structure

As seen already, this consists of the frontend, backend and Nginx (which is still in testing phase). Any framewark can be used for the frontend and backend. In this project, .net core webapi is used for the backend to focus on handling api request while react is used for interfacing with the user.

## Getting Started

Follow these instructions to get the project up and running either for just vewing or for development

### Prerequisites

For Development, the following tools are required:

* [Docker CE](https://docs.docker.com/install/). The installation guide for the preferred OS is found on the left sidebar. You will need to create a dockerhub account so be prepared.

    Once you have downloaded and installed docker on your machine (hopefully), run in your terminal for Mac/Linux or CMD/Powershell for Windows to login to dockerhub with the credentials used to create the docker hub account. This will be done only once. For Mac or Linux user, you may be required to run by add ```sudo``` before the command.

    ```
    docker login
    ```
    This will enable you download the neccesary files for running the app on your local machine.

* [Visual Studio Code](https://code.visualstudio.com/) or your preferred IDE.
* [.NET Core SDK 2.2](https://www.microsoft.com/net/download/dotnet-core/2.2).
* [Nodejs](https://nodejs.org/en/) LTS version please.
* SQL Server for the Database (Default). This is required and is neccesary for migrations. 


### Setup

Follow these steps to get your environment set up. For Mac or Linux user, you may be required to add `sudo` before the command.

  1. Clone or download the repository
  2. Open ther terminal at the root directory of the download folder and start docker: (note: It will take long time for the very first time).
     Before typing in the following command, there are four docker-compose commands. docker-compose.dev.yml, docker-compose.local_prod.yml, docker-compose.staging.yml and docker-compose.yml. docker-compose.staging.yml and docker-compose.yml are only used for staging and production respectively and should be ignored for production. 

     docker-compose.dev.yml uses MS SQL database and uses the local docker build while docker-compose.local_prod.yml uses SQlite database and uses the dockerhub containers. Migrations should be made via the docker-compose.dev.yml and copied from the container since it will contain the most recent MS SQL migrations.

     So you can either use for local container build
     ```
     docker-compose -f docker-compose.dev.yml up --build
     ```

     or you can use the dockerhub build images
     ```
     docker-compose -f docker-compose.local_prod.yml up --build
     ```


Go to `http://localhost:4000` on your browser. If a react app shows, you are good to go else kindly contact [Perez247](https://github.com/perez247) detailing your issue.

3. This is the most important part. kindly press Ctrl+c or CMD+c to end the application and `docker-compose -f <name of docker-compose file>.yml down` to clean up. Ensure this is done everytime an application is down.

### For Development

Three (3) addresses are avaliable in development mode:

*   Frontend which is `http://localhost:3000`.
*   Backend which is `http://localhost:5000`.
*   Nginx Which is `http://localhost:4000`.

Nginx connects directly to both the backend and the frontend. You can connect to the backend api via `localhost:5000/api` or `localhost:4000/api` but its is recommended to use `localhost:4000/api` and all react app api calls should follow this convention for development. Production should be set to `/api`.

To view all the api simple go to `localhost:5000/` and it will be shown thanks to Swagger.

Happy Coding...

Cheers Eco Team
