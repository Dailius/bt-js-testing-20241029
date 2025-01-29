## IV. SD methodologies: Waterfall, Agile
    SDLT - Software Testing Life Cycle
    SDLC - Software Development Life Cycle

    WATERFALL

    AGILE

    Requirements:
        1. Customer req. (important for QA)
        2. System req.
        3. Software specification req.

## V. Test Cases (TC)
    Test Scenarios (TS)
        Registration for person
        Registration for company
        Login
        Forgot password
        Logout

        To-Do:
            TS01 Create new task
            TS02 Delete task
            TS03 Edit task
            TS04 Task calculation
            TS05 Filtering functionality


    Test Cases (TC)
        TS01 Create new task
            TC01.01 Positive create new task
                1. open app
                2. input task name: clean room
                3. press key [Enter]
                Expected result: task availabe in the list of tasks
                Status (Pass/Fail):  Pass
                Actual result: 

            TC01.02 Positive create new task with LT words
                1. open app
                2. input task name: Nupjauti žolę
                3. press key [Enter]
                Expected result: task availabe in the list of tasks
                Status (Pass/Fail):  Fail
                Actual result: app crashed (is not available in the list)

    TC mandatory fields:
        test case ID,
        test case description,
        steps to follow,
        expected results,
        pass/fail criteria, and
        status of the test case.
