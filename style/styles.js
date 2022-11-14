import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    /* SignIn.js, SignUp.js, ResetPassword.js, Home.js */
    container: {
        alignItems: 'center',
        // justifyContent: 'center',
        padding: 20,
    },
    title: {
        alignItems: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        padding: 20,
    },
    title_container: {
        alignItems: 'center',
        // justifyContent: 'center',
        marginTop: -50,
    },
    middle_container: {
        alignItems: 'center',
        padding: 50,
        width: '100%',
        height: 40,
        paddingHorizontal: 10,
        marginVertical: 5,
        borderRadius: 20,
        marginTop: -150,
    },
    button_container: {
        alignItems: 'center',
        padding: 50,
        width: '100%',
        height: 40,
        paddingHorizontal: 10,
        marginVertical: 5,
        borderRadius: 20,
        marginTop: 50,
    },

    /* SignUp.js */
    sign_up_button_container: {
        alignItems: 'center',
        padding: 50,
        width: '100%',
        height: 40,
        paddingHorizontal: 10,
        marginVertical: 5,
        borderRadius: 20,
        marginTop: 180,
    },

    /* InputValue.js */
    input_value_container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        height: 40,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    textInput: {
        height: 35,
        fontSize: 17,
    },
    eyeIcon: {
        height: 35,
        marginLeft: '90%',
        marginTop: -28,
    },

    /* logo in TopHeader.js */
    logo: {
        maxHeight: 200,
        maxWidth: 300,
        marginRight: 20,
        marginBottom: 50,
        marginLeft: 20,
        alignItems: "center",
        justifyContent: "center",
    },
        logo_container: {
        marginRight: 180,
    },

    /* Button.js */
    create_button_container: {
        width: '100%',
        paddingHorizontal: 10,
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
    },
    create_button_container_primaryButton: {
        backgroundColor: '#7BB055',
        marginVertical: 5,
        height: 45,
    },
    create_button_container_foodButton: {
        backgroundColor: '#00BFFF',
        marginVertical: 5,
        height: 45,
    },
    create_button_container_findStoreButton: {
        backgroundColor: '#fc4736',
        marginVertical: 5,
        height: 45,
    },
    create_button_container_secondaryButton: {
        borderColor: '#7BB055',
        borderWidth: 2,
        marginVertical: 5,
        height: 45,
    },
    create_button_container_tertiaryButton: {
        height: 35,
    },
    button_text: {
        height: 35,
        fontWeight: 'bold',
        fontSize: 17,
    },
    button_text_primaryButton: {
        color: 'white',
    },
    button_text_foodButton: {
        color: 'white',
    },
    button_text_findStoreButton: {
        color: 'white',
    },
    button_text_secondaryButton: {
        color: '#7BB055',
    },
    button_text_tertiaryButton: {
        color: '#7BB055',
        fontSize: 15,
    },
})