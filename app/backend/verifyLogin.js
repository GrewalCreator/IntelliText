import AsyncStorage from "@react-native-async-storage/async-storage";
import alert from "./Alert/web-ios-android-Alert";

export const verify = async(username, password, navigation) =>{
    username = username.trim();
    password = password.trim();
    try {
        console.log("Verifying . . .")
        const linkedPassword = await AsyncStorage.getItem(username);

        if (linkedPassword !== null && linkedPassword === password) {
            navigation.navigate('Home')
        } else {
            alert("Invalid username or password",
                "The username or password you entered may be incorrect");

        }
    } catch (error) {
        alert("Error Verifying Login",
            "Please Try Again In A Moment");
    }
}