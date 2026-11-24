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
"[project]/components/movies/search-form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.6_@babel+core@7.2_babf3f6ae635886ba9874477a494bbbd/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.6_@babel+core@7.2_babf3f6ae635886ba9874477a494bbbd/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.6_@babel+core@7.2_babf3f6ae635886ba9874477a494bbbd/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/icon.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function SearchForm({ query }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [searchText, setSearchText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(query);
    const hasQuery = query.length > 0;
    function handleSubmit(event) {
        event.preventDefault();
        const nextQuery = searchText.trim();
        router.push(nextQuery ? `/search?query=${encodeURIComponent(nextQuery)}` : "/search");
    }
    if (!hasQuery) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "w-full max-w-xl text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "mb-7 text-2xl font-extrabold tracking-tight text-gray-950 sm:text-3xl",
                    children: "어떤 영화를 찾고 있나요?"
                }, void 0, false, {
                    fileName: "[project]/components/movies/search-form.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    role: "search",
                    className: "flex w-full items-center gap-3 rounded-xl border-2 border-gray-800 bg-white px-4 py-2 shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "sr-only",
                            htmlFor: "movie-search",
                            children: "검색어"
                        }, void 0, false, {
                            fileName: "[project]/components/movies/search-form.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            name: "search",
                            className: "shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/components/movies/search-form.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "movie-search",
                            type: "search",
                            value: searchText,
                            onChange: (event)=>setSearchText(event.target.value),
                            placeholder: "예: 스파이더맨",
                            className: "min-w-0 flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-gray-400"
                        }, void 0, false, {
                            fileName: "[project]/components/movies/search-form.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "rounded-lg bg-gray-950 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800",
                            children: "검색"
                        }, void 0, false, {
                            fileName: "[project]/components/movies/search-form.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/movies/search-form.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/movies/search-form.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "mb-5 text-2xl font-extrabold tracking-tight text-gray-950 sm:text-3xl",
                children: "영화 검색"
            }, void 0, false, {
                fileName: "[project]/components/movies/search-form.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                role: "search",
                className: "mb-4 flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "sr-only",
                        htmlFor: "movie-search",
                        children: "검색어"
                    }, void 0, false, {
                        fileName: "[project]/components/movies/search-form.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        name: "search",
                        className: "shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/components/movies/search-form.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "movie-search",
                        type: "search",
                        value: searchText,
                        onChange: (event)=>setSearchText(event.target.value),
                        placeholder: "영화 제목 또는 원제 검색",
                        className: "min-w-0 flex-1 bg-transparent py-2 text-sm outline-none"
                    }, void 0, false, {
                        fileName: "[project]/components/movies/search-form.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    searchText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-label": "검색어 지우기",
                        onClick: ()=>setSearchText(""),
                        className: "px-1 text-xl text-gray-400 hover:text-gray-700",
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/components/movies/search-form.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$babel$2b$core$40$7$2e$2_babf3f6ae635886ba9874477a494bbbd$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "rounded-lg bg-gray-950 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800",
                        children: "다시 검색"
                    }, void 0, false, {
                        fileName: "[project]/components/movies/search-form.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/movies/search-form.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/movies/search-form.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=components_1_e0ah3w9cao0._.js.map