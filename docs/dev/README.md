# Rucio Desktop : Developer Documentation

# Table of Contents

<!--ts-->

* [Introduction](#introduction)
* [Tech Stack](#tech-stack)
* [Contributing to the project](#contributing-to-the-project)
* [Setting Up a Developement Environment](#setting-up-a-development-environment)
    * [Installing FUSE-POSIX Interface](#installing-fuse-posix-interface)
    * [Installing NPM](#installing-npm)
    * [Setting up the repository](#setting-up-the-repository)
    * [Setup Scripts](#setup-scripts)
    * [Troubleshooting](#troubleshooting)
* [Component Reference](#component-reference)
* [API Reference](#api-reference)
* [Support](#support)
* [Extra Notes](#extra-notes)
<!--te-->

# Introduction
Welcome to Rucio Desktop's Developer Documentation!
Rucio Desktop (codename: rocinante) is a GUI desktop client for Rucio - Exascale Scientific Data Management Framework. 
It was built by [@viveknigam3003](https://github.com/viveknigam3003) and has been improved with the help of our open-source [contributors]().

We __highly recommend__ that before contributing to the project you must get yourself familiar with Rucio itself, since the application highly relies on Rucio for most of its APIs and functionality. Some references are attached below:

* [Rucio Documentation](https://rucio.readthedocs.io/en/latest/)
* [Rucio - Scientific data management (paper)](https://arxiv.org/abs/1902.09857)
* [rucio/rucio](https://github.com/rucio/rucio)

# Tech Stack

Before contributing to the project, you must be familiar with the tech stack used to build this project.

* ReactJS (^16.13.1 and above)
* React Router
* Redux
* ExpressJS
* Electron (^9.1)

### Note on React JS v16.13

Rocinante is build with ReactJS.
The version of React used at the time of development was v16.13.1.
This means that the application uses features such as Hooks and Context which were introduced in v16.8
The app also avoids the usage of classes hence completely using the functional programming paradigm.

