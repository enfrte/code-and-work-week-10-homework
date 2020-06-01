# ASSIGNMENT 1 / Student database

Create a database called studentDB and add a collection to it named "students".

Insert some test data in the collection to see if it’s working (for example, {name: "Rene"}).

Answer: 
Open terminal and type `mongo`. Then
```
show dbs
use studentDB
db.createCollection("students")
db.students.insert({name: "Rene"})
db.students.find()
```
Note, databases will only show up when a collection has been added. 