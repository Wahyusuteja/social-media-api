# Address API Spec

## Create Address API

Endpoint : POST /api/contact/:contactId/address

Headers :
- Authorization : token

Request Body :

```json
{
    "street" : "jalan apa",
    "city" : "kota apa",
    "province" : "provinsi apa",
    "country" : "negara apa",
    "postal_code" : "kode pos"
}
```

Response Body Succes :

```json
{
    "data" : {
        "id" : 1,
    "street" : "jalan apa",
    "city" : "kota apa",
    "province" : "provinsi apa",
    "country" : "negara apa",
    "postal_code" : "kode pos"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Country is required"
}```


## Update Address API

Endpoint : PUT /api/contact/:contactId/addressId

Headers :
- Authorization : token

Request Body :

```json
{
    "street" : "jalan apa",
    "city" : "kota apa",
    "province" : "provinsi apa",
    "country" : "negara apa",
    "postal_code" : "kode pos"
}
```

Response Body Succes :

```json
{
    {
    "data" : {
        "id" : 1,
    "street" : "jalan apa",
    "city" : "kota apa",
    "province" : "provinsi apa",
    "country" : "negara apa",
    "postal_code" : "kode pos"
    }
}
}
```

Response Body Error :

```json
{
    "errors" : "Country is required"
}```

## Get Address API

Endpoint : GET /api/contacts/:contactId/address/:addresId

Headers :
- Authorization : token

Response Body Succes :

```json
{
    {
    "data" : {
        "id" : 1,
    "street" : "jalan apa",
    "city" : "kota apa",
    "province" : "provinsi apa",
    "country" : "negara apa",
    "postal_code" : "kode pos"
    }
}
}
```

Response Body Error :

```json
{
    "errors" : "Contact is not found"
}
```

## List Address API

Endpoint : GET /api/contact/:contactId/address

Headers :
- Authorization : token

Response Body Succes :

```json
{
    [
        {
    "data" : {
        "id" : 1,
    "street" : "jalan apa",
    "city" : "kota apa",
    "province" : "provinsi apa",
    "country" : "negara apa",
    "postal_code" : "kode pos"
    }
}
    ],
    [
        {
        "id" : 1,
    "street" : "jalan apa",
    "city" : "kota apa",
    "province" : "provinsi apa",
    "country" : "negara apa",
    "postal_code" : "kode pos"
    }

    ]
}
```

Response Body Error :

```json
{
    "errors" : "Contact is not found"
}
```

## Remove Address API

Endpoint : DELETE /api/contacts/:contactId/address/:addressId

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
    "errors" : "Address is not found"
}
```