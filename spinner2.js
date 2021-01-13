// process.stdout.write('hello from spinner1.js... \rheyyy\n');

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);
// let delay =100
// const order = (cd)=>{
//   const spinner={

//   }
// }
// setTimeout(() => {
// cd()
// } , delay+200)

const chars = ['|', '/', '-', '\\', '|', '/', '-', '\\'];
const spinner = () =>{
  let delay=200;
  for (let i= 0 ; i < chars.length ; i++){
    setTimeout( ( )=>{
      process.stdout.write(`\r${chars[i]}   `); 
    },delay*(i +1))
  }

}
spinner();