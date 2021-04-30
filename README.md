# vue-catalog

To run it:
````
yarn install && yarn serve
````

This project is an example of web-application architecture.

It's MODULE BASED and FRACTAL.

# MODULE 
- business-domain implementation. 
  Singleton.
  It uses application state (vuex) or server state (API requests) as a data source.
  
  If you decide to design entity as a module, you MUST be sure, that this entity WILL BE THE SAME in every place uses it.
  BE THE SAME means:
  - share its state across all application and all places (singleton)
  - changing its state in one place will change it in every other place (reference transfer)
  - it plays the same business role in every place (domain)
    
  If you're in doubt about at least one of those conditions, your entity IS NOT A MODULE. Design it as a COMPONENT, please.


# COMPONENT 
- a part of a module (or application level common components). 
  It can be used in many places and is reusable on its own level and deeper.
  It uses props or inject as a data source.


# FRACTAL
Every entity (MODULE or COMPONENT) on every level has the same structure:

````
EntityName (folder)
EntityName.vue (component) - front controller / main component / index
    components (folder) - components that reusable on this level only (and parts of EntityName.vue component)
    commons (folder) - common components that reusable on this or deeper level
    tests (folder) - all test files for this level parts
    utilities (folder) - all utility-libraries or functions for this level
````

This fractal is reproduced on every level in every MODULE or COMPONENT.
Every entity CONSIST of parts from the same level "components" folder and this or high level "commons" folder.  
They CANNOT use deeper or higher entities. They CANNOT use entities on the same level (except "components" and "utilities" folder).


# GLOBAL (application level) entities are:
- appComponents (common application components library, they can be uses in every part of application in every place)
- application store (vuex in this example, encapsulated in main.js in this example)
- API (server state representation, is absent in this example)


# MAIN PRINCIPLES are:
- Single Responsibility Principal
- Plug-In (you need make changes only in one place to replace, add and remove entity on every level in every place)

```
Please, PAY ATTENTION to understand the difference between MODULE and COMPONENT in comments in every entity of this application.
```