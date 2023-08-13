# We-Chat
A group chat application that I created allows several end users to connect with one another and converse using this platform as an interface. Utilising Express 4.18.2, Socket.io 4.7.2 and NodeJs, this application was created.

Pre-Requisite 
-> Should have the intermediate knowledge of HTML and CSS
-> Should have the basic knowledge of creating a server, socket.io and express to understand explain and implement this "We-Chat" application

// Installation of NodeJs
For installing the Nodejs you can visit  -> https://nodejs.org/en/download
Here you can find the download link for Windows Installer for windows users, macOS Installer for mac users and also for linux users. 

// Developing Frontend 
Refer to the Files
 1. index.html
 2. style.css

// Developing Backend
// Creating The Node Server
 Step - 1 -> Create a folder and name it as "Node Server". 
 Step - 2 -> Open the terminal in your IDE.
 Step - 3 -> Change your directory to Node Server by using the command ( cd .\nodeServer\ ).
 Step - 4 -> Ensure that address of the directory in the terminal should be like ( PS D:\Programming\Web Development\Chat App\nodeServer> )
 Step - 5 -> After this type ( npm init ) in the same terminal.
 Step - 6 -> Enter the following details.
             package name: (nodeserver)
             version: (1.0.0)                                                                                                                                      
             description: This is a node server for our chat application
             entry point: (index.js)
             test command: 
             git repository: 
             keywords:       
             author: Vansh
             license: (ISC)
             Is this ok? (yes) -> Type "yes", then emter 
Step - 7 -> Create a new folder inside the Node Server folder and name that folder as "index.js". 
            |-> This is done beacuse our entrypoint we have added was index.js. ( For Confirmation Refer Line Number - 15 )
Step - 8 -> Installing socket.io
            |-> In the same terminal type any one of the command ( npm i socket.io / npm install socket.io ) install socket.io.
Step - 9 -> Installing express
            |-> In the same terminal type any one of the command ( npm i express / npm install express ) install express.
Step - 10 -> Installing nodemon
            |-> In the same terminal type any one of the command ( npm i nodemon / npm install nodemon ) install nodemon.
Step - 11 -> You can ensure that all dependencies are installed properly by checking the package.json file in the node server folder.
             In that file this column will be added automatically.
               "dependencies": {
               "express": "^4.18.2",
               "http": "^0.0.1-security", 
               "nodemon": "^3.0.1",
               "socket.io": "^4.7.2"
               }

// Creating the Client Server ( which will be run by clicking on the Go Live at the right bottom pannel ) 
Cient server is an independent website which will connect to the server.js
Reference -> client.js
            
