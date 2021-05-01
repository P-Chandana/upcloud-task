# upcloud-task

### Run Your Teminal
* Clone this repository

```
git clone https://github.com/P-Chandana/upcloud-task.git
```

```
npm install
```

* Run Your Server
```
node app.js
```

* Test this API using POSTMAN


```
http://localhost:8880/create

to create new user

{
    "name" : "your name"
    "image":"image string url"
    "conNumber":"your number"
    "email":"your email"
    "address":"your address"
}

```

```
http://localhost:8880/update/:id 

to update user details 

{
    "name" : "your name"
    "image":"image string url"
    "conNumber":"your number"
    "email":"your email"
    "address":"your address"
}
```

```
http://localhost:8880/get

to get all the users
```

```
http://localhost:8880/remove/:id

to delete user
```


## API ENDPOINTS

|HTTP   |Routes   |
|---|---|
|GET   | /get  |   
|POST   | /create  |
|PATCH  | /update/:id   |
|DELETE |  /remove/:id  |
