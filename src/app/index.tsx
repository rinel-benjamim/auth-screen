import { useState } from 'react';

import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { Link, Redirect } from 'expo-router';

import { Button } from '@/components/button';
import { Input } from '@/components/input';

export default function Index() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogIn(){
        if (!email.trim() || !password.trim()) {
            return Alert.alert('Erro', 'Preencha os campos de email e senha para continuar');
        }
        
        Alert.alert('Sucesso', 'Login realizado com sucesso!');
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.select({ ios: 'padding', android: 'height' })}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.container}>
                    <Image
                        source={require("@/assets/img1.png")}
                        style={styles.ilustration}
                    />

                    <Text style={styles.title}> Entrar </Text>
                    <Text style={styles.subtitle}> Acesse sua conta com email e senha </Text>

                    <View style={styles.form}>
                        <Input placeholder='E-mail' keyboardType='email-address' onChangeText={setEmail} />

                        <Input placeholder='Senha' secureTextEntry onChangeText={setPassword} />

                        <Button label='Entrar' onPress={handleLogIn} />
                    </View>

                    <Text style={styles.footerText}>
                        Não tem uma conta? {" "}
                        <Link style={styles.footerLink} href='/signup'>Cadastre-se aqui </Link>
                    </Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fdfdfd",
        padding: 32,

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
    },
    footerLink: {
        color: "#032ad7",
        fontWeight: 700
    }
})