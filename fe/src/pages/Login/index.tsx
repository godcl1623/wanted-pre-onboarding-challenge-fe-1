import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { InputValidState } from 'types';
import { EMAIL_RULE, PASSWORD_RULE } from 'utils/constants';
import Path from 'routes/Path';
import useCheckLogin from 'hooks/useCheckLogin';
import { isEqual } from 'utils/capsuledConditions';
import FormInput from 'components/FormInput';
import FormSubmitButton from 'components/FormSubmitButton';
import { handleLogin } from '../../controllers';

function Login() {
  const [inputValidState, setInputValidState] = React.useState<InputValidState>(
    {
      email: false,
      password: false,
    },
  );

  const numberOfValidInputs = Object.values(inputValidState).filter(
    (isInputValid: boolean) => isInputValid,
  ).length;
  const totalInputs = Object.keys(inputValidState).length;

  const navigate = useNavigate();

  const { authenticationToken } = useCheckLogin();

  const checkIfInputValid = (inputName: string, isInputValid: boolean) => {
    setInputValidState((previousState: InputValidState) => ({
      ...previousState,
      [inputName]: isInputValid,
    }));
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const loginResult = await handleLogin(event);
    if (loginResult) {
      alert('로그인 되었습니다.');
      navigate(Path.Todos);
    }
  }

  React.useEffect(() => {
    if (authenticationToken) {
      navigate(Path.Todos);
    }
  }, [authenticationToken, navigate]);

  return (
    <main className="main-base">
      <form className="form-base" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="email"
          text="이메일"
          placeholder="ex) abcd@email.com"
          className="login-input-area"
          regexRule={EMAIL_RULE}
          checkIfInputValid={checkIfInputValid}
        />
        <FormInput
          type="password"
          name="password"
          text="비밀번호"
          placeholder="8자리 이상"
          className="login-input-area"
          regexRule={PASSWORD_RULE}
          checkIfInputValid={checkIfInputValid}
        />
        <div className="flex-center flex-col w-full py-5">
          <FormSubmitButton
            disableCondition={!isEqual(numberOfValidInputs, totalInputs)}
            additionalStyles="mb-3"
            value="로그인"
          />
          <Link to="/auth/signup" className="login-area-buttons bg-red-300">
            회원가입
          </Link>
        </div>
      </form>
    </main>
  );
}

export default React.memo(Login);
