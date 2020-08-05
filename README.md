# rocinante
![GitHub package.json version](https://img.shields.io/github/package-json/v/viveknigam3003/rocinante?style=flat-square)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/viveknigam3003/rocinante/react?style=flat-square)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/viveknigam3003/rocinante/dev/electron?style=flat-square)

**A Desktop GUI Client for [Rucio](https://github.com/rucio/rucio).**

## Description

Rocinante is a new and easier way to use Rucio with a modern graphical user interface.

### Key Features
* **Multi-Account Setup**: Add all your accounts associated with Rucio in the app and manage them in a really efficient way, right from your desktop in a few clicks.
* **Explorer**: Browse the Rucio namespace for all your connected servers using the [FUSE-POSIX](https://github.com/rucio/fuse-posix) interface.
* **Admin and User Panel**: Login to the app as a Rucio Admin or a Rucio User and manage all your account settings right from the app.
* **Server Configuration**: (For Rucio-Admin Accounts) Manage server configurations with ease.
Create, add, update, and delete `config` sections and options.

## Usage

#### Connecting your Rucio Account

After you start the app for the first time, you'll need to connect your Rucio account to the app.
Simply click on __Add your Rucio account__ and setup a new account with your USERPASS or X509 credentials, and the server details.

After setting up the account, you'll be able to log into the app using that account.

#### Adding Multiple Rucio Accounts

You can also set up multiple Rucio Accounts on the app. 
Simply add more accounts from __Add your Rucio account__ utility from the Login screen or once logged in, click go to **Accounts** and click on **Add a New Account** there.
After adding the details log in to the app using any added account. 
The app will authenticate all the added accounts automatically.

For Detailed Instructions refer to our Usage Guide here.

## Getting Started with Development

Fork the repository or clone it directly to run on your system.

```BASH
$ git clone https://github.com/<your-username>/rocinante.git
$ cd rocinante
```

#### Using the software in dev mode.

* For starting the software in development mode.

```BASH
$ npm install && npm run dev
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

* In case of an `code ELIFECYCLE` npm error, perform the following steps

```BASH
$ npm cache clean --force
$ rm -rf node_modules package-lock.json
$ npm install && npm start
```

* Use `ctrl + R` or `cmd + R` (on MacOS) to refresh/reset the app if app freezes or crashes.

## Extra Notes

* This project is under development as part of the Google Summer of Code 2020 project for CERN-HSF's Rucio.
* It is not yet ready for production release.
* This software is tested on Ubuntu 18.04 LTS.
* Using the Explore feature in the app requires installation of [FUSE-POSIX](https://github.com/rucio/fuse-posix) Interface on the system.
