# boilerplate-web

## About
This is a full-stack boilerplate using [next](https://nextjs.org), [nest](https://docs.nestjs.com/), [redux](https://redux.js.org/) and TypeScript.

Linter, prettier, some husky hooks etc already configured.

## nest (backend)
Nest is used as our server. You can check it out at `./server/`

### Endpoints:
|endpoint | status | type | obs. |
|------------|------------|-------------|--|
| /api/health-check | 200 | string | from nest |
| * | - | - | next will handle |

## Fronted
It is in `./src` dir.

## Install
```shell
yarn
```

## Build 
To build your project:
```shell
yarn build
```
It will be on `./dist/` dir

To run your builded project:
```shell
yarn start
```

## Export (only frontend)
To export your project as frontend only:

```shell
yarn export
```

To run it:
```shell
yarn start:exported
```


## Avaliable scripts

dev: run in dev mod

build: build project

export: export client-side only projects

start: run builded project

test: run all unit tests

test:dev: run tests and watch

## Screenshots
<img src="https://github.com/Viglioni/boilerplate-web/blob/main/screenshots/large-screen.png"
     alt="screenshot"
     height="250px"
     align="left" />
<img src="https://github.com/Viglioni/boilerplate-web/blob/main/screenshots/medium-screen.png"
     alt="screenshot"
     height="250px"
     align="left" />
     <img src="https://github.com/Viglioni/boilerplate-web/blob/main/screenshots/small-screen.png"
     alt="screenshot"
     height="250px"
     align="left" />
