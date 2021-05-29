# Locutio

An approach to Ports and Adapters clean architecture from the frameworkless client application perspective

#### Features
 - Project files organization corresponding to the core, application and external communications idea.
 - DOM and Events as external communications.
 - Business logic represents a microblogging application.
 
All is written on plain vanilla JavaScript.
Bundled and served with SnowPack

> npm i && npm run start

-----

## Architecture

- Domain
- Infra
- Services
  
The main idea is to hace our core business logic ignorant of the external world, then some kid of adapters will use the dependency inversion principle, however the current version of ECMAScript doesn't have Interfaces* so we'll use the instances and classes.

![architecture graphic](./img/browser_ddd_graph.svg)

So let's think about the user flows:
A user inserts texts in the textarea element and presses the button this will submit the form.
The submit event of the form is listened by the app and bound to the message controller.
The message controller has a service instance so it will trigger the service method translated from the DOM event (eg: Message was sent -> create message instance) and finally with the repo a new instance is created and therefore stored.


> *We could use factory patterns to simulate the interfaces