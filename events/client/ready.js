module.exports = client => {
  
  let status = [
    "yeah, im a bot.",
    "first time!"
  ]

  setInterval(function() {
  let statuses = status[Math.floor(Math.random() * status.length)];
  client.user.setActivity(status, {type: "WATCHING"});

  }, 10000)

  console.log(`YES! I am ready as "${client.user.username}"!`);
  
}
