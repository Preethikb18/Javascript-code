let user = 'user';
switch (user) {
    case 'user':
        console.log('user logging');
        break;
        case 'admin':
        console.log('admin login');
        break;
        case 'customer':
        console.log('customer login');
        case vendor:
        console.log('vendor login');
        break;
        case 'partner':
        console.log('partner login');
        break;
    default:
        break;
}

// localisation switch case

let lang ='eng';
switch (lang) {
    case 'eng':
        console.log('english language');
        break;
        case 'spanish':
        console.log('spanish language');
        break;
       case 'chinses':
        console.log('Chinese language');
        break;
         default:
        console.log('default language');
        break;
}

//api status code

let code ='500';
switch (code) {
    case '401':
        console.log('unauthorised');
        break;
    case '400':
        console.log('Bad request');
        break;
        case '500':
        console.log('Internal server error');
        break;
    default:
        console.log('200 success response');
        break;
}

//