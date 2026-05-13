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

import { Link, useRouter } from 'expo-router';

import { Button } from '@/components/button';
import { Input } from '@/components/input';

export default function Index() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    function handleLogIn() {
        //Here you put your login logic
        Alert.alert('Login', 'Success!')

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

                    <Text style={styles.title}>Login </Text>
                    <Text style={styles.subtitle}>Access your account </Text>

                    <View style={styles.form}>
                        <Input placeholder='E-mail' keyboardType='email-address' onChangeText={setEmail} />

                        <Input placeholder='Password' secureTextEntry onChangeText={setPassword} />

                        <Button label='Login' onPress={handleLogIn} />
                    </View>

                    <Text style={styles.footerText}>
                        Don't have an account? {" "}
                        <Link style={styles.footerLink} href='/signup'>Signup </Link>
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