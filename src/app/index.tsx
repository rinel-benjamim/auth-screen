import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { Button } from '@/components/button';
import { Input } from '@/components/input';

export default function Index() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    source={require("@/assets/img1.png")}
                    style={styles.ilustration}
                />

                <Text style={styles.title}> Entrar </Text>
                <Text style={styles.subtitle}> Acesse sua conta com email e senha </Text>

                <View style={styles.form}>
                    <Input placeholder='E-mail' keyboardType='email-address' />
                    <Input placeholder='Senha' secureTextEntry />
                    <Button label='Entrar' />
                </View>

                <Text style={styles.footerText}> 
                    Não tem uma conta? Cadastre-se aqui
                </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fdfdfd",
        padding: 32,
        height: 900
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
    },
    form: {
        marginTop: 24,
        gap: 12
    },
    footerText: {
        textAlign: 'center',
        marginTop: 24,
        color: "#585860"
    }
})