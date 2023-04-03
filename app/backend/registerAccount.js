import AsyncStorage from "@react-native-async-storage/async-storage";
import alert from "./Alert/web-ios-android-Alert";

export const register = async(username, password, navigation) => {

    username = username.trim();
    password = password.trim();
    try {
        let value = await AsyncStorage.getItem(username);
        if (value === null && username !== '' && password !== ''){
            try {
                await AsyncStorage.setItem(username, password);
                alert('Username and password saved successfully');
                navigation.navigate("Login")
            } catch (error) {
                alert('Error saving username and password: ', error);
            }
        }
        else {
            alert("Username May Already Exists", "Please Choose A New Username & Try Again")
        }
    } catch (error) {
        alert("Error Verifying Login",
            "Please Try Again In A Moment");
    }

}
