import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <main>
      <form>
        <label htmlFor="id_input">
          ID:
          <input type="text" name="id_input" />
        </label>
        <label htmlFor="password_input">
          PW:
          <input type="text" name="password_input" />
        </label>
        <input type="submit" name="login_button" value="로그인" />
        <Link to="/signup">회원가입</Link>
      </form>
    </main>
  );
}
