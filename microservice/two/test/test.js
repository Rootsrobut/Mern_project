import autocannon from 'autocannon';


// List of URLs to test
const urls = [
  'http://localhost:3000/',
  'http://localhost:3001/stress-testing'
];

urls.forEach((url) => {
  console.log(`Starting load test on: ${url}`);
  const instance = autocannon({
    url,
    connections: 10,
    duration: 30       
  }, (err, result) => {
    if (err) {
      console.error('Error:', err);
      return;
    }
    console.log(`\nResults for ${url}`);
    console.log('Requests:', result.requests.total);
    console.log('Duration (s):', result.duration);
    autocannon.track(instance, { renderProgressBar: true });
  });
});
