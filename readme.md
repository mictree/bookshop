<h1 align="center">
<img height=30 width=30 src="https://mybookshop.vercel.app/vite.svg" alt="Vo Minh Tri">
 BOOKSHOP
</h1>
<p align="center">
MongoDB, ExpressJs, ReactJs, Nodejs
</p>

<p align="center">
   <a href="https://github.com/amazingandyyy/mern/blob/master/LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-green.svg" />
   </a>
   <a href="https://circleci.com/gh/amazingandyyy/mern">
      <img src="https://circleci.com/gh/amazingandyyy/mern.svg?style=svg" />
   </a>
</p>

> MERN is a fullstack implementation in MongoDB, Expressjs, React/Redux, Nodejs.

MERN stack is the idea of using Javascript/Node for fullstack web development.

## clone or download
```terminal
$ git clone https://github.com/mtri-git/bookshop
$ yarn # or npm i
```

# Usage (run fullstack app on your machine)

## Prerequisites
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^18.16.0
- [yarn](https://www.npmjs.com/package/yarn/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 5175)
```terminal
$ cd client          // go to client folder
$ yarn # or npm i    // npm install packages
$ yarn dev      // run it locally

// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
```

## Server-side usage(PORT: 5001)

### Edit environment variable in .env

- ACCESS_TOKEN_SECRET=
- ACCESS_TOKEN_LIFE=
- REFRESH_TOKEN_SECRET=
- REFRESH_TOKEN_LIFE=10d
- ADMIN_ACCESS_TOKEN_SECRET=
- ADMIN_REFRESH_TOKEN_SECRET=
- DB=
- DB_ONLINE=
- REDIS=



### Start

```terminal
$ cd api   // go to api folder
$ yarn       // yarn install packages
$ yarn dev // run it locally
$ npm run build // this will build the server code to es5 js codes and generate a dist file
```

# Dependencies(tech-stacks)
Client:
Vite, React-router DOM, Redux, Redux thunk, tailwind, axios
Admin:
Vite, React Query, MUI

# Project on internet
https://mybookshop.vercel.app/


## Author
[Vo Minh Tri](https://github.com/mtri-git)


<a href="https://github.com/mtri-git/"> <img height=100 width=100 src="https://avatars.githubusercontent.com/u/62364551?v=4" alt="Vo Minh Tri"> </a>
