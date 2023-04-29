import { useState } from 'react';
import {
    LoginBody,
    LoginLogo,
    LoginHeader,
    LoginContent,
    LoginContainer,
    LoginTextField,
    LoginLabel,
    LoginInput,
    LoginButton,
} from './styles';
import { validateEmail } from '../../validators';

export function Login(): JSX.Element {
    const [email, setEmail] = useState<string>('');
    const [emailError, setEmailError] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [passwordError, setPasswordError] = useState<boolean>(false);

    const handleEmail = (event: { target: { value: string } }) => {
        const targetValue = event.target.value;
        const { isValid, value } = validateEmail({ email: targetValue });

        setEmailError(!isValid);
        setEmail(value);
    };

    const handlePassword = (event: { target: { value: string } }) => {
        const targetValue = event.target.value;
        const isValid = targetValue && targetValue.length >= 8;

        setPasswordError(!isValid);
        setPassword(targetValue);
    };

    return (
        <LoginContainer>
            <LoginContent>
                <LoginHeader>
                    <LoginLogo src="./src/assets/images/school-notes-logo.png" />
                </LoginHeader>

                <LoginBody>
                    <LoginTextField>
                        <LoginLabel>Email</LoginLabel>
                        <LoginInput
                            value={email}
                            onChange={handleEmail}
                            placeholder="ex: exemplo@email.com"
                            error={emailError}
                        />
                    </LoginTextField>

                    <LoginTextField>
                        <LoginLabel>Senha</LoginLabel>
                        <LoginInput
                            value={password}
                            onChange={handlePassword}
                            placeholder="ex: 12345678"
                            error={passwordError}
                        />
                    </LoginTextField>

                    <LoginButton>Entrar</LoginButton>
                </LoginBody>
            </LoginContent>
        </LoginContainer>
    );
}
