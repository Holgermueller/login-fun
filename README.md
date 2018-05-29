# Burger-sequel
A mysql burger app powered by sequelize, with handlebars.

## Necessary node packages:
* [Express](https://www.npmjs.com/package/express)
* [Express-handlebars](https://www.npmjs.com/package/express-handlebars)
* [Body-parser](https://www.npmjs.com/package/body-parser)
* [Mysql](https://www.npmjs.com/package/mysql)
* [Mysql2](https://www.npmjs.com/package/mysql2)
* [Nodemon](https://www.npmjs.com/package/nodemon)
* [Sequelize](https://www.npmjs.com/package/sequelize)

## How-to:

1. Run npm init in your terminal and download all your node packages.

2. Create an SQL schema; give it whatever name you'd like. However neither create andy tables for it nor seed it.

3. Create a models folder, but don't put anything in it just yet.

4. In terminal, run this command: sequelize init:models & sequelize init:config
* Runnig this commnad with creat a config folder and a config.json file, which will take the place of an orm.
* This will also create an index.js file in the models folder.

5. In the config.js file, type your username, password, and database name into the appropriate places.

6. In the models folder, create a file called burgers.js, or whatever you'd like to call it. Create a constructor with key:value pairs called: burger_name, devoured, createdAt, and updatedAt. Put it in a module export that'll be required in your routes folder.
* The keys burger_name and devoured can have any name you'd like to call them.
* The keys createdAt and updatedAt must have those exact names. Give them the values: DataTypes.TIMESTAMP.

7. In your server.js file, wrap your app.listen command in the command db.sequelize.sync(){}
* Your app won't work otherwise.
