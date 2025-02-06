## III. QA/DEV/produciton environmets

Development and QA environment gali buti bendrai.

1. Development environment
   tai aplinka, kurioje programuotojai kuria, rašo ir testuoja naują kodą. Čia vyksta aktyvus programavimo procesas, dažnai naudojami lokalūs įrankiai, tokie kaip „IDE“ (pvz., IntelliJ IDEA, Eclipse), versijų kontrolės sistemos (pvz., Git), bei testavimo įrankiai.

2. QA environment
    Testing Environment (QA aplinka) – tai aplinka, kurioje vyksta kokybės užtikrinimo testavimas. Čia testuotojai (QA specialistai) atlieka funkcinius, integracinius, našumo, regresinius ir kitus testus, siekdami rasti klaidas prieš programą išleidžiant į gamybą.

3. Produciton environment
    Galutinis veikianit produktas.

    Gali tekti testuoti kai: exploratory testing

<br>

## IV. Generate code with ChatGPT
    
```cmd
    node -v
```

nvm - node version manager

```cmd
    nvm -v
```
Jei neatpazystqa `nvm` comandos
reiketu atsisiusti naujausia `nvm-setp.exe` faila:  
https://github.com/coreybutler/nvm-windows/releases  

npm - node package manager
```cmd
    npm -v
```

.gitignore forma node aplikacijoms:  
https://github.com/github/gitignore/blob/main/Node.gitignore

Ask AI to generate code:  
    You are JavaScript specialist. Create node.js application for managing ToDos. This app should cover CRUD. Provide code in a single file.

```cmd
    npm init
```

```cmd
    npm init -y
    npm install express body-parser
```

On POST provide json data according js code:
```json
{
    "title": "Clean room",
    "description": "Take ...."
}
```
To stop runnig server:   
CTRL + C  


<br>

## V.  Black box and Grey box testing for API
    Gray Box Testing (pilkasis dėžės testavimas) – tai testavimo metodas, kuris sujungia White Box (baltosios dėžės) ir Black Box (juodosios dėžės) testavimo principus. Tai reiškia, kad testuotojas turi dalinį supratimą apie sistemos vidinę struktūrą (pvz., duomenų bazę, API, loginius algoritmus), tačiau ne visas detales, kaip tai daroma White Box testavimo metu.









