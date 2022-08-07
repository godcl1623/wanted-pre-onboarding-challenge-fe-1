import React from 'react';
import { Link } from 'react-router-dom';
import FormInput from 'components/FormInput';
import loginController from './controllers/loginController';

export default function Login() {
  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const formEventTarget = event.target as HTMLFormElement;
    const emailInput = formEventTarget[0] as HTMLInputElement;
    const passwordInput = formEventTarget[1] as HTMLInputElement;
    try {
      const loginResult = await loginController(
        emailInput.value,
        passwordInput.value,
      );
      localStorage.setItem('auth', loginResult.token);
    } catch (error) {
      alert('로그인 정보가 올바르지 않습니다.');
    }
  }
  return (
    <main className="main-base">
      <form className="form-base" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="id_input"
          text="이메일"
          placeholder="ex) abcd@email.com"
          className="login-input-area"
        />
        <FormInput
          type="password"
          name="password_input"
          text="비밀번호"
          placeholder="8자리 이상"
          className="login-input-area"
        />
        <div className="flex-center flex-col w-full py-5">
          <input
            type="submit"
            name="login_button"
            value="로그인"
            // disabled
            className="login-area-buttons mb-3 bg-blue-300 cursor-pointer opacity-50"
          />
          <Link to="/signup" className="login-area-buttons bg-red-300">
            회원가입
          </Link>
        </div>
      </form>
    </main>
  );
}
