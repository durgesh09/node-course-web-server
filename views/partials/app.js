// const yargs = require('yargs');
//
 const geocode = require('./geocode/geocode.js');
// const argv = yargs
// .options({
//   a:{
//     demand: true,
//     alias: 'address',
//     describe: 'Address to fetch weather for',
//     string: true
//   }
//   })
//   .help()
//   .alias('help','h')
//   .argv;
//
// console.log(argv);
//
// geocode.geocodeAddress(argv.address, (errorMessage,results) => {
//  if (errorMessage){
//    console.log(errorMessage);
//  }else {
//    console.log(JSON.stringify(results,undefined,2));
//  }
//
// });

const yargs = require('yargs');

const argv = yargs
.options({
  lat:{
      demand: true,
      alias: 'la',
      describe:'Latitude value',
      string: true
  },
  long:{
    demand: true,
    alias: 'lo',
    describe: 'longitude value',
    string: true
  }})
  .help()
  .alias('help','h')
  .argv;

geocode.getTemprature(argv.lat,argv.long, (errorMessage,weatherResults) => {
   if (errorMessage){
     console.log(errorMessage);
   }else {
     console.log(JSON.stringify(weatherResults,undefined,2));

}});


//64d9a907b85691c8ee500b5790124885
//https://api.darksky.net/forecast/64d9a907b85691c8ee500b5790124885/28.508030,77.060140
