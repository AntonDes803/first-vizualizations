// import { NextResponse } from "next/server";
// import { match as matchLocale } from "@formatjs/intl-localematcher";
// import Negotiator from "negotiator";
// import { i18n } from "@/dictionaries/i18n.config";

// function getLocale(request) {
//   const negotiatorHeaders = {};
//   request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
//   const locales = i18n.locales;
//   let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
//   languages = ["uk", ...languages.filter((lang) => lang !== "uk")];
//   const locale = matchLocale(languages, locales, i18n.defaultLocale);
//   // console.log("matchLocale", matchLocale);

//   return locale;
// }

// export function middleware(request) {
//   const pathname = request.nextUrl.pathname;

//   // ✨ Ігноруємо системні шляхи Next.js
//   if (
//     pathname.startsWith("/_next") ||
//     pathname.startsWith("/api") ||
//     pathname.startsWith("/favicon.ico") ||
//     pathname.startsWith("/sitemap.xml") ||
//     pathname.startsWith("/sitemap.js") ||
//     pathname.startsWith("/robots.txt") ||
//     pathname.startsWith("/robots.js") ||
//     pathname.match(/\.(png|jpg|jpeg|svg|gif|webp|ico|avif)$/)
//   ) {
//     return NextResponse.next();
//   }

//   const pathnameIsMissingLocale = i18n.locales.every(
//     (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
//   );

//   // Redirect if there is no locale
//   if (pathnameIsMissingLocale) {
//     const locale = getLocale(request);

//     if (locale === i18n.defaultLocale) {
//       return NextResponse.rewrite(
//         new URL(
//           `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
//           request.url
//         )
//       );
//     }
//     else {
//       return NextResponse.redirect(
//         new URL(
//           `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
//           request.url
//         )
//       );
//     }
//   }
// }

// // export const config = {
// //   // Matcher ignoring `/_next/` and `/api/`
// //   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// // };

// export const config = {
//   matcher: [
//     "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|robots.js).*)",
//   ],
// };

// todo

// import { NextResponse } from "next/server";
// import { match as matchLocale } from "@formatjs/intl-localematcher";
// import Negotiator from "negotiator";
// import { i18n } from "@/dictionaries/i18n.config";

// function getLocale(request) {
//   const negotiatorHeaders = {};
//   request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
//   const locales = i18n.locales;
//   let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
//   languages = ["uk", ...languages.filter((lang) => lang !== "uk")];
//   return matchLocale(languages, locales, i18n.defaultLocale);
// }

// export function middleware(request) {
//   const { pathname } = request.nextUrl;

//   // ✨ Ігноруємо статичні файли, API та службові шляхи
//   if (
//     pathname.startsWith("/_next") ||
//     pathname.startsWith("/api") ||
//     pathname.startsWith("/favicon.ico") ||
//     pathname.startsWith("/sitemap.xml") ||
//     pathname.startsWith("/sitemap.js") ||
//     pathname.startsWith("/robots.txt") ||
//     pathname.startsWith("/robots.js") ||
//     pathname.match(/\.(png|jpg|jpeg|svg|gif|webp|ico|avif)$/)
//   ) {
//     return NextResponse.next();
//   }

//   // 🧼 Якщо шлях починається з /uk, то редіректим на "чистий"
//   if (pathname === "/uk" || pathname.startsWith("/uk/")) {
//     const cleanPath = pathname.replace(/^\/uk/, "") || "/";
//     return NextResponse.redirect(new URL(cleanPath, request.url));
//   }

//   // 📦 Якщо локаль відсутня в шляху, визначаємо її автоматично
//   const pathnameIsMissingLocale = i18n.locales.every(
//     (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
//   );

//   if (pathnameIsMissingLocale) {
//     const locale = getLocale(request);

//     if (locale === i18n.defaultLocale) {
//       // 👉 Для дефолтної мови (uk) робимо rewrite, без префіксу
//       return NextResponse.rewrite(
//         new URL(`/uk${pathname.startsWith("/") ? "" : "/"}${pathname}`, request.url)
//       );
//     } else {
//       // 👉 Для інших мов (наприклад ru) — редірект
//       return NextResponse.redirect(
//         new URL(`/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, request.url)
//       );
//     }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|robots.js).*)",
//   ],
// };

//  todo 02

// import { NextResponse } from "next/server";
// import { match as matchLocale } from "@formatjs/intl-localematcher";
// import Negotiator from "negotiator";
// import { i18n } from "@/dictionaries/i18n.config";

// function getLocale(request) {
//   const negotiatorHeaders = {};
//   request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
//   const locales = i18n.locales;
//   let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
//   languages = ["uk", ...languages.filter((lang) => lang !== "uk")];
//   return matchLocale(languages, locales, i18n.defaultLocale);
// }

// export function middleware(request) {
//   const { pathname } = request.nextUrl;

//   // ✨ Ігноруємо статичні файли, API та службові шляхи
//   if (
//     pathname.startsWith("/_next") ||
//     pathname.startsWith("/api") ||
//     pathname.startsWith("/favicon.ico") ||
//     pathname.startsWith("/sitemap.xml") ||
//     pathname.startsWith("/sitemap.js") ||
//     pathname.startsWith("/robots.txt") ||
//     pathname.startsWith("/robots.js") ||
//     pathname.match(/\.(png|jpg|jpeg|svg|gif|webp|ico|avif)$/)
//   ) {
//     return NextResponse.next();
//   }

//   // 🧼 Якщо шлях починається з /uk, то редіректим на "чистий"
//   if (pathname === "/uk" || pathname.startsWith("/uk/")) {
//     const cleanPath = pathname.replace(/^\/uk/, "") || "/";
//     return NextResponse.redirect(new URL(cleanPath, request.url));
//   }

//   // 📦 Якщо локаль відсутня в шляху, визначаємо її автоматично
//   const pathnameIsMissingLocale = i18n.locales.every(
//     (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
//   );

//   // Якщо локаль відсутня в шляху
//   if (pathnameIsMissingLocale) {
//     const locale = getLocale(request);

//     // Перевіряємо, чи не редіректимо знову на той самий шлях (для уникнення нескінченних редіректів)
//     if (locale === i18n.defaultLocale) {
//       // 👉 Для дефолтної мови (uk) робимо rewrite, без префіксу
//       if (!pathname.startsWith("/uk")) {
//         return NextResponse.rewrite(
//           new URL(`/uk${pathname.startsWith("/") ? "" : "/"}${pathname}`, request.url)
//         );
//       }
//     } else {
//       // 👉 Для інших мов (наприклад ru) — редірект
//       return NextResponse.redirect(
//         new URL(`/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, request.url)
//       );
//     }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|robots.js).*)",
//   ],
// };

// ! test with GPT

import { NextResponse } from "next/server";
import { i18n } from "@/dictionaries/i18n.config";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Пропускаємо системні файли
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/robots") ||
    pathname.startsWith("/sitemap") ||
    pathname.match(/\.(png|jpg|jpeg|svg|gif|webp|ico|avif)$/)
  ) {
    return NextResponse.next();
  }

  // перевіряє чи є в pathname якась з наших мов
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    // якщо в pathname немає мови (тобто вона наша дефолтна), то жорстко віддаємо дефолтну українську (для правильного запиту)
    return NextResponse.rewrite(
      new URL(`/${i18n.defaultLocale}${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
