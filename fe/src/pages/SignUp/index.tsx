import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <main className="main-base">
      <form className="form-base p-5">
        <label htmlFor="id_input" className="signup-input-area">
          <span className="w-full h-[30px]">Email</span>
          <input
            type="text"
            name="id_input"
            className="login-input w-full ml-0"
          />
        </label>
        <label htmlFor="password_input" className="signup-input-area">
          <span className="w-full h-[30px]">비밀번호 (8자리 이상)</span>
          <input
            type="password"
            name="password_input"
            className="login-input w-full ml-0"
          />
        </label>
        <label htmlFor="password_check" className="signup-input-area">
          <span className="w-full h-[30px]">비밀번호 확인</span>
          <input
            type="password"
            name="password_check"
            className="login-input w-full ml-0"
          />
        </label>
        <div className="flex-center justify-evenly w-full py-5">
          <input
            type="submit"
            name="login_button"
            value="취소"
            className="login-area-buttons w-1/3 bg-red-300"
          />
          <input
            type="submit"
            name="login_button"
            value="제출"
            className="login-area-buttons w-1/3 bg-blue-300"
          />
        </div>
      </form>
    </main>
  );
}
