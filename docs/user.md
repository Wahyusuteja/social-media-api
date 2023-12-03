# User API

## Register User API

Endpoint POST /api/users

Request Body :

```json
{
    "username" : "ways",
    "password" : "rahasia",
    "name" : "Wahyu suteja"

}
```

Response Body Succes :

```json
{
    "data" : {
        "user name" : "ways"
        "name" : "wahyu suteja"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Username already registered"
}
```

## Login User API

Endpoint : Post /api/user/login

Request Body :

```json
{
    "username" : "ways"
    "password" : "yrahasia"
}
```

Response Body Success :

```json
{
    "data" : {
        "token" : "unique-token"
    }
}
```

Response Body Error :
```json
{
    "errors" : "username or password wrong"
}
```

## Update User API

Endpoint : PATCH /api/users/current

Headers :
- Authorization : token

Request Body :

```json
{
    "name" : "Wahyu Suteja" //optional
    "password" : "new password" //optional
}
```

Request Body Success :


```json
{
   "data" : {
    "username" : "Ways"
    "name" : "Wahyu Suteja Lagi"
   } 
}
```

Response Body Error :

```json
{
    "errors" : "name length max 100"
}```

## Get User API

Endpoint : GET /api/current

Headers :
- Authorization : token

Response Body Succes :

```json
{
    "data" : {
        "username" : "ways"
        "name" : "Wahyu Suteja"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Unauthorized"
}
```

## Logout User API

Endpoint : DELETE /api/user/logout

Headers :
- Authorization : token

Response Body Succes :

```json
{
    "data" : "OK"
}
```

Response Body Error :

```json
{
    "errors" : "Unauthorized"
}
```