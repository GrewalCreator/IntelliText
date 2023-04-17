import AsyncStorage from "@react-native-async-storage/async-storage";
import alert from "./Alert/web-ios-android-Alert";

export const verify = async(username, password, navigation) =>{

    fetch('http://localhost:3000/login')
        .catch(error => console.error(error));


    //Clean Up Entered Info
    username = username.trim();
    password = password.trim();
    try {
        // Check If Account Exists
        let results = await AsyncStorage.getItem(username);
        let userDetails = JSON.parse(results);
        if (userDetails.password !== null && userDetails.password === password) {

            // Update Activity Status
            userDetails.isActive = true;
            await AsyncStorage.setItem(username, JSON.stringify(userDetails));


            // Check Type of User Logging In
            if(userDetails.accessLevel === "admin"){
                navigation.navigate('AdminPortal')
            }else if(userDetails.accessLevel === "dev"){
                // navigation.navigate('EnhancedAdminPortal')
            }
            else if(userDetails.accessLevel === "user"){
                navigation.navigate('Home')
            }else{
                alert("Error Verifying Account")
            }
        }
    } catch (error) {
        alert("Invalid username or password",
            "The username or password you entered may be incorrect");
    }
}