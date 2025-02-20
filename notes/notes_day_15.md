## II. SQL in Javascript

.env file form:  
```gitignore
    PORT=3000
    DB_USER=your_db_user
    DB_HOST=localhost
    DB_NAME=your_db_name
    DB_PASSWORD=your_db_password
    DB_PORT=5432
    JWT_SECRET=your_secret_key
```

SQL example:  
```sql
    CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                title VARCHAR(50),
                password TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );


    INSERT INTO users (username, email, title, password) 
        VALUES ('some user', 'demo@demo.lt', 'Mr.', 'seecret password');

    select * from users;
```


```cmd
    npm init -y
``

## III. Intro to security

SQL injection:  
    https://brightsec.com/blog/sql-injection-attack/

