let env = 'DEV';
switch (env) {
    case 'QA':
        
        break;
         case 'DEV':
        console.log("Dev env");
        break;
         case 'STAGE':
           console.log("Stage env");
        break;
         case 'UAT':
           console.log("UAT env");
        break;
         case 'PROD':
           console.log("prod env");
        break;
    default:
        console.log("wrong env");
        break;
}