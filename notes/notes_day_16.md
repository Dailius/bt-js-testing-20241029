## Recover PostgreSQL password
```sql
    ALTER USER postgres WITH PASSWORD 'your_new_password';
```


## II. Attacks

1. SQL injections 
   injection is a code injection technique that might destroy your database. SQL injection is one of the most common web hacking techniques.

2. Packet sniffing (http vs. https) -> Sniffing attacks
    is a method of detecting and assessing packet data sent over a network. It can be used by administrators for network monitoring and security. However, packet sniffing tools can also be used by hackers to spy or steal confidential data.

3. Dictionary attack
    A type of brute force attack where an intruder attempts to crack a password-protected security system with a “dictionary list” of common words and phrases used by businesses and individual

<br>

## III. Hash functions

    Password hashing - Password hashing is a multi-step process designed to transform plaintext passwords into secure, fixed-length hashes that are difficult to reverse-engineer.

    Collision - in computer science, a hash collision or hash clash [1] is when two distinct pieces of data in a hash table share the same hash value.

    How to stay safe from dictionary attacks:
    1. Strong password.
    2. Salt ->

<br>

## IV. Api-key vs. JWT

    API key – A value provided by code when calling an API to identify and authorize the caller. It is intended to be used programmatically and is often a long string of letters and numbers.

    Token (JWT) – A piece of data that represents a user session or specific privileges. Used by individual users for a limited period of time.

    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoidXNlcl8wMDEiLCJpYXQiOjE3NDAwNDM3NDgsImV4cCI6MTc0MDA0NzM0OH0.ZGx5Ku9onI2ENtakKMw5jezeu3oR4hEJ9_GUqhe2Xyg

    https://jwt.io/

    JWT contains 3 parts:
    1. header
    2. payload
    3. Verify signature
   

   

