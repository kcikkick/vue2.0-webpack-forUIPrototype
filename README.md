# vue2.0-webpack-forUIPrototype
The frame designed  for  UI prototype demo with ES6 grammar




## Access:


``` bash
# install dependencies
npm install

# if your network has limitation on npm.org, you may change the npm registry to your nearby vendor. e.g.
npm config set registry https://registry.npm.taobao.org/

# serve with hot reload at localhost:5656, you may change the port under config/env/default.js
npm run dev


http://localhost:5656/app.html

http://localhost:5656/home.html

## build:


## client:


## config:
* **assets** 
    This section contains your asset management framework. When your  application is running, there will be a set of assets used to deliver functionality to your users. Assets in this context consist of files such images, cascading style sheets (css), JavaScript (js) and views (i.e. html templates).
    Additionally, there may be variations on individual specific assets used depending on which environment your application is running in (i.e. dev, test, prod). The essential role of this asset framework is to tell the application which asset files it needs to know about and where it can find them.

* **env** 
    This section holds the files that provide configuration settings for various system environments (i.e. local, dev, test, prod) supported by your MEANJS application.

* **lib** 
    The lib section is home to various helper functions, i.e. 'library' modules, used by your MEANJS application. It includes components that provide support such as bootstrapping the application, establishing express capabilities, logging, database interaction, multi-part uploads, seeding new user accounts, and establishing socket connections.



## static: