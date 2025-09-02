# MTE Relay Client Test

The is a starter project to help you test MTE Relay Server.

### Quick Start Guide

- Install dependencies `npm i`
- Start Project `npm run dev`
- [Open the app in your browser](http://localhost:5173)

### Installing MTE Relay

- Start the AWS Demo Stack using AWS Cloud Formation template provided on the our documentation website.
  - Test that your server is responding to requests using the echo route: `/api/mte-echo`
- Get the MTE Relay Browser library from your MTe Relay Server, but going to the `/public/mte-relay-browser.js` route on the server.
  - Create a new file called "mte-relay-browser.js" and copy/paste the Javascript from the server into this file.
- Import `mteFetch` from the new JS file and use it the same as you would use `fetch` to make a network request.
