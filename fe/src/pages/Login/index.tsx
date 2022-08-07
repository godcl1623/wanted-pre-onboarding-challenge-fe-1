import React from 'react';
import { Link } from 'react-router-dom';
import FormInput from 'components/FormInput';

export default function Login() {
  return (
    <main className="main-base">
      <form className="form-base">
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
            disabled
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
