
[QA road map](https://roadmap.sh/qa)


## II. Bug lifecycle

1. Title.
   Title turi atsakyti i sekancius kl.:
    * kas atsitiko
    * kurioje vietoje
    * prie kuriu aplinkybiu.
  
    E2E pvz.:
        "Amount of 'followers' is missing on the user page when user logged in."

    API pvz.:
        GET /users
        resp code 200
        in the body error "Internal Server error"
        
        "Internal Server error with 200 upon sending GET '/users'"

2. Steps to reproduce (Description):
   
    E2E pvz.:
        Pre-requisites:
        * existing account with followers

        Steps to reproduce:
        * Navigate to User page
        * Observe amount of followers 

        Expected: Amount of followers is visible
        Actual: Amount of followers is not visible

    API pvz.:
        Pre-requisites:
        * existing few users

        Steps to reproduce:
        * Send GET request to /users
        * Observe response body

        Expected: list of users
        Actual: response body message "Internal Server error" with code 200 

3. Environment:
   Chrome version, QA environment, Postman, OS version ...
   Chrome Version 133.0.6943.142 (Official Build) (64-bit)

4. Build version
    Product version where was identified bug.

5. Severity
    E2E: low

One problem = one registered defect.
Cosmetic defects may register as one.

![](/pic/bug_lifecycle.png)


<br>
