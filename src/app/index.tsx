import { Image, StyleSheet, Text, View } from 'react-native'

export default function Index() {
    return (
        <View style={styles.container}>
            <Image 
                source={require("@/assets/img1.png")}
                style={ styles.ilustration}
            />

            <Text style={ styles.title }> Entrar </Text>
                <Text style={ styles.subtitle }> Acesse sua conta com email e senha </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fdfdfd",
        padding: 32
    },

    ilustration: {
        width: "100%",
        height: 330,
        resizeMode: "contain",
        marginTop: 62
    },

    title: {
        fontSize: 32,
        fontWeight: 900
    },

    subtitle: {
        fontSize: 16
    }
})