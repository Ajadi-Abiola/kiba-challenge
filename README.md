#  Front-End Challenge
 The webpage is built with react.js and Material-UI.
# Installation
Ensure you have node 12 and above installed on your laptop. To install node go to https://nodejs.org/en/download/ . select your operating system and download.
## Instructions
To Clone the repository from GitHub run:
next step is to change to the directory run `cd <directory-name>` to move into the folder. while in the folder you run `npm install` to install the project into that folder on your local machine.
Next is to run `npm run build` this is to create a build directory for production. 

## Serve
To serve the application locally, you need to install `serve` using `npm install -g serve` after runnung that command you need to run `serve -s build` . This will build the application and provide a localhost link to view the application.
**Please Note:**  On windows, you may have to give explicit permissions for `serve` to run, do that using `set-executionpolicy -scope currentuser remotesigned` command.
Visit `localhost:5000` to view the page. 
To order by City, add `?orderByField=city` to the `base url` and the table would be sorted by city, You can also change `city` to any other column and it will be sorted using that particular column as a parameter.





