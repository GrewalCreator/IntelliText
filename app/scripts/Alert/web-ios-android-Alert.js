import { Alert, Platform } from 'react-native'

const alertFill = (title, description, options, extra) => {
    const result = window.confirm([title, description].filter(Boolean).join('\n'));

    if (options && Array.isArray(options)) { // check if options is defined and is an array
        const confirmOption = options.find(({ style }) => style !== 'cancel');
        confirmOption && confirmOption.onPress();

        const cancelOption = options.find(({ style }) => style === 'cancel');
        cancelOption && cancelOption.onPress();
    }
};

const alert = Platform.OS === 'web' ? alertFill : Alert.alert

export default alert
