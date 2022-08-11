import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { InputValidState } from 'types';
import { EMAIL_RULE, PASSWORD_RULE } from 'utils/constants';
import Path from 'routes/Path';
import useCheckLogin from 'hooks/useCheckLogin';
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

  const navigate = useNavigate();

  const { isTokenAvailable } = useCheckLogin();

  const checkValidation = (target: string, validationResult: boolean) => {
    setInputValidState((previousState: InputValidState) => ({
      ...previousState,
      [target]: validationResult,
    }));
  };

  async function handleSubmit(event: React.FormEvent) {
    const loginResult = await handleLogin(event);
    if (loginResult) {
      alert('로그인 되었습니다.');
      navigate(Path.Items);
    }
  }

  React.useEffect(() => {
    if (isTokenAvailable) {
      navigate(Path.Items);
    }
  }, [isTokenAvailable]);

  return (
    <main className="main-base">
      <form className="form-base" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="email"
          text="이메일"
          placeholder="ex) abcd@email.com"
          className="login-input-area"
          isValid={inputValidState.email}
          regexRule={EMAIL_RULE}
          checkValidation={checkValidation}
        />
        <FormInput
          type="password"
          name="password"
          text="비밀번호"
          placeholder="8자리 이상"
          className="login-input-area"
          isValid={inputValidState.password}
          regexRule={PASSWORD_RULE}
          checkValidation={checkValidation}
        />
        <div className="flex-center flex-col w-full py-5">
          <FormSubmitButton
            disableCondition={
              !(inputValidState.email && inputValidState.password)
            }
            additionalStyles="mb-3"
            value="로그인"
          />
          <Link to="/signup" className="login-area-buttons bg-red-300">
            회원가입
          </Link>
        </div>
      </form>
    </main>
  );
}

export default React.memo(Login);
