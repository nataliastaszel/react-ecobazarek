import { PasswordElement } from "./PasswordElement";

interface PasswordProps {
  isPasswordLengthValid: boolean;
  isPasswordUpperCaseValid: boolean;
  isPasswordLowerCaseValid: boolean;
  isPasswordDigitValid: boolean;
  isPasswordSpecialCharacterValid: boolean;
  arePasswordTheSame: boolean;
}

export const PasswordValidationInfo = (props: PasswordProps) => {
  const {
    isPasswordLengthValid,
    isPasswordUpperCaseValid,
    isPasswordLowerCaseValid,
    isPasswordSpecialCharacterValid,
    isPasswordDigitValid,
    arePasswordTheSame
  } = props;
  return (
    <div className="w-2/3 text-xs mb-2">
      <p className="mb-2">Hasło musi spełniać następujące wymagania:</p>
      <PasswordElement
        text="Przynajmniej 8 znaków"
        isValid={isPasswordLengthValid}
      />
      <PasswordElement
        text="Przynajmniej jedna duża litera"
        isValid={isPasswordUpperCaseValid}
      />
      <PasswordElement
        text="Przynajmniej jedna mała litera"
        isValid={isPasswordLowerCaseValid}
      />
      <PasswordElement
        text="Przynajmniej jedna liczba"
        isValid={isPasswordDigitValid}
      />
      <PasswordElement
        text="Przynajmniej jeden znak specjalny"
        isValid={isPasswordSpecialCharacterValid}
      />
      <PasswordElement
        text="Hasła muszą być takie same"
        isValid={arePasswordTheSame}
      />
    </div>
  );
};
