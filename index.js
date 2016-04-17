var request = require('request');
request('https://api.meetup.com/Sea-kayakers-friends/events?key=PASTE_YOUR_MEETUP_KEY_HERE&sign=true&status=upcoming', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    //console.log(body) // Show the raw response
    
    var events = JSON.parse(body);
    
    var matchEvent = false;
    if(events){
        console.log('upcoming events:');
        
        events.map(function(event){
         
          if(event.name.toLowerCase().indexOf( 'part b' ) !==-1 || event.name.toLowerCase().indexOf( 'essentials') !==-1 ){
            matchEvent =true;
          }
          if(matchEvent){
            console.log(event.name, ' *');
          }else{
            console.log(event.name);
          }
           
        });
    }
    console.log('');
    console.log('is part b available?: ', matchEvent);

    
  }
})