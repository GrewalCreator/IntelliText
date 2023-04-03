import AsyncStorage from "@react-native-async-storage/async-storage";
import alert from "./Alert/web-ios-android-Alert";

export const verify = async(username, password, navigation) =>{
    username = username.trim();
    password = password.trim();
    try {
        console.log("Verifying . . .")
        let results = await AsyncStorage.getItem(username);
        console.log(results)
        let userDetails = JSON.parse(results);
        console.log(userDetails)
        if (userDetails.password !== null && userDetails.password === password) {
            userDetails.isActive = true;

            AsyncStorage.getItem( 'user' )
                .then( () => {
                    userDetails.isActive = true;
                    AsyncStorage.setItem( 'user', JSON.stringify( userDetails ) );
                });


            if(userDetails.isAdmin === true){
                navigation.navigate('AdminPortal')
            }else{
                navigation.navigate('Home')
            }
        } else {
            alert("Invalid username or password",
                "The username or password you entered may be incorrect");

        }
    } catch (error) {
        alert("Error Verifying Login",
            "Please Try Again In A Moment");
    }
}