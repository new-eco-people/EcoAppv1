
## Persistence Layer

This layer is dependent on the Application layer only. It is responsible for presisting data to any database of choice.

This layer contains the following:

## Entity Configuration

Using Fluent Configuration to configure the Entities to be stored. It contains all the configurations needed.

## Extentions

Contains all the extension for implementing/Initializing Database (and Identity) and adding implementations of the interfaces presented by the Application layer.
The Database can be change to your desired one. Simply:

* Install the database service via Nuget Package
* Change the services.AddDbContext<DefaultDataContext> in Persistence/Extensions/DatabaseExtension line 15 to use the required Database. Check the documentation of that package or simply do a little research.
* Finally configure the right connection string in Web.Ui/appsettings.json line 3. This can also be reserached on.

## Repository

This contains all the concrete Implementations presented by the Application Layer.