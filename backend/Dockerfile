FROM microsoft/dotnet AS build-env
WORKDIR /app

# install System.Drawing native dependencies
RUN apt-get update \
    && apt-get install -y --allow-unauthenticated \
        libc6-dev \
        libgdiplus \
        libx11-dev \
     && rm -rf /var/lib/apt/lists/*

# Copy everything .dockerignore ignores the rest of the files
COPY . ./

# Restore files from the Api folder which affects all other folders
WORKDIR /app/Api
RUN dotnet restore

# Build production files
RUN dotnet publish -c Release -o out

#Revert back to the default directory
WORKDIR /app

# Build runtime image
FROM microsoft/dotnet:aspnetcore-runtime
WORKDIR /app
COPY --from=build-env /app/Api/out .

RUN mkdir Persistence/data/locations
COPY --from=build-env /app/Persistence/data/locations ./Persistence/data/locations

ENTRYPOINT [ "dotnet","Api.dll"  ]