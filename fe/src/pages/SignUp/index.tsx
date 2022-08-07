import React from 'react';
import FormInput from 'components/FormInput';

export default function Login() {
  return (
    <main className="main-base">
      <form className="form-base p-5">
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
          placeholder="비밀번호는 8자리 이상이어야 합니다."
          className="login-input-area"
        />
        <FormInput
          type="password"
          name="password_check"
          text="비밀번호 확인"
          placeholder="비밀번호를 한 번 더 입력해주세요."
          className="login-input-area"
        />
        <div className="flex-center justify-evenly w-full py-5">
          <button type="button" className="login-area-buttons w-1/3 bg-red-300">
            취소
          </button>
          <input
            type="submit"
            name="submit_signup"
            value="제출"
            className="login-area-buttons w-1/3 bg-blue-300 cursor-pointer"
          />
        </div>
      </form>
    </main>
  );
}
