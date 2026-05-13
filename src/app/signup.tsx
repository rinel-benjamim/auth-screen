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

import { Link } from 'expo-router';

import { Button } from '@/components/button';
import { Input } from '@/components/input';

export default function Signup() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleSignup() {
        //Here you put your signup logic
        Alert.alert('Signup', 'Success!')
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
                        source={require("@/assets/img2.svg")}
                        style={styles.ilustration}
                    />

                    <Text style={styles.title}>Signup </Text>
                    <Text style={styles.subtitle}>Create your account </Text>

                    <View style={styles.form}>
                        <Input
                            placeholder='Name'
                            onChangeText={setName}
                        />
                        <Input
                            placeholder='E-mail'
                            keyboardType='email-address'
                            onChangeText={setEmail}
                        />
                        <Input
                            placeholder='Password'
                            secureTextEntry
                            onChangeText={setPassword}
                        />
                        <Input
                            placeholder='Confirm Password'
                            secureTextEntry
                            onChangeText={setConfirmPassword}
                        />

                        <Button
                            label='Signup'
                            onPress={handleSignup}                            
                        />
                    </View>

                    <Text style={styles.footerText}>
                        Do you have an account? {" "}
                        <Link style={styles.footerLink} href='/'>Login </Link>
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