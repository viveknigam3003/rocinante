# rocinante
![GitHub package.json version](https://img.shields.io/github/package-json/v/viveknigam3003/rocinante?style=flat-square)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/viveknigam3003/rocinante/react?style=flat-square)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/viveknigam3003/rocinante/dev/electron?style=flat-square)

Rocinante - GUI Client for Rucio

## Description
A complete GUI desktop client for [Rucio](https://github.com/rucio/rucio).

## Getting Started with Development

Fork the repository or clone it directly to run on your system.

```BASH
$ git clone https://github.com/<your-username>/rocinante.git
$ cd rocinante
```

#### Using the software in dev mode.

* For starting the software in development mode.

```BASH
$ npm install && npm start
```

This shall give you the minimal dev testing setup.
If you wish to see how the app will behave post production, you will also need to start the Electron app.

* To run the desktop app window for the software. 

  Open another terminal window and run:

```BASH
$ npm run electron
```

This will start Rocinante inside of an Electron window.
Any changes will be refleted live in the app.

## Troubleshooting

In case of an `code ELIFECYCLE` npm error, perform the following steps

```BASH
$ npm cache clean --force
$ rm -rf node_modules package-lock.json
$ npm install && npm start
```

## Extra Notes

This project is under development as part of the Google Summer of Code 2020 project for CERN-HSF's Rucio.
It is not yet ready for production release.
This software is tested on Ubuntu 18.04 LTS.
