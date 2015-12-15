#citrix-js-assessment-intro

This project is meant to help applicants for a web developer position at Citrix prepare for their programming challenge.

If you are interviewing with us, you should have received an email pointing you here.
As stated in that email, it is important that you **get this project working on your computer before you download the actual task from ShareFile**.

Your time does not start until you download the actual task from ShareFile, so take your time setting up this project.

## Prerequisites

- Install Node.js from [nodejs.org](http://nodejs.org/)

### Windows Vista and later
- Open a command line and verify that your path contains the following entries:
	- ```C:\Program Files\nodejs```
	- ```C:\Users\<username>\AppData\Roaming\npm```
    - Windows users: It is recommended to install nodejs to ```C:\nodejs```

## Running this project
- Clone this project to your computer or download it as a ZIP file and unpack it
- Open a command line of your choice and change the working directory to this project
- Run ```npm install --no-optional``` and verify it runs without errors
- Run ```npm test```
- You should get output similar to this

		Running "karma:unit" (karma) task
		INFO [karma]: Karma server started at http://localhost:9876/
		INFO [launcher]: Starting browser PhantomJS
		INFO [PhantomJS 1.9 (Mac)]: Connected on socket JtaYxxO72yfdyTfXAAAA with id 39260919
		PhantomJS 1.9 (Mac): Executed 1 of 1 SUCCESS (0.06 secs / 0.003 secs)
		
		Done, without errors.

## Learning more
Although you should not need to know these technologies to fulfill your task, here are links to everything that will be used in some way:

- [Node.js JavaScript Runtime](http://nodejs.org)
- [PhantomJS Headless Webkit](http://phantomjs.org/)
- [Karma Test Runner](http://karma-runner.github.io)
- [Jasmine Test Framework](http://jasmine.github.io/)
- [Chai Assertion Library](http://chaijs.com)

## Next Step
Please go back to the email you got from your interviewer.
Read it carefully and whenever you are ready to start working on your task,
click the ShareFile link to download it.
