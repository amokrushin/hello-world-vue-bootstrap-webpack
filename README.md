# hello-world-vue-bootstrap-webpack

### [Demo](https://amokrushin.github.io/hello-world-vue-bootstrap-webpack)

# Install

```bash
git clone https://github.com/amokrushin/hello-world-vue-bootstrap-webpack
cd hello-world-vue-bootstrap-webpack
npm i

git init
git add .
git commit -m "initial"

# create a new repository in github
# and replace <username> and <project-name> with your own

git remote add origin https://github.com/<username>/<project-name>.git
git push -u origin master
```

# Development

## With [webpack Dev Server](https://webpack.js.org/configuration/dev-server/)

Start webpack Dev Server

```bash
npm run wds
```

## Without webpack Dev Server

Build app, select one of build modes

```bash
npm run build:dev
npm run build:dev:dashboard
npm run build:prod
npm run build:prod:uglify
npm run build:prod:uglify:dashboard
```

Start [static-server](https://github.com/nbluis/static-server)

```bash
npm run server
```

Node: `npm run *:dashboard` not working as expected in Windows CMD

Open in browser http://localhost:8090

# Deployment to GitHub Pages

```bash
npm run deploy
```

### WebStorm configuration


File | Settings | Languages & Frameworks | JavaScript
```
JavaScript language version -> ECMAScript 6
```

File | Settings | Languages & Frameworks | JavaScript | Code Quality Tools | ESLint
```
Enable
```

File | Settings | Languages & Frameworks | Node.js and NPM
```
Enable
```
