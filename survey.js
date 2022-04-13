const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = []

rl.question(`What's your name? Nicknames are also acceptable: `, (answer) => {
  profile.push(`${answer}`);
  rl.question(`What's an activity you like doing? `, (answer) => {
    profile.push(`likes the activity ${answer}`);
    rl.question('What do you listen to while doing that? ', (answer) => {
      profile.push(`. He also enjoys listening to ${answer}.`);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)?', (answer) => {
        profile.push(`His favorite time to eat a meal is during ${answer},`);
        rl.question(`What's your favourite thing to eat for that meal?`, (answer) => {
          profile.push(`in which their favorite food is ${answer}.`);
          rl.question('Which sport is your absolute favourite?', (answer) => {
            profile.push(`Their absolute favorite sport is ${answer} ,`);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              profile.push(`and is amazing at ${answer}`);
              console.log(profile.join(" "));
              rl.close();
            });
          });
        });
      });
    });
  });
});