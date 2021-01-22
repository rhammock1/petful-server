# DSA Petful

### Thinkful DSA practice full stack project using Queues

### Documentation
All endpoints are open

#### URL: PRODUCTION URL GO HERE

#### Endpoints:

/api/pets
/api/people

#### GET /api/pets
Sample Response: 200 ok
```
{
    "topPets": {
        "cat": {
            "imageURL": "https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg",
            "imageDescription": "Orange bengal cat with black stripes lounging on concrete.",
            "name": "Kevin",
            "sex": "Male",
            "age": 2,
            "breed": "Bengal",
            "story": "The owner could not afford to keep them"
        },
        "dog": {
            "imageURL": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
            "imageDescription": "Golden retriever puppy sitting in field around autumn leaves",
            "name": "Polly",
            "sex": "Female",
            "age": 1,
            "breed": "Golden Retriver",
            "story": "Someone in the previous owner's family was allergic"
        }
    }
}
```

#### DELETE /api/pets
Sample Request: include type in request body.

Type should equal either cats, dogs, or both
```
{
  "type": "cats"
}
```

Sample Response: 200 ok

Response includes the next pets at the top of the queue and a message to display with the name of the person adopting and the animal being adopted.
```
{
    "topPets": {
        "cat": {
            "imageURL": "https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=590&h=800&7E4B4CAD-CAE1-4726-93D6A160C2B068B2",
            "imageDescription": "Tan Domestic Long Hair cat sticking his tongue out.",
            "name": "Jasmine",
            "sex": "female",
            "age": 3,
            "breed": "Domestic Long Hair",
            "story": "They got sick and the owner couldn't continue to care for them"
        },
        "dog": {
            "imageURL": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
            "imageDescription": "Golden retriever puppy sitting in field around autumn leaves",
            "name": "Polly",
            "sex": "Female",
            "age": 1,
            "breed": "Golden Retriver",
            "story": "Someone in the previous owner's family was allergic"
        }
    },
    "message": "Thank you, Merry Werry, for adopting Kevin, the cat!"
}
```

#### GET /api/people
Sample Response: 200 ok
```
{
    "person": "Jerry Terry"
}
```

###### POST /api/people
Sample Request: include name in request body

Name must only contain letters and spaces otherwise a 400 error will be returned

```
{
    "name": "Jerry Terry"
}
```

Sample Response 200 ok
```
{
    "person": "Bob Richards"
}
```