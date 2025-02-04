
## III. API Documentation (Swager)

https://www.post.lt/api-verslui  


## IV. REST request/response: headers, bodies, queries

https://petstore.swagger.io/#/pet/findPetsByStatus

    GET ALL PETS

    Base url:   https://petstore.swagger.io/v2/   
    Endpoint:   pet/findByStatus  
    
    Query (parameters): name is 'status', values is ['available','pending','sold']  
    EX: ?status=available

    https://petstore.swagger.io/v2/pet/findByStatus?status=available  
    https://petstore.swagger.io/v2/pet/findByStatus?status=available&parameter_name=some_value  

    GET PET BY ID

    Base url:   https://petstore.swagger.io/v2/   
    Endpoint:   pet/{pet_id} 


```json
    {
        "id": 9223372016900016781,
        "category": {
            "id": -4630181,
            "name": "nulla quis pariatur"
        }
    }
```

    https://petstore.swagger.io/v2/pet/9223372016900016781   

    https://newsapi.org/v2/top-headlines?apiKey=144e0c5c31324ea199b7e9cb410e96d0&country=us&category=sports

