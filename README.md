# Steps for server side installation
* on local laptop or desktop based on ubuntu run following commands
    * sudo apt-get install nodejs-dev node-gyp libssl1.0-dev
    * sudo apt-get install npm
    * npm init
    * npm install express -save
* Create and cd into folder HttpServer and run the following command
* Create a file server.js with necessary code to listen and run following command
    * node server.js 

# Steps for client side installation
* on raspberry pi do the following
    * enable ssh so that you can work from your laptop on pi
    * create a folder WeatherStation on pi
    * create a file called DockerFile