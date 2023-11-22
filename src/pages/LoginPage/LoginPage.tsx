import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { Heading } from "../../components/Typography/Heading";
import { StyledLink } from "../../components/Typography/StyledLink";
import { Button } from "../../components/UI/Button/Button";
import { Container } from "../../components/UI/Container/Container.style";
import { Input } from "../../components/UI/Input/Input";
import { StyledLoginPage } from "./LoginPage.style";

export const LoginPage = () => {
  return (
    <Container>
      <StyledLoginPage>
        <Heading headingText="Авторизация" />
        <form>
          <Input
            isError={false}
            errorMessage="Ошибка!"
            type="tel"
            placeholder="Номер телефона"
          />
          <Input
            isError={true}
            errorMessage="Неверный пароль!"
            type="password"
            placeholder="Пароль"
          />
          <Button isPrimary buttonText="Войти" />
        </form>
        <StyledLink to="/" linkText="Забыли пароль?" />
        <RegistrationInfo
          question="У вас нет аккаунта?"
          linkLabel="Зарегистрироваться"
          linkURL="/registration"
        />
      </StyledLoginPage>
    </Container>
  );
};
