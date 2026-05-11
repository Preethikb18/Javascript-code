let browser ='safari';

switch (browser) {
    case 'chrome':
     console.log('launch chrome'); 
        break; // break the switch not case
        case 'edge':
     console.log('launch edge'); 
        break;
        case 'safari':
     console.log('launch safari'); 
        break;
        case 'firefox':
     console.log('launch firefox'); 
       break;

    default:
        console.log('Invalid browser... please pass the right browser');
        break;
}