# Application Layer

Following the Clean architecture, this layer is only dependent on the Domain and oblivious to any other layer.

The folders in this here includes:

## Entities

This folder contains the Domain Entities (as Noun) and the respective actions (command or queries as the verb of the Noun) for properly handling the business logic. It uses Mediator to link the right Command to the Handler and also creates notification fpr other classes listening to be triggered (More found in JasonGt repo). 

## Exceptions

Contains all the Application exceptions.

## Infractructure

Contains all the codes for handling the business logic (e.g automapper, logging)

## Interfaces

For connecting to the Application as a service
