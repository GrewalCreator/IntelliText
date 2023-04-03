import AsyncStorage from "@react-native-async-storage/async-storage";
import alert from "./Alert/web-ios-android-Alert";

export const register = async(username, password, navigation) => {
    //TODO: Remove Later. This Is For Testing
    await AsyncStorage.clear();

    username = username.trim();
    password = password.trim();
    try {
        let value = await AsyncStorage.getItem(username);
        if (value === null && username !== '' && password !== ''){
            try {
                let isAdmin = (username === "gurtejgrewal455@gmail.com" && password === "2406FinalProject");

                let userDetails = {email: username, password: password, isAdmin: isAdmin, isActive: false}

                await AsyncStorage.setItem(username, JSON.stringify(userDetails));
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

//https://rapidapi.com/neutrinoapi/api/email-validate/

/*if (value === null && username !== '' && password !== ''){
            const API_KEY = '4a035537eee447f2906bf668b72375d1'
            const url = `https://emailvalidation.abstractapi.com/v1/?api_key=${API_KEY}&email=${username}`
            httpGetAsync(url, async function (callback) {
                console.log(callback)
                let json = JSON.parse(callback);
                if (json.is_valid_format.value === true && json.is_disposable_email.value === false) {
                    try {
                        await AsyncStorage.setItem(username, password);
                        alert('Username and password saved successfully');
                        navigation.navigate("Login")
                    } catch (error) {
                        alert('Error saving username and password: ', error);
                    }
                }else{
                    alert("Invalid Email Provided")
                }
            })
        }*/


/*
function httpGetAsync(url, callback) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
}
*/


/*const axios = require("axios");

const encodedParams = new URLSearchParams();
encodedParams.append("email", "office@mashape.com");

const options = {
  method: 'POST',
  url: 'https://community-neutrino-email-validate.p.rapidapi.com/email-validate',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': 'DVB1IYvOOIgh07SAMWWEEhT47rnWKxiA41BDtUU4FrPmPwqf', //testing key
    'X-RapidAPI-Host': 'community-neutrino-email-validate.p.rapidapi.com'
  },
  data: encodedParams
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});*/