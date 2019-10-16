import React from 'react';

const SignupForm = ({ onSubmit, onChange, register }) => {
  return (
    <div className="signupForm form">
      <h2>회원가입</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="mbit" required>
          MBTI
        </label>
        <select
          name="mbti"
          id="mbti"
          required
          value={register.mbti}
          onChange={onChange}
        >
          <option value="">mbti를 선택해 주세요~</option>
          <option value="intj">INTJ 용의주도한 전략가</option>
          <option value="intp">INTP 논리적인 사색가</option>
          <option value="entj">ENTJ 대담한 통솔자</option>
          <option value="entp">ENTP 뜨거운 논쟁을 즐기는 변론가</option>
          <option value="infj">INFJ 선의의 옹호자</option>
          <option value="infp">INFP 열정적인 중재자</option>
          <option value="enfj">ENFJ 정의로운 사회운동가</option>
          <option value="enfp">ENFP 재기발랄한 활동가</option>
          <option value="istj">ISTJ 청렴결백한 논리주의자</option>
          <option value="estj">ESTJ 엄격한 관리자</option>
          <option value="esfj">ESFJ 사교적인 외교관</option>
          <option value="istp">ISTP 만능 재주꾼</option>
          <option value="isfp">ISFP 호기심 많은 예술가</option>
          <option value="estp">ESTP 모험을 즐기는 사업가</option>
          <option value="esfp">ESFP 자유로운 영혼의 연예인</option>
        </select>
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          required
          value={register.email}
          onChange={onChange}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          required
          value={register.password}
          onChange={onChange}
        />
        <label htmlFor="passwordConfirm">password</label>
        <input
          type="password"
          name="passwordConfirm"
          required
          value={register.passwordConfirm}
          onChange={onChange}
        />
        <label htmlFor="name">name</label>
        <input
          type="text"
          name="name"
          required
          value={register.name}
          onChange={onChange}
        />
        <button>가입하기</button>
      </form>
    </div>
  );
};

export default SignupForm;