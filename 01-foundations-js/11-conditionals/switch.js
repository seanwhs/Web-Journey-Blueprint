// 01-foundations-js/11-conditionals/switch.js

const status = 'pending';

switch (status) {
  case 'pending':
    console.log('Waiting for approval.');
    break; // Stops the code from falling into the next case
  case 'approved':
    console.log('Request granted.');
    break;
  case 'rejected':
    console.log('Request denied.');
    break;
  default: // Similar to the final 'else' in an if-else chain
    console.log('Status unknown.');
}
