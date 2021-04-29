# vue-catalog


This project is an example of web-application architecture.

It's MODULE BASED and FRACTAL.

MODULE - business-domain implementation. Singleton. It uses application state (vuex) or server state (API requests) as a data source
COMPONENT - part of module (or application level common components). It can be used in many places and is reusable on its own level and deeper.

FRACTAL:
Every part (MODULE or COMPONENT) on every level has the same structure:

PartName (folder)
    PartName.vue (component) - front controller / main component / index
    components (folder) - reusable on this level common components (and parts of PartName.vue component)
    tests (folder) - all test files for this level parts
    utilities (folder) - all utility-libraries or functions for this level

This fractal is reproduced on every level in every MODULE or COMPONENT.
On one level entities can use other entities from the same or higher level. They CANNOT use deeper entities.


GLOBAL (application level) entities are:
- appComponents (common application components library, they can be uses in every part of application in every place)
- application store (vuex in this example, encapsulated in main.js in this example)
- API (server state representation, is absent in this example)


MAIN PRINCIPLES are:
- Single Responsibility Principal
- Plug-In (you need make changes only in one place to replace, add and remove entity on every level in every place)

Please, PAY ATTENTION to understand the difference between MODULE and COMPONENT in comments in every entity of this application.