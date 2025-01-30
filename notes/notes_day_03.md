


## III. FE vs BE

Client and Server architecture
Client: desctop PC, notebook, tablet, mob.phone.

Interface: UI, API, CLI

## IV. System integrations


## V. REST API
CRUD - create, read, update, delete
HTTP protocol? Transfer text, video, audio.
Trasport layer: TCP/UDP
HTTP vs HTTPS

Reques/Responce messages:
1. Starting line
2. header
3. body

URL: https://demo.com/api/v1/resource

HTTP methods: GET, POST, PUT, DELETE, PATCH.    

HEADER (meta data):
    coocies, api-key, conectio ....

BODY:
    JSON data, XML...
```json
    {
        "userName": "some name",
        "password": "******"
    }
```    

HTTP response/status code: 100, 200, 300, 400, 500  
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

HTTP methods:  
https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods


 >### RESPONSE:  
 > Starting line:  
 >  response/status code:  
 > Header:  
 > Body:    

    URL: base url + endpoint 

    NEWS API:
        baseurl -> https://newsapi.org/
        endpoint -> /v2/everything

        https://newsapi.org/v2/everything
        https://newsapi.org/v2/top-headlines

    jsonplaceholder:
        baseurl -> https://jsonplaceholder.typicode.com
        endpint -> /users

        https://jsonplaceholder.typicode.com/users
        https://jsonplaceholder.typicode.com/todos

>### REQUEST:
>>https://jsonplaceholder.typicode.com/users  
>>GET
>
>>Header: empty
>
>>Body: REST requirements on GET method no JSON data

>### RESPONSE:  
>>Response code: 200  
> 
>> Header: some meta data, ex: application/jason; utf8  
>
>> Body: JSON data  

>### REQUEST:  
>>https://jsonplaceholder.typicode.com/users  
>>POST
>
>>Header: empty or some meta data 
> 
>>Body: JSON data mandatory  



## VI. Postman



