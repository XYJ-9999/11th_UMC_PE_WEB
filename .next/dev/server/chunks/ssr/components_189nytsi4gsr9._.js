module.exports = [
"[project]/components/bookmark-button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookmarkButton",
    ()=>BookmarkButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.6_@babel+core@7.2_babf3f6ae635886ba9874477a494bbbd/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$stores$2f$bookmark$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/stores/bookmark-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cn.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/icon.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function BookmarkButton({ movieId, variant = "overlay", showLabel = false, title, className }) {
    const isBookmarked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$stores$2f$bookmark$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBookmarkStore"])((state)=>state.bookmarkedMovieIds.includes(movieId));
    const toggleBookmark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$stores$2f$bookmark$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBookmarkStore"])((state)=>state.toggleBookmark);
    const ariaLabel = title ? `${title} 북마크 토글` : isBookmarked ? "북마크 해제" : "북마크 추가";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        "aria-pressed": isBookmarked,
        "aria-label": ariaLabel,
        onClick: ()=>toggleBookmark(movieId),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(variant === "detail" && "mt-4 inline-flex items-center gap-2 rounded-md border px-4 py-2 text-xs font-semibold transition-colors", variant === "overlay" && "absolute right-2 top-2 inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors backdrop-blur-sm", variant === "inline" && "inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold transition-colors", variant === "detail" && (isBookmarked ? "border-blue-600 bg-blue-600 text-white" : "border-gray-300 bg-white text-gray-600 hover:bg-gray-100"), variant === "overlay" && (isBookmarked ? "bg-blue-600/90 text-white" : "bg-black/50 text-gray-200 hover:bg-black/70"), variant === "inline" && (isBookmarked ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"), className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                name: isBookmarked ? "bookmark" : "bookmark-outline",
                size: variant === "overlay" ? 20 : 16,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("shrink-0", isBookmarked && "brightness-0 invert")
            }, void 0, false, {
                fileName: "[project]/components/bookmark-button.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            variant === "inline" && "북마크",
            showLabel && (isBookmarked ? "북마크 해제" : "북마크 추가")
        ]
    }, void 0, true, {
        fileName: "[project]/components/bookmark-button.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/movies/review-form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReviewForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.6_@babel+core@7.2_babf3f6ae635886ba9874477a494bbbd/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.6_@babel+core@7.2_babf3f6ae635886ba9874477a494bbbd/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function ReviewForm() {
    const [rating, setRating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [comment, setComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isReviewSaved, setIsReviewSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "mt-3",
        onSubmit: (event)=>{
            event.preventDefault();
            setIsReviewSaved(true);
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-1",
                role: "group",
                "aria-label": "별점 선택",
                children: [
                    1,
                    2,
                    3,
                    4,
                    5
                ].map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-label": `${star}점`,
                        "aria-pressed": rating === star,
                        onClick: ()=>{
                            setRating(star);
                            setIsReviewSaved(false);
                        },
                        className: `flex h-8 w-8 items-center justify-center rounded-md border text-lg transition-colors ${rating >= star ? "border-amber-300 bg-amber-50 text-amber-500" : "border-gray-200 bg-white text-gray-400 hover:bg-gray-100"}`,
                        children: "★"
                    }, star, false, {
                        fileName: "[project]/components/movies/review-form.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/movies/review-form.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "sr-only",
                htmlFor: "movie-review",
                children: "영화 후기"
            }, void 0, false, {
                fileName: "[project]/components/movies/review-form.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                id: "movie-review",
                value: comment,
                onChange: (event)=>{
                    setComment(event.target.value);
                    setIsReviewSaved(false);
                },
                placeholder: "영화를 보고 느낀 점을 남겨보세요.",
                rows: 3,
                className: "mt-2 w-full resize-y rounded-md border border-gray-200 bg-white p-3 text-xs outline-none placeholder:text-gray-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            }, void 0, false, {
                fileName: "[project]/components/movies/review-form.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: rating === 0,
                className: "mt-1 w-full rounded-md bg-gray-900 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300",
                children: isReviewSaved ? "평점 저장 완료" : "평점 저장"
            }, void 0, false, {
                fileName: "[project]/components/movies/review-form.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/movies/review-form.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=components_189nytsi4gsr9._.js.map