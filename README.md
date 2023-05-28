## Simple Scrumboard

Simple Scrumboard is a Desktop personal project application that designed to help you manage your project tasks and organize your work using the Scrum methodology. It built by using

* Electron Js.
* React Js.
* Supabase

From this code you can view how to

* Make Simple React Js Application
* Convert React Js Web Application to Desktop with Electron
* Use Serverless Supabase Service

## How To Install

* Install Javascript Library

```
npm install
```

* setting .env

```
cp .env.example .env
```

* Create Tables on Supabase

Boards
\|\-\-\- id bigint
\|\-\-\- name text
\|\-\-\- created\_at timestamp
\|\-\-\- updated\_at timestamp

Boards
\|\-\-\- id bigint
\|\-\-\- title text
\|\-\-\- description text
\|\-\-\- color text
\|\-\-\- board\_id text
\|\-\-\- created\_at timestamp
\|\-\-\- updated\_at
\|\-\-\- user\_id

* run react app

```
npm run start
```

* run electron

```
npm run build
npm run electron-start
```

* build electron to windows

```
npm run build
npm run electron-make:win
```

* package electron to Windows MSI

```
Install WiX Toolset & setting env variable
```

* run build

```
node build_installer.js
```