var temp;
// go to google and get data

temp=20;
if(temp<21){
    console.log("it's very cold outside");
}
//
// var isLoggedIn=true;
// var isEmailVerified=true;
// var cardInfo=true;
// if(isLoggedIn){
//     if(isEmailVerified){
//         if(cardInfo){
//             console.log("make purchase")
//         }
//     }
// }
// if(isLoggedIn && isEmailVerified && cardInfo){
//     console.log("confirm purchase")
// }else{
//     console.log("don't allow purchase")
// }
// var authentictaed=true;
// authentictaed ? console.log("authenticated is true") : console.log("authenticatipn failed");
var user="preptest";
switch(user){
    case "admin":
        console.log("u get full access")
        break;
        case "preptest":
            console.log("u hv test prep acces");
            break;
            case "subadmin":
                console.log("ur r subadmin")
                break;
                default:
                    console.log("default acces");
                    break;
}
var user="2";
if(2 == user){
    console.log("condition true");
}
