
## III. Git for team: branching, merge, pull requests

CLI

Pradejus versijavima projekto katolage sukuria papildoma kataloga '.git'

![](/pic/git_branching_image.png)

```git
    git init

    git status
    git add .
    git commit -m "Initial commit"

    git log

    git branch

    git checkout -b "dev"

    git checkout -b "branch_B"
    git checkout -b "branch_A"

    git merge branch_B
    git commit -m "Merge message"

```

Visada sukuriama master (main) saka


## IV. Smoke test

    Functional/nonFunctional
    Regresion testing
    Smoke test:
        patikrinti ar aplikacija tinkama testuoti
        Happy path -> ivedame positive/tesinga info
        Tik pagrindines funkcijos
        Salutiniu funkciju netestuojame

    Smoke testai (dar žinomi kaip build verification testai) – tai pirmieji testai, atliekami po naujo programinės įrangos build'o ar versijos sukūrimo, siekiant užtikrinti, kad pagrindinės funkcijos veikia ir sistema nėra visiškai sugedusi. Tai yra greita ir paviršutinė testavimo forma, kuri netikrina išsamiai visų funkcionalumų, bet patikrina, ar sistemoje nėra didelių klaidų, kurios užkirstų kelią tolesniam testavimui.

    https://todolist.james.am/#/
        Pagrindines funkcijos:
        1. Create new task
        2. Delete task
        3. Edit task
        4. Mark tasks as completed
        5. View task list

        Salutines funkcijos:
        1. Search tasks: Search for specific tasks in the list.
        2. Filter tasks: Show only active, completed, or overdue tasks.
        3. Sort tasks: Organize tasks based on priority or due date.
        4. Notifications/reminders: Alert users to upcoming deadlines or tasks.
        5. Save tasks: Ensure tasks are saved even after the application is closed or refreshed.


## V. Exploratory testing

    Exploratory testing (angl. Eksploraciniai testai) – tai testavimo metodas, kai testeriai tiria programinę įrangą be iš anksto paruoštų testų scenarijų, naudojant savo žinias apie sistemą, intuiciją ir kūrybiškumą. Testuotojas aktyviai "tyrinėja" programą, ieškodamas klaidų, netikėtų rezultatų ar nesuderinamumų, dažnai remiasi savo patirtimi ir produktyvumu, kad nustatytų potencialias problemas.

Eksploraciniai testai dažniausiai naudojami tada, kai:

* Yra laiko spaudimas ir nėra pakankamai laiko sukurti išsamius testų scenarijus.
* Nėra aiškių specifikacijų arba kai programa nėra visiškai išbaigta.
* Testuotojas nori greitai suprasti, kaip sistema veikia ir kaip ją galima panaudoti įvairiais būdais.
* Nėra automatizuotų testų, todėl reikia atlikti testavimą žmogaus iniciaty

## VI. Test plan
    1. TS, TC
    2. in Scoup/ out of Scoup
    3. invironment (QA/DEV)
       1. sertificates
       2. equipment: servers, mob., client equipment.
    4. Exit criteria
    5. Mitigation matrix
    6. requirements
    7. .....
   
https://strongqa.com/qa-portal/testing-docs-templates/test-plan  
https://strongqa-production-assets.s3.amazonaws.com/uploads/document/doc/61/test-plan-template-05.pdf  
https://qatestlab.com/assets/Uploads/QATestLab-Testplan-Project-Name.pdf  

## V. TC management systems (Testomat)

