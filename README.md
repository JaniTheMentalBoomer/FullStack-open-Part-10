# FullStack open Part 10

## User Instructions for this repo:

### To run your project, navigate to the directory and install the required dependencies

- cd FullStack-open-Part-10
- npm install
- npm start

### Project has a problem with NodeJS versions newer than V 16.19.0 and a lot of people in the internet tell you to downgrade your Node version but it is recommended to add a workaround instead to the package.json scripts. This is because downgrading your Node Version can expose your app for security threats that have been fixed in newer versions!

Add this to package.json scripts:

**For Windows:** "start": "set NODE_OPTIONS=--openssl-legacy-provider && expo start"

**For MacOS** "start": "export NODE_OPTIONS=--openssl-legacy-provider && expo start"

For this project I used NodeJS version v18.18.0

**Hours spent on this project: 5 hours**
