import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { Heading } from "../../components/Typography/Heading";
import { StyledLink } from "../../components/Typography/StyledLink";
import { Button } from "../../components/UI/Button/Button";
import { Container } from "../../components/UI/Container/Container.style";
import { Input } from "../../components/UI/Input/Input";
import { StyledLoginPage } from "./LoginPage.style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface ILoginForm {
  userphone: string;
  userpassword: string;
}

const regexUZB = /^(?:\+998)?(?:\d{2})?(?:\d{7})$/;

const loginFormSchema = yup.object({
  userphone: yup
    .string()
    .matches(regexUZB, "Введите узбекский номер телефона!")
    .required("Обязательное поле!"),
  userpassword: yup
    .string()
    .min(4, "Пароль должен содержать как минимум 4 символа!")
    .required("Обязательное поле!"),
});

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      userphone: "",
      userpassword: "",
    },
  });

  const onLoginSubmit: SubmitHandler<ILoginForm> = (data) => {
    console.table(data);
  };

  return (
    <Container>
      <StyledLoginPage>
        <Heading headingText="Авторизация" />
        <form onSubmit={handleSubmit(onLoginSubmit)}>
          <Controller
            name="userphone"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.userphone ? true : false}
                errorMessage={errors.userphone?.message}
                type="tel"
                placeholder="Номер телефона"
                {...field}
              />
            )}
          />
          <Controller
            name="userpassword"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.userpassword ? true : false}
                errorMessage={errors.userpassword?.message}
                type="password"
                placeholder="Пароль"
                {...field}
              />
            )}
          />
          <Button isPrimary type="submit" buttonText="Войти" />
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
