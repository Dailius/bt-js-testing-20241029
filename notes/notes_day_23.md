
[QA road map](https://roadmap.sh/qa)

## I. Homework

<br>

## II. Single page (web and app)

Yahoo website in 90s and later: 
https://www.webdesignmuseum.org/gallery/yahoo-1994



<br>

## III. React

Senas irankis `create-react-app`:  
https://create-react-app.dev/docs/getting-started/  


Naujas irankis `Vite`:  
https://vite.dev/guide/  


Create new react project with Vite:  
```cmd
    npm create vite@latest .
```

Continue with following commands:  
```cmd
    npm i
    npm run dev
```

Stop running app CTRL + C  

Starting VCS:  
```cmd
    git init
    git status
    git add .
    git status
    git commit -m "Initial commit"
    git log
```
Press 'q' key in order to exit from log list.

```cmd
    npm i cypress --save-dev
```

<br>

## III. React

Install concurrently lib
```cmd
    npm install concurrently --save-dev
```

`package.json` set up:  
```json
"scripts":{
    ....
    "cy:ui": "cypress open",
    "cy:cli": "cypress run",
    "test:e2e": "concurrently \"npm run dev\" \"npm run cy:ui\"",
    "test:e2eh": "concurrently \"npm run dev\" \"npx wait-on http://localhost:5173 && npm run cy:cli\""
}
```


<br>





