## III. TS/TC create and register into testomat.io

https://todolist.james.am/#/

To-Do App indentify TS:
    TS01. Create task
    TS02. Edit task
    TS03. Delete task
    TS04. Clear task
    TS05. Complete/Incomplete task
    TS06. Filter
    TS07. UI/UX

TS01. Create task as ChatGPT to create TC:

# **Test Case Document: Create Task**

## **Test Scenario: Create a New Task**
### **Objective:**  
Verify that users can successfully create a task with different input conditions and validate system behavior.

### **Preconditions:**  
- The To-Do List application is open.
- The user is on the **main page** where tasks can be created.
- The task input field and "Add Task" button are visible.

---

## **Test Cases**

### **1. Verify Adding a Valid Task**
```markdown
Test Case ID: Create-01  
Test Case Name: Create a task with valid input  
Description: Verify that a new task can be added successfully with valid input.  
Preconditions: User is on the main page of the To-Do List app.  
Test Steps:  
1. Click on the input field.  
2. Enter a valid task name (e.g., "Buy groceries").  
3. Press **Enter** or click the **"Add Task"** button.  
4. Verify if the task appears in the task list.  
Expected Result: The new task should be displayed in the task list.  
```

---

### **2. Verify Creating an Empty Task (Negative Case)**
```markdown
Test Case ID: Create-02  
Test Case Name: Prevent creating an empty task  
Description: Verify that an empty task cannot be added.  
Preconditions: User is on the main page of the To-Do List app.  
Test Steps:  
1. Click on the input field.  
2. Leave the input field empty.  
3. Press **Enter** or click the **"Add Task"** button.  
Expected Result: The task should not be added, and an error message (if applicable) should be displayed.  
```

---

### **3. Verify Adding a Task with Special Characters**
```markdown
Test Case ID: Create-03  
Test Case Name: Create a task with special characters  
Description: Verify that a task with special characters is accepted.  
Preconditions: User is on the main page of the To-Do List app.  
Test Steps:  
1. Click on the input field.  
2. Enter a task with special characters (e.g., "@Meeting #Office!").  
3. Press **Enter** or click the **"Add Task"** button.  
4. Verify if the task appears in the task list.  
Expected Result: The task should be added successfully with special characters intact.  
```

---

### **4. Verify Adding a Task with a Long Name**
```markdown
Test Case ID: Create-04  
Test Case Name: Add a task with a long name  
Description: Verify how the system handles tasks with long names.  
Preconditions: User is on the main page of the To-Do List app.  
Test Steps:  
1. Click on the input field.  
2. Enter a task with a long name (e.g., "This is a very long task name that should be tested for display and functionality purposes in the to-do list application").  
3. Press **Enter** or click the **"Add Task"** button.  
4. Verify if the task appears in the task list and is properly displayed.  
Expected Result: The task should be added successfully, and the UI should properly display it without breaking.  
```

---

### **5. Verify Adding a Duplicate Task**
```markdown
Test Case ID: Create-05  
Test Case Name: Create duplicate tasks  
Description: Verify if the application allows adding duplicate tasks.  
Preconditions: User is on the main page of the To-Do List app.  
Test Steps:  
1. Create a task with the name "Meeting at 10 AM".  
2. Attempt to add another task with the same name.  
3. Verify if the duplicate task is added or if the system prevents it.  
Expected Result: System behavior depends on the implementation: Either both tasks should be added, or a message should prevent duplicates.  
```

---

### **6. Verify Task Creation After Page Refresh**
```markdown
Test Case ID: Create-06  
Test Case Name: Verify task persistence after page refresh  
Description: Ensure that tasks persist after refreshing the page.  
Preconditions: At least one task has been created.  
Test Steps:  
1. Add a new task.  
2. Refresh the page.  
3. Verify if the task still appears in the task list.  
Expected Result: The task should still be present after the refresh.  
```

---

### **7. Verify Task Creation in Private/Incognito Mode**
```markdown
Test Case ID: Create-07  
Test Case Name: Check task persistence in Incognito mode  
Description: Verify if tasks persist when using private/incognito mode.  
Preconditions: User opens the To-Do List app in incognito mode.  
Test Steps:  
1. Open the app in incognito mode.  
2. Add a new task.  
3. Close the incognito window and reopen it.  
4. Check if the task still appears.  
Expected Result: The task may disappear (depending on how the app handles local storage).  
```

---

### **8. Verify Creating Multiple Tasks in Quick Succession**
```markdown
Test Case ID: Create-08  
Test Case Name: Add multiple tasks quickly  
Description: Ensure that the app handles rapid task creation without performance issues.  
Preconditions: User is on the main page of the To-Do List app.  
Test Steps:  
1. Quickly add 10+ tasks in succession.  
2. Verify if all tasks are added correctly.  
Expected Result: All tasks should be added without delays, crashes, or UI glitches.  
```

---

### **9. Verify Task Display Order**
```markdown
Test Case ID: Create-09  
Test Case Name: Check task order after creation  
Description: Ensure that newly created tasks appear in the correct order.  
Preconditions: User is on the main page of the To-Do List app.  
Test Steps:  
1. Add multiple tasks one by one.  
2. Check if they appear in the correct order (e.g., newest at the top or bottom).  
Expected Result: Tasks should be displayed consistently in the expected order.  
```

---

### **Conclusion**
These **test cases** comprehensively cover various aspects of the **"Create Task"** functionality, ensuring **proper validation, UI behavior, persistence, and performance.**







