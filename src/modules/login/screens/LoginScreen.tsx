import {BackgroundImage,ContainerLogin,LogoImage,LimitedContainer,ContainerLoginScreen, TitleLogin} from "../styles/loginScreenStyle";

import Input from "../../../shared/inputs/input";
import Button from "../../../shared/buttons/Button";

const LoginScreen = () => {
    return <ContainerLoginScreen>
        <BackgroundImage src="./background.png"/>
        <ContainerLogin>
            <LimitedContainer>
            <LogoImage src="./logo.png"/>
            <TitleLogin level={2} type="secondary">
                LOGIN
            </TitleLogin>
            <Input title="Usuário"/>
            <Input title="Senha"/>
            <Button type="primary" margin="64px 0px 16px 0px">Entrar</Button>
            </LimitedContainer>
        </ContainerLogin>
    </ContainerLoginScreen>
};

export default LoginScreen