import styled from 'styled-components';

interface InputProps {
    error?: boolean;
}

export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #0097b1;

    * {
        color: black;
    }
`;

export const LoginContent = styled.section`
    background: white;
    border-radius: 10px;
    padding: 20px;
    width: min(400px, 90%);
`;
export const LoginHeader = styled.header`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    margin: 40px 0 60px 0;
`;
export const LoginLogo = styled.img`
    width: 240px;
`;

export const LoginBody = styled.main`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const LoginTextField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;
export const LoginLabel = styled.label`
    font-size: 18px;
`;
export const LoginInput = styled.input<InputProps>`
    border-radius: 4px;
    padding: 4px 6px;
    font-size: 18px;
    outline: none;
    border: 1px solid #0097b1;
    color: #63666b;

    &:focus {
        border: 1px solid ${({ error }) => (error ? '#ed0e0e' : '#0097B1')};
    }
`;

export const LoginButton = styled.button`
    padding: 4px;
    font-size: 18px;
    border: none;
    border-radius: 4px;
    background-color: #0097b1;
    color: #ffffff;
    font-weight: bold;
    transition: 0.2s;
    margin-top: 30px;

    &:hover {
        background-color: #03879b;
    }
`;
