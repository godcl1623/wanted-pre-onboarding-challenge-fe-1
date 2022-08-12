import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EMAIL_RULE, PASSWORD_RULE } from 'utils/constants';
import Path from 'routes/Path';
import { handleSignUp } from 'controllers/index';
import useValidation from 'hooks/useValidation';
import FormInput from 'components/FormInput';
import FormSubmitButton from 'components/FormSubmitButton';

function SignUp() {
  const passwordInput = React.useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();

  const { state, disableCondition, checkValidation } = useValidation('signup');

  async function handleSubmit(event: React.FormEvent) {
    const signUpResult = await handleSignUp(event);
    if (signUpResult) {
      alert('회원가입이 완료되었습니다.');
      navigate(Path.Root);
    }
  }

  async function handleClick() {
    if (window.confirm('회원가입을 취소하시겠습니까?')) {
      navigate(Path.Auth);
    }
  }

  return (
    <main className="main-base">
      <form className="form-base p-5" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="email"
          text="이메일"
          placeholder="ex) abcd@email.com"
          className="login-input-area"
          isValid={state.email}
          regexRule={EMAIL_RULE}
          checkValidation={checkValidation}
        />
        <FormInput
          ref={passwordInput}
          type="password"
          name="password"
          text="비밀번호"
          placeholder="비밀번호는 8자리 이상이어야 합니다."
          className="login-input-area"
          isValid={state.password}
          regexRule={PASSWORD_RULE}
          checkValidation={checkValidation}
        />
        <FormInput
          type="password"
          name="passwordCheck"
          text="비밀번호 확인"
          placeholder="비밀번호를 한 번 더 입력해주세요."
          className="login-input-area"
          isValid={state.passwordCheck}
          // eslint-disable-next-line prefer-regex-literals
          regexRule={
            passwordInput.current
              ? new RegExp(passwordInput.current.value)
              : /(?:)/
          }
          checkValidation={checkValidation}
        />
        <div className="flex-center justify-evenly w-full py-5">
          <button
            type="button"
            className="login-area-buttons w-1/3 bg-red-300"
            onClick={handleClick}
          >
            취소
          </button>
          <FormSubmitButton
            disableCondition={disableCondition}
            value="회원가입"
            additionalStyles="w-1/3"
          />
        </div>
      </form>
    </main>
  );
}

export default React.memo(SignUp);
