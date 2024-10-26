const simpleGit = require('simple-git');
const fs = require('fs');
const path = require('path');
const cron = require('node-cron');

// Path to your repository folder (current directory)
const REPO_PATH = path.join(__dirname, './');
const ALGORITHM_PATH = path.join(REPO_PATH, 'algorithm.js');

// Set up simple-git instance
const git = simpleGit(REPO_PATH);

// Function to make a change in algorithm.js
const makeChangeInAlgorithm = () => {
    let content = `
    // Algorithm file modified at ${new Date().toISOString()}
    function add(a, b) {
        return a + b + ${Math.floor(Math.random() * 10)};
    }

    module.exports = add;
    `;

    fs.writeFileSync(ALGORITHM_PATH, content);
    console.log(`Modified algorithm.js at ${new Date().toISOString()}`);
};

// Function to commit and push
const commitAndPush = async () => {
    try {
        console.log('Making a change in algorithm.js...');
        makeChangeInAlgorithm();

        console.log('Adding changes...');
        await git.add('./*');

        console.log('Committing changes...');
        await git.commit('productivity is a capitalistic construct made to feed on the souls of the weak');

        console.log('Pushing changes...');
        await git.push('origin', 'main');

        console.log('Changes pushed!');
    } catch (error) {
        console.error('Error during git operation:', error);
    }
};

// Schedule a task to run every day at 2 PM (or choose your desired interval)
cron.schedule('0 12 * * *', () => {
    console.log('Running scheduled commit...');
    commitAndPush();
});

console.log('Commit bot is running...');