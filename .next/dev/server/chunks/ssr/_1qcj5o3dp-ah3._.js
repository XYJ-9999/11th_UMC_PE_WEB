module.exports = [
"[project]/components/auth/signup-form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SignupForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.6_@babel+core@7.2_babf3f6ae635886ba9874477a494bbbd/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.6_@babel+core@7.2_babf3f6ae635886ba9874477a494bbbd/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.6_@babel+core@7.2_babf3f6ae635886ba9874477a494bbbd/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.6_@babel+core@7.2_babf3f6ae635886ba9874477a494bbbd/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$members$2f$signup$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/members/signup.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$members$2f$check$2d$email$2d$duplicate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/members/check-email-duplicate.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$members$2f$check$2d$nickname$2d$duplicate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/members/check-nickname-duplicate.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
// 이메일 형식 검사
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// 영문 대소문자, 숫자, 특수문자(!@#$%^&*)를 모두 포함해 8자 이상
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
const DEFAULT_FORM = {
    email: "",
    nickname: "",
    password: "",
    passwordConfirm: ""
};
const DEFAULT_DUPLICATE_CHECK = {
    isChecking: false,
    isAvailable: false
};
function SignupForm() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_FORM);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [duplicateCheck, setDuplicateCheck] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        email: DEFAULT_DUPLICATE_CHECK,
        nickname: DEFAULT_DUPLICATE_CHECK
    });
    const isEmailValid = EMAIL_REGEX.test(form.email.trim());
    const isNicknameValid = form.nickname.trim().length >= 2 && form.nickname.trim().length <= 12;
    const isPasswordValid = PASSWORD_REGEX.test(form.password);
    const isPasswordConfirmValid = form.passwordConfirm.length > 0 && form.password === form.passwordConfirm;
    const showEmailError = form.email.length > 0 && !isEmailValid;
    const showNicknameError = form.nickname.length > 0 && !isNicknameValid;
    const showPasswordError = form.password.length > 0 && !isPasswordValid;
    const showPasswordConfirmError = form.passwordConfirm.length > 0 && !isPasswordConfirmValid;
    const canSubmit = isEmailValid && isNicknameValid && isPasswordValid && isPasswordConfirmValid && duplicateCheck.email.isAvailable && duplicateCheck.nickname.isAvailable;
    const handleChangeField = (key, value)=>{
        if (key === "email" || key === "nickname") {
            if (duplicateCheck[key].isChecking) return;
            setDuplicateCheck((prev)=>({
                    ...prev,
                    [key]: DEFAULT_DUPLICATE_CHECK
                }));
        }
        setForm((prev)=>({
                ...prev,
                [key]: value
            }));
    };
    const handleCheckDuplicate = async (key)=>{
        const isValid = key === "email" ? isEmailValid : isNicknameValid;
        if (!isValid || duplicateCheck[key].isChecking) return;
        const label = key === "email" ? "이메일" : "닉네임";
        setDuplicateCheck((prev)=>({
                ...prev,
                [key]: {
                    isChecking: true,
                    isAvailable: false
                }
            }));
        try {
            const response = key === "email" ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$members$2f$check$2d$email$2d$duplicate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkEmailDuplicate"])(form.email.trim()) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$members$2f$check$2d$nickname$2d$duplicate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkNicknameDuplicate"])(form.nickname.trim());
            const isAvailable = response.available;
            setDuplicateCheck((prev)=>({
                    ...prev,
                    [key]: {
                        ...prev[key],
                        isAvailable
                    }
                }));
            alert(isAvailable ? `사용할 수 있는 ${label}이에요.` : `이미 사용 중인 ${label}이에요.`);
        } catch  {
            setDuplicateCheck((prev)=>({
                    ...prev,
                    [key]: {
                        ...prev[key],
                        isAvailable: false
                    }
                }));
            alert("중복 확인에 실패했어요. 다시 시도해 주세요.");
        } finally{
            setDuplicateCheck((prev)=>({
                    ...prev,
                    [key]: {
                        ...prev[key],
                        isChecking: false
                    }
                }));
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!canSubmit || isSubmitting) return;
        setIsSubmitting(true);
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$members$2f$signup$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signup"])({
                email: form.email.trim(),
                nickname: form.nickname.trim(),
                password: form.password
            });
            alert(response.message);
            router.push("/login");
        } catch  {
            alert("회원가입에 실패했어요. 다시 시도해 주세요.");
        } finally{
            setIsSubmitting(false);
        }
    };
    const fieldClass = "h-12 w-full rounded-lg border border-[#e1e4ea] bg-white px-3 text-sm outline-none placeholder:text-gray-400 focus:border-[#4a60df]";
    const wrapClass = "flex items-center rounded-lg border border-[#e1e4ea] bg-white px-3 focus-within:border-[#4a60df]";
    const inputClass = "h-12 min-w-0 flex-1 text-sm outline-none placeholder:text-gray-400";
    const checkClass = "shrink-0 text-xs font-semibold text-[#3454e5] disabled:opacity-50";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                noValidate: true,
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "signup-email",
                                className: "mb-1 block text-sm font-semibold",
                                children: "이메일"
                            }, void 0, false, {
                                fileName: "[project]/components/auth/signup-form.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: wrapClass,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "signup-email",
                                        type: "email",
                                        value: form.email,
                                        disabled: duplicateCheck.email.isChecking,
                                        onChange: (e)=>handleChangeField("email", e.target.value),
                                        placeholder: "name@example.com",
                                        className: inputClass
                                    }, void 0, false, {
                                        fileName: "[project]/components/auth/signup-form.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: !isEmailValid || duplicateCheck.email.isChecking,
                                        onClick: ()=>handleCheckDuplicate("email"),
                                        className: checkClass,
                                        children: duplicateCheck.email.isChecking ? "확인 중" : "중복 확인"
                                    }, void 0, false, {
                                        fileName: "[project]/components/auth/signup-form.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/auth/signup-form.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            showEmailError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-xs text-red-600",
                                children: "올바른 이메일 형식으로 입력해 주세요."
                            }, void 0, false, {
                                fileName: "[project]/components/auth/signup-form.tsx",
                                lineNumber: 132,
                                columnNumber: 30
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/auth/signup-form.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "signup-nickname",
                                className: "mb-1 block text-sm font-semibold",
                                children: "닉네임"
                            }, void 0, false, {
                                fileName: "[project]/components/auth/signup-form.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: wrapClass,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "signup-nickname",
                                        type: "text",
                                        value: form.nickname,
                                        disabled: duplicateCheck.nickname.isChecking,
                                        onChange: (e)=>handleChangeField("nickname", e.target.value),
                                        placeholder: "2~12자",
                                        className: inputClass
                                    }, void 0, false, {
                                        fileName: "[project]/components/auth/signup-form.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: !isNicknameValid || duplicateCheck.nickname.isChecking,
                                        onClick: ()=>handleCheckDuplicate("nickname"),
                                        className: checkClass,
                                        children: duplicateCheck.nickname.isChecking ? "확인 중" : "중복 확인"
                                    }, void 0, false, {
                                        fileName: "[project]/components/auth/signup-form.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/auth/signup-form.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this),
                            showNicknameError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-xs text-red-600",
                                children: "닉네임은 2~12자로 입력해 주세요."
                            }, void 0, false, {
                                fileName: "[project]/components/auth/signup-form.tsx",
                                lineNumber: 156,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/auth/signup-form.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "signup-password",
                                className: "mb-1 block text-sm font-semibold",
                                children: "비밀번호"
                            }, void 0, false, {
                                fileName: "[project]/components/auth/signup-form.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "signup-password",
                                type: "password",
                                value: form.password,
                                onChange: (e)=>handleChangeField("password", e.target.value),
                                placeholder: "8자 이상",
                                className: fieldClass
                            }, void 0, false, {
                                fileName: "[project]/components/auth/signup-form.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `mt-1 text-xs ${showPasswordError ? "text-red-600" : "text-gray-500"}`,
                                children: "영문 대문자·소문자·숫자·특수문자(!@#$%^&*)를 포함해 8자 이상 입력해 주세요."
                            }, void 0, false, {
                                fileName: "[project]/components/auth/signup-form.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/auth/signup-form.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "signup-password-confirm",
                                className: "mb-1 block text-sm font-semibold",
                                children: "비밀번호 확인"
                            }, void 0, false, {
                                fileName: "[project]/components/auth/signup-form.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "signup-password-confirm",
                                type: "password",
                                value: form.passwordConfirm,
                                onChange: (e)=>handleChangeField("passwordConfirm", e.target.value),
                                placeholder: "다시 입력",
                                className: fieldClass
                            }, void 0, false, {
                                fileName: "[project]/components/auth/signup-form.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this),
                            showPasswordConfirmError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-xs text-red-600",
                                children: "비밀번호가 일치하지 않아요."
                            }, void 0, false, {
                                fileName: "[project]/components/auth/signup-form.tsx",
                                lineNumber: 184,
                                columnNumber: 40
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/auth/signup-form.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: !canSubmit || isSubmitting,
                        className: "h-12 w-full rounded-lg bg-[#4a60df] text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50",
                        children: isSubmitting ? "가입 중" : "가입하기"
                    }, void 0, false, {
                        fileName: "[project]/components/auth/signup-form.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/auth/signup-form.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-center text-xs text-gray-500",
                children: [
                    "이미 계정이 있나요?",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/login",
                        className: "font-semibold text-[#3454e5]",
                        children: "로그인"
                    }, void 0, false, {
                        fileName: "[project]/components/auth/signup-form.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/auth/signup-form.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/auth/signup-form.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/api/api-client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiClient",
    ()=>apiClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$2$2e$2$2e$0$2f$node_modules$2f$ky$2f$distribution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ky@2.2.0/node_modules/ky/distribution/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/stores/auth-store.ts [app-ssr] (ecmascript)");
;
;
const apiClient = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$2$2e$2$2e$0$2f$node_modules$2f$ky$2f$distribution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].create({
    prefix: ("TURBOPACK compile-time value", "http://localhost:3000") || undefined,
    hooks: {
        beforeRequest: [
            ({ request })=>{
                const accessToken = __TURBOPACK__imported__module__$5b$project$5d2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().accessToken;
                if (accessToken) request.headers.set("Authorization", `Bearer ${accessToken}`);
            }
        ]
    }
});
}),
"[project]/lib/api/members/check-email-duplicate.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkEmailDuplicate",
    ()=>checkEmailDuplicate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/api-client.ts [app-ssr] (ecmascript)");
;
function checkEmailDuplicate(email) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`members/email/${encodeURIComponent(email)}`).json();
}
}),
"[project]/lib/api/members/check-nickname-duplicate.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkNicknameDuplicate",
    ()=>checkNicknameDuplicate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/api-client.ts [app-ssr] (ecmascript)");
;
function checkNicknameDuplicate(nickname) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`members/nickname/${encodeURIComponent(nickname)}`).json();
}
}),
"[project]/lib/api/members/signup.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "signup",
    ()=>signup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/api-client.ts [app-ssr] (ecmascript)");
;
function signup(body) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("members/signup", {
        json: body
    }).json();
}
}),
];

//# sourceMappingURL=_1qcj5o3dp-ah3._.js.map