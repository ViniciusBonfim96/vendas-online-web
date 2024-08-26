import {BackgroundImage,ContainerLogin,LogoImage,LimitedContainer} from "../styles/loginScreenStyle";

const LoginScreen = () => {
    return <div>
        <BackgroundImage src="./background.png"/>
        <ContainerLogin>
            <LimitedContainer>
            <LogoImage src="./logo.png"/>
            </LimitedContainer>
        </ContainerLogin>
    </div>
};

export default LoginScreen