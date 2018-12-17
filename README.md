# Frontend candidate task

### Intro

Our clients have files that contain gene sequences and would like to manage them in a tool that would hint about their content.

Your task should you accept the challange it to build a simple client to handle client genes files, with the ability to view files and upload new ones.

This task should evaluate several things (not ordered by importance)
- API design and implmenetation
- React application architecture
- Styling and UX/UI intuition
- Initiative

We will provide an almost complete server, you will need to create the API layer as you best see fit, and create a new client that would interact with that server

The test should take ~3-4 hours

### Requirements

- Users should be able to upload new files (1 at a time)
- Users should be able to list uploaded files
- Users should be able to view a single file

### Bonus
- Download the original file in the file page
- Routing

### Setup

1. `git clone git@github.com:Twistbioscience/TLV-frontend-task.git`
2. `cd TLV-frontend-task`
3. `yarn install` or `npm install`
4. `yarn start` or `npm start`

### Server info

- The server part of the task is only for API design, no need to handle errors, improve performance or whatever, just provide the API layer.
- Uploaded files will be accessable in an array in `req.files` for all POST requests
- The performance issues were introduced on purpose - it was to simulate the fact that actual parsing of DNA files might take a long time
- There is no need make any changes to any files other than the API layer in `server/main.js`
- All methods required are already imported to `server/main.js`
- The default port for the server is `3000` you may set another port by setting the env var PORT ex. `PORT=4000 yarn start`
- To clear db delete `mockdb.json` and `upload/`

### Other points
- Have fun!
- For any questions/issues - please contact me at ayahid@twistbioscience.com

