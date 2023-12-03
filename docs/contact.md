# Contact API Spec

## Create Coantact API

Endpoint : POST /api/contacts

Headers :
- Authorization : token

Request Body :

```json
{
    "fisrt_name" : "Wahyu",
    "last_name" : "Suteja",
    "email" : "wahyusuteja688@gmail.com",
    "phone" : "08996571571"
}
```

Response Body Success :

```json
{
    "data" : {
    "id" : 1,
    "fisrt_name" : "Wahyu",
    "last_name" : "Suteja",
    "email" : "wahyusuteja688@gmail.com",
    "phone" : "08996571571"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Email is not valid format"
}```

## Update Contact API

Endpoint : PUT /api/contacts/:id

Headers :
- Authorization : token

Request Body :

```json
{
    "fisrt_name" : "Wahyu",
    "last_name" : "Suteja",
    "email" : "wahyusuteja688@gmail.com",
    "phone" : "08996571571"
}
```

Response Body Success :

```json
{
    "data" : {
    "id" : 1,
    "fisrt_name" : "Wahyu",
    "last_name" : "Suteja",
    "email" : "wahyusuteja688@gmail.com",
    "phone" : "08996571571"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Email is not valid format"
}
```

## Get Contact API

Endpoint : GET /api/contacts/:id

Headers :
- Authorization : token

Response Body Success :

```json
{
    "data" : {
    "id" : 1,
    "fisrt_name" : "Wahyu",
    "last_name" : "Suteja",
    "email" : "wahyusuteja688@gmail.com",
    "phone" : "08996571571"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Contact is not found"
}
```

## Search Contact API

Endpoint : GET /api/contacts

Headers :
- Authorization : token

Query params :
- name : Search by first_name or last_name, using like, optional
- email : Search by email using like, optional
- phone : Search by phone like, optional
- page : number of page, dafault 1
- size : size per page, dafault 10

Response Body Success :

```json
{
    "data" : [
        {
    "id" : 1,
    "fisrt_name" : "Wahyu",
    "last_name" : "Suteja",
    "email" : "wahyusuteja688@gmail.com",
    "phone" : "08996571571"
    },
    {
    "id" : 2,
    "fisrt_name" : "Wahyu",
    "last_name" : "Suteja",
    "email" : "wahyusuteja688@gmail.com",
    "phone" : "08996571571"
    }
    ],
    "paging" : {
        "page" : 1,
        "total_page" : 3,
        "total_item" : 30
    }
}
```

Response Body Error :

## Remove Contact API

Endpoint : DELETE /api/contacts

Headers :
- Authorization : token

Response Body Success :

```json
{
    "data" : "OK"
}
```

Response Body Error :

```json
{
    "errors" : "Contact is not found"
}
```