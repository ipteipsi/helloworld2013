helloworld2013
==============

PSI 2012/2013 Hello World

#NODE.JS (NEEDED):
http://nodejs.org/

#RUNNING SERVER (NOT NEEDED):
1. npm install express nano
2. node main.js
 
#QUICK TESTING:
###INSERT A NEW DOCUMENT:
curl -i -X POST -H 'Content-Type: application/json' -d '{"name": "xpto", "bla": "bla"}' http://130.185.82.193:8080/nodes/1334
###GET ALL DOCUMENTS:
curl -i -X GET http://130.185.82.193:8080/nodes
###GET THE DOCUMENT WITH ID 1334:
curl -i -X GET http://130.185.82.193:8080/nodes/1334
