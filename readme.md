# MyBooks V1 (in progress)

## Table of Contents

1. [General Info](#general-info)
2. [Stacks](#stacks)
3. [Installation](#installation)
4. [Pages](#pages)
5. [Database](#database)
6. [Use](#use)
7. [TODO](#todo)
8. [FAQs](#faqs)

<br/>

### General Info

---

Have your own book list.

<br/>

### Stacks

---

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)

- [dotenv](https://www.npmjs.com/package/dotenv)
- [nodemon](https://www.npmjs.com/package/nodemon)

- [mongodb](https://www.npmjs.com/package/mongodb)
- [mongoose] (https://www.npmjs.com/package/mongoose)

### Installation

---

- Need Node.js

If not install, check : https://nodejs.org/en/

- Clone :

```
$ git clone https://github.com/FlavF/MyBooksV1
```

or

- Installation without clone :

```
$ cd ../path/to/the/file
$ npm init
$ tsc --init
$ npm install --save express body-parser
//to not restart your node.js src/index.js everytime your changing your code
$ npm install --save-dev nodemon
//for typescript
$ npm install --save-dev @types/node
$ npm install --save-dev @types/express
//For .env
$ npm install dotenv
```
- Create and Update your .env => look at Pages - Folders to Update for datas

- To start the app and check it

```
$ nodemon src/app.js
```
or  in package.json :

"start": "nodemon dist/app.js"

and in tsconfig.son : 

"outDir": "./dist",

- to use tsc

open a new terminal and write down : tsc -w

- Database :
$ npm i mongodb
$ npm i mongoose

<br/>

### Pages

---

HomePage : Authentification

Page 1 - Booklist : Book list via table and form



#### _Folders to update_

- .env : (/.env)


<br/>

### Database
---




<br/>

### Use
---

- add a book
- update a book
- delete a book
- book list
- get the booklist via json

==> (To complete when updates)

<br/>

### TODO

---



<br/>

### FAQs
