
[QA road map](https://roadmap.sh/qa)

## I. Docker installation

Docker for windows  
https://docs.docker.com/desktop/setup/install/windows-install/  

Docker for mac  
https://docs.docker.com/desktop/setup/install/mac-install/


BIOS F12, F2
https://graphicshub.medium.com/how-to-enable-virtualization-in-windows-10-without-bios-89990c603f33 

WSL stands for Windows Subsystem for Linux

Virtual box:  
https://www.oracle.com/virtualization/technologies/vm/downloads/virtualbox-downloads.html 

Enter 'System information' into widow toolbar search input.

WSL installation:  
https://learn.microsoft.com/en-us/windows/wsl/install  Docker hub:  
https://hub.docker.com/repositorie  

https://docs.docker.com/desktop/features/wsl/  

Docker hub:  
https://hub.docker.com/repositorie  


https://docs.chocolatey.org/en-us/choco/commands/  
Windows install by cli with Choco:
```
    choco install docker-desktop
```

Windows install by cli with Winget:
```
    winget install -e --id Docker.DockerDesktop
```

Check if docker is installed:
```
    docker -v
```


## II. xpath selector

Open devtool and active xhpath search input CTRL + F

'/' - pirmas tag lygmuo  
'//' - visi imanomi tagai visuose lygiuose  

'*' - visi tagu pavadinimai  
pvz:  
```
    /*
    //*
    //header/div[1]
    //header/div[2]
    (//div)[261]

    //div[@id='topNoticeAlert']
    //div[@class='alert alert-purple alert-dismissible alert-dismissible-cent']
    //div[contains(@class,'alert')]
    (//div[contains(@class,'alert')])[2]
    //*[@id='exampleRadios1']/../label

    //label[contains(text(),'Collect')]
    //*[text()='First name']
```

xhpath functions:  
contains(param01,parm02)  
ex: contains(@class,'alert')  
text() = "some text here"


https://www.cypress.io/blog/understanding-selectors-in-testing

Install xpath: 
```powershell
    npm install -D cypress-xpath
```

Setup support file in '/support/e2e.js' just paste inside file:
```js
    require('cypress-xpath');
```

Cypress code example:
```js
cy.xpath('//input[@data-test="username"]').type('standard_user');
```

https://www.w3schools.com/xml/xpath_syntax.asp  
https://www.w3schools.com/xml/xpath_intro.asp  
https://devhints.io/xpath

## III. Sweetshop project continuation Sprint with Jira







