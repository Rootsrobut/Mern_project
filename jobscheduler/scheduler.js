const cron = require('cron');
const jobsConfig = require('./jobs.json');
const runJob = require('./hellojob');

const dayMap = {
  Sunday: 0, Monday: 1, Tuesday: 2,
  Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6
};

jobsConfig.forEach((job) => {
  let cronTime;

  switch (job.type) {
    case 'hourly':
      // minute 30 of every hour => "30 * * * *"
      cronTime = `${job.minute} * * * *`;
      break;

    case 'daily':
      // At 14:15 every day => "15 14 * * *"
      cronTime = `${job.minute} ${job.hour} * * *`;
      break;

    case 'weekly':
      // At 10:00 on Wednesday => "0 10 * * 3"
      const dayNum = dayMap[job.dayOfWeek];
      cronTime = `${job.minute} ${job.hour} * * ${dayNum}`;
      break;

    default:
      console.error(`Unknown schedule type: ${job.type}`);
      return;
  }

  const scheduledJob = new cron.CronJob(
    cronTime,
    () => {
      console.log(`Executing job: ${job.id}`);
      runJob(job.output);
    },
    null,
    true
  );

  console.log(`Scheduled ${job.id} with cron: ${cronTime}`);
});
