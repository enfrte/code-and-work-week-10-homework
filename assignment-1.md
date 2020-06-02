# ASSIGNMENT 1 / Student database

Create a database called studentDB and add a collection to it named "students".

Insert some test data in the collection to see if it’s working (for example, {name: "Rene"}).

**Answer:**

Open terminal and type `mongo`

In the mongo terminal, you can check which dbs you have with 

    show dbs

Create a new db (Note, databases will only show up when a collection has been added)

    use studentDB

Create a mongodb collection with 

    db.createCollection("students")

Insert some data with 

    db.students.insert({name: "Rene"})

Execute a simple search with 

    db.students.find()
