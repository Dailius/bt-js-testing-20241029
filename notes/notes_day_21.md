
[QA road map](https://roadmap.sh/qa)

## I. Homework

Windows:  
```cmd
    netstat -ano | findstr :3000

    tasklist | findstr 12345

    taskkill /PID 12345 /F
```

MAC:  
```cmd
    lsof -i :3000
```
or
```cmd
    netstat -an | grep 3000
```
or
```cmd
    sudo lsof -nP -iTCP:3000 | grep LISTEN
```

Kill task: 
```cmd
    kill -9 1234
```
(Replace 1234 with the actual PID.)  


<br>

## II. Intro to CI/CD

![](/pic/cicd.png)

<br>

## III. Virtual machines
![](/pic/virtualisation.png)  

* IaaS - Infrastructure as a Service  
* PaaS - Platform as a Service  
* SaaS - Software as a Service 

![](/pic/saas.png)  

<br>

## IV. Cypress run

Cypress browser: 
https://docs.cypress.io/app/references/launching-browsers  

Cypress configuration:  
https://docs.cypress.io/app/references/configuration

Clean git cache:

git rm -r -f --cached "directory, file name etc." 
git rm -r -f --cached ".code_examples/cyperss-demo/cypress/screenshots/" 
git rm -r -f --cached ".code_examples/cyperss-demo/cypress/screenshots/somefile.txt" 



