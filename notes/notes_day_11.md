
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

TS_01. Register new user (Reigister)
TS_02. Register and login (login)
TS_03. Reigster and Get (get user details)

TS_04. Get all users
   TC_4.1. Positive 

TS_05. Register, login and logout (logout)
   TC_5.1. Positive

TS_06. Register and delete user (delete)
   TC_6.1. Positige with existing username
      TC_6.1.1. Register new user
      TC_6.1.2. Delete new user
      TC_6.1.3. Get user details (expect user do not exits in the system)

   TC_6.2. Negatvie with non-existing username
      TC6.2.1. Delete non-existing user


<br>



