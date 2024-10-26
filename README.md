# Auto Commit Script

This project is a simple Node.js script that automates commits to a GitHub repository. It periodically modifies a JavaScript file and commits the changes, ensuring your repository stays active.

## Features
- Automatically modifies `algorithm.js` with a timestamp.
- Commits and pushes the changes to the specified branch.
- Uses `pm2` to keep the script running continuously.
- Uses `node-cron` to schedule commits at regular intervals.

## Setup

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd <repository-name>

2. Install Dependencies:
```bash
npm install
```

3. Install pm2 Globally:

If you haven’t installed pm2 yet:

```bash
sudo npm install -g pm2
```


## Usage

1. Configure the Script:

The script is set to run every hour. You can adjust the schedule by editing the cron.schedule expression in auto-commit.js:

```javascript
cron.schedule('0 * * * *', () => {
    console.log('Running scheduled commit...');
    commitAndPush();
});
```

The above expression will trigger the commit function at the top of every hour.

2. Run the Script with pm2:

Start the script with pm2 to ensure it runs in the background:

```bash
pm2 start auto-commit.js
```

3.	Keep Macbook Awake (Optional):
If you’re on macOS and want to prevent your MacBook from sleeping while the script runs:

```bash
caffeinate -i pm2 start auto-commit.js
```


Managing the Process

- View All Running Processes:
```bash
pm2 list
```

- View Logs:
```bash
pm2 logs auto-commit
```

- Restart the Script:
```bash
pm2 restart auto-commit
```

- Stop the Script:
```bash
pm2 stop auto-commit
```

- Delete the Script from pm2:
```bash
pm2 delete auto-commit
```


## How It Works

1. **Automated Changes:** The makeChangeInAlgorithm function in auto-commit.js modifies algorithm.js with a timestamp and a random value to simulate a change.
2. **Committing and Pushing:** The commitAndPush function stages the changes, commits them with a message, and pushes them to the main branch.
3. **Scheduling:** node-cron is used to schedule the commitAndPush function to run automatically every hour (or as configured).

## Customization

- Change the Commit Frequency: Modify the cron.schedule expression in auto-commit.js to adjust when commits happen. For example: *Every 30 minutes: '*/30 * * * *'* *Every day at 3 PM: '0 15 * * *'*
- Edit the Modification Logic: Change the way algorithm.js is modified in the makeChangeInAlgorithm function to fit your needs.


## License

This project is licensed under the MIT License. See the LICENSE file for more details.