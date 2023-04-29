interface Input {
    email: string;
}

interface Output {
    isValid: boolean;
    value: string;
}

export function validateEmail({ email }: Input): Output {
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isValid: boolean = expression.test(email);

    return { isValid, value: email };
}
