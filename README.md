
  
A valid NodeJS installation is required to run the API server.

First, set up database:

1.  The database must first be initialized by running the A5-Create.sql and A5-InitialData.sql scripts within the [A5/DB-erd-scripts](https://git.cs.dal.ca/jcheung/csci4140-g4/-/tree/master/a5/DB-ERD-SCRIPT) folder.
    

2.  After database initialization, execute the trigger and procedure creation scripts found in the [/A5/DB-erd-scripts/triggers_and_procedures](https://git.cs.dal.ca/jcheung/csci4140-g4/-/tree/master/a5/DB-ERD-SCRIPT/triggers_and_procedures) folder.
    

Then, follow the instructions below to start the API server and the user interface:

3.  In the a5 folder, navigate to the WEBSERVICE subfolder and install the web server with npm install.
    

4.  Navigate to a5/WEBSERVICE/config/dbConfig and fill in your database information.
    

5.  Start the server by using npm start.
    

6.  The web server will proceed to run on port 8000.
    

7.  Navigate to the a5/UI  folder and install the UI using npm install
    

8.  Start the user interface by using npm start
    

9.  The user interface will be accessible on localhost:3000
  
