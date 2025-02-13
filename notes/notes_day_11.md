
## II. Test isolation and test scenarios

Test isolation:  
https://docs.cypress.io/app/core-concepts/test-isolation


```cmd
  npm init -y
  npm install express body-parser cors
```

Run nmp with by sripts:

add dev into package.json file of scripts object as follows: 

```javascrip
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "node index.js"
  },
```

In CMD terminal run command: nmp run dev

1. Register new user (Reigister)
2. Register and login (login)
3. Reigster and Get (get user details)
4. Get all users
   1. Positive 
5. Register, login and logout (logout)
   1. Positive
6. Register and delete user (delete)
   1. Positige with existing username
      1. Register new user
      2. Delete new user
      3. Get user details (expect user do not exits in the system)
   2. Negatvie with non-existing username
      1. Delete non-existing user




<br>



