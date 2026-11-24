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
];

//# sourceMappingURL=components_bookmark-button_tsx_1hr1bh0al_bfi._.js.map