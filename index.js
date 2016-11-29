#!usr/bin/env node

// simple sms sending command line application using smsgator api
// user would be required to enter the phone number they wish to send the message to, the sender name and message

var figlet = require('figlet');
var chalk = require('chalk');


var request = require('request');
var inquirer = require('inquirer');



process.stdout.write('\033c');

console.log('Hello CLI');

console.log(
	chalk.red(
	figlet.textSync('sms 101', { horizontalLayout: 'full'})
	)
	);
console.log(chalk.yellow('Hello there.....'));
console.log(chalk.yellow('This is our free sms platform.'));
console.log(chalk.green('Do you want to send an sms ?'));
var questions = [
    {
	  name: 'confirm',
      type: 'input',
      message: 'Do you want to send an sms( y/n):',
      validate: function( value ) {
        if (value === 'y') {
          return true;
        } else {
          return 'Thanks for coming to our platform';
        }
      }
    },
	{
      name: 'phonenum',
      type: 'input',
      message: 'Enter the phone number you want to send the message to. Seperate multiple numbers with a comma',
      validate: function(value ) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter the phone number';
        }
      }
    },
    {
      name: 'Sender',
      type: 'input',
      message: 'Enter the name of the sender:',
      validate: function( value ) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter the sender name';
        }
      }
    },
    {
      name: 'message',
      type: 'input',
      message: 'Enter the message:',
      validate: function( value ) {
        if (value.length) {
          return true;
        } else {
          return 'Enter the message you want to send';
        }
      }
    },
  ];

  inquirer.prompt(questions).then(function (answers) {
    

	
	var phonenum =answers.phonenum;
	var sender = answers.Sender;
	var message = answers.message;
	var test ='http://smsgator.com/bulksms?email=mariam3105@gmail.com&password=adeshina86&type=0&dlr=1&destination='+phonenum+'&sender='+sender+'&message='+message+'.'
	
   request(test, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log('Message Sent');//Confirms the message has been sent 
  }
  else{
  	console.log('Not Sent'); 
  }
  
})

});
