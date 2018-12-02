# TestFullStack

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6. 

This project was created on Ubuntu 18.0.4 and is meant to be run on a Linux machine. 

This is the front-end of a full stack application. The backend is an <a href="https://github.com/baxishrey/apache-dotnet-core-webapi">ASP.NET Core WebApi.</a> Please clone the backend to run the app properly.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build
Run `ng build --prod` to build the app for production. Run `npm run build` to build the code for deployment.

## Deployment
This app can be deployed to an Apache server on a Linux machine. To start with the deployment, ensure that your linux machine has Apache installed (Run `apache2 -v` in a terminal to verify). <a href="https://www.digitalocean.com/community/tutorials/how-to-install-the-apache-web-server-on-ubuntu-18-04-quickstart">This</a> is a good tutorial to get you started for installation on **Ubuntu**. 

After installation, place the `testclient.conf` file in `/etc/apache2/sites-available` folder. You need to have sudo permission for this operation.

After copying the testclient.conf file, open a terminal and run 

<code>
  sudo a2ensite testclient.conf 
  
  sudo systemctl restart apache2
</code>

Next, build the Angular code for deployment as mentioned above in the "Build" section.

## Test
Open you browser and go to http://localhost/client/ to visit the app.
