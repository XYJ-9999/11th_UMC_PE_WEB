import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { signup } from "../../api/members/signup";
import { checkEmailDuplicate } from "../../api/members/check-email-duplicate";
import { checkNicknameDuplicate } from "../../api/members/check-nickname-duplicate";

// 이메일 형식 검사
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// 영문 대소문자, 숫자, 특수문자(!@#$%^&*)를 모두 포함해 8자 이상
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;

const DEFAULT_FORM = {
  email: "",
  nickname: "",
  password: "",
  passwordConfirm: "",
};

type DefaultFormKey = keyof typeof DEFAULT_FORM;
type DefaultFormValue = (typeof DEFAULT_FORM)[DefaultFormKey];

const DEFAULT_DUPLICATE_CHECK = {
  isChecking: false,
  isAvailable: false,
};

type DuplicateCheckKey = "email" | "nickname";

export function SignupPage() {
  const [form, setForm] = useState(DEFAULT_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [duplicateCheck, setDuplicateCheck] = useState({
    email: DEFAULT_DUPLICATE_CHECK,
    nickname: DEFAULT_DUPLICATE_CHECK,
  });

  // 입력값의 유효성 검사
  const isEmailValid = EMAIL_REGEX.test(form.email.trim());
  const isNicknameValid =
    form.nickname.trim().length >= 2 && form.nickname.trim().length <= 12;
  const isPasswordValid = PASSWORD_REGEX.test(form.password);
  const isPasswordConfirmValid =
    form.passwordConfirm.length > 0 && form.password === form.passwordConfirm;

  // 입력을 시작한 필드에만 오류 표시
  const showEmailError = form.email.length > 0 && !isEmailValid;
  const showNicknameError = form.nickname.length > 0 && !isNicknameValid;
  const showPasswordError = form.password.length > 0 && !isPasswordValid;
  const showPasswordConfirmError =
    form.passwordConfirm.length > 0 && !isPasswordConfirmValid;

  // 모든 입력값이 유효하면 제출 버튼 활성화
  const isFormValid =
    isEmailValid &&
    isNicknameValid &&
    isPasswordValid &&
    isPasswordConfirmValid;

  const canSubmit =
    isFormValid &&
    duplicateCheck.email.isAvailable &&
    duplicateCheck.nickname.isAvailable;

  const handleChangeField = (key: DefaultFormKey, value: DefaultFormValue) => {
    if (key === "email" || key === "nickname") {
      if (duplicateCheck[key].isChecking) return;
      setDuplicateCheck((prev) => ({ ...prev, [key]: DEFAULT_DUPLICATE_CHECK }));
    }
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleCheckDuplicate = async (key: DuplicateCheckKey) => {
    const isValid = key === "email" ? isEmailValid : isNicknameValid;
    if (!isValid || duplicateCheck[key].isChecking) return;

    const label = key === "email" ? "이메일" : "닉네임";
    setDuplicateCheck((prev) => ({
      ...prev,
      [key]: { isChecking: true, isAvailable: false },
    }));

    try {
      const response =
        key === "email"
          ? await checkEmailDuplicate(form.email.trim())
          : await checkNicknameDuplicate(form.nickname.trim());
      const isAvailable = response.available;
      setDuplicateCheck((prev) => ({
        ...prev,
        [key]: { ...prev[key], isAvailable },
      }));
      alert(
        isAvailable
          ? `사용할 수 있는 ${label}이에요.`
          : `이미 사용 중인 ${label}이에요.`,
      );
    } catch {
      setDuplicateCheck((prev) => ({
        ...prev,
        [key]: { ...prev[key], isAvailable: false },
      }));
      alert("중복 확인에 실패했어요. 다시 시도해 주세요.");
    } finally {
      setDuplicateCheck((prev) => ({
        ...prev,
        [key]: { ...prev[key], isChecking: false },
      }));
    }
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const response = await signup({
        email: form.email.trim(),
        nickname: form.nickname.trim(),
        password: form.password,
      });
      alert(response.message);
      // navigate({ to: "/login" });
    } catch {
      alert("회원가입에 실패했어요. 다시 시도해 주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // noValidate는 폼 제출 시 브라우저의 기본 유효성 검사를 끔
  return (
    <main className="flex flex-1 items-center justify-center px-4 py-12">
      <section className="w-full max-w-[430px]">
        <h1 className="mb-4 text-[32px] leading-tight font-extrabold tracking-tight text-[#171a20]">회원가입</h1>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div>
            <label
              htmlFor="signup-email"
              className="mb-1 block text-sm font-semibold"
            >
              이메일
            </label>
            <div className="flex items-center rounded-lg border border-[#e1e4ea] bg-white px-3 focus-within:border-[#4a60df]">
              <input
                id="signup-email"
                type="email"
                value={form.email}
                disabled={duplicateCheck.email.isChecking}
                onChange={(e) => handleChangeField("email", e.target.value)}
                placeholder="name@example.com"
                className="min-w-0 flex-1 h-12 text-sm outline-none placeholder:text-gray-400"
              />
              <button
                type="button"
                disabled={!isEmailValid || duplicateCheck.email.isChecking}
                onClick={() => handleCheckDuplicate("email")}
                className="shrink-0 text-xs font-semibold text-[#3454e5] disabled:opacity-50"
              >
                {duplicateCheck.email.isChecking ? "확인 중" : "중복 확인"}
              </button>
            </div>
            {showEmailError && (
              <p className="mt-1 text-xs text-red-600">
                올바른 이메일 형식으로 입력해 주세요.
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="signup-nickname"
              className="mb-1 block text-sm font-semibold"
            >
              닉네임
            </label>
            <div className="flex items-center rounded-lg border border-[#e1e4ea] bg-white px-3 focus-within:border-[#4a60df]">
              <input
                id="signup-nickname"
                type="text"
                value={form.nickname}
                disabled={duplicateCheck.nickname.isChecking}
                onChange={(e) => handleChangeField("nickname", e.target.value)}
                placeholder="2~12자"
                className="min-w-0 flex-1 h-12 text-sm outline-none placeholder:text-gray-400"
              />
              <button
                type="button"
                disabled={!isNicknameValid || duplicateCheck.nickname.isChecking}
                onClick={() => handleCheckDuplicate("nickname")}
                className="shrink-0 text-xs font-semibold text-[#3454e5] disabled:opacity-50"
              >
                {duplicateCheck.nickname.isChecking ? "확인 중" : "중복 확인"}
              </button>
            </div>
            {showNicknameError && (
              <p className="mt-1 text-xs text-red-600">
                닉네임은 2~12자로 입력해 주세요.
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="signup-password"
              className="mb-1 block text-sm font-semibold"
            >
              비밀번호
            </label>
            <input
              id="signup-password"
              type="password"
              value={form.password}
              onChange={(e) => handleChangeField("password", e.target.value)}
              placeholder="8자 이상"
              className="w-full rounded-lg border border-[#e1e4ea] bg-white px-3 h-12 text-sm outline-none placeholder:text-gray-400 focus:border-[#4a60df]"
            />
            <p
              className={`mt-1 text-xs ${showPasswordError ? "text-red-600" : "text-gray-500"}`}
            >
              영문 대문자·소문자·숫자·특수문자(!@#$%^&amp;*)를 포함해 8자 이상
              입력해 주세요.
            </p>
          </div>

          <div>
            <label
              htmlFor="signup-password-confirm"
              className="mb-1 block text-sm font-semibold"
            >
              비밀번호 확인
            </label>
            <input
              id="signup-password-confirm"
              type="password"
              value={form.passwordConfirm}
              onChange={(e) =>
                handleChangeField("passwordConfirm", e.target.value)
              }
              placeholder="다시 입력"
              className="w-full rounded-lg border border-[#e1e4ea] bg-white px-3 h-12 text-sm outline-none placeholder:text-gray-400 focus:border-[#4a60df]"
            />
            {showPasswordConfirmError && (
              <p className="mt-1 text-xs text-red-600">
                비밀번호가 일치하지 않아요.
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={!canSubmit || isSubmitting}
            className="w-full rounded-lg h-12 bg-[#4a60df] text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "가입 중" : "가입하기"}
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-gray-500">
          이미 계정이 있나요?{" "}
          <Link to="/login" className="font-semibold text-[#3454e5]">로그인</Link>
        </p>
      </section>
    </main>
  );
}
