
// import { NextRequest, NextResponse } from 'next/server';


// export function middleware(request) {
//     // const userEmail = request.cookies.get('userEmail');

//     // // If no userEmail cookie, redirect to the login page
//     // if (!userEmail) {
//     //     return NextResponse.redirect(new URL('/signin', request.url));
//     // }
// const authToken = request.cookies.get("authToken")?.value
//     // Allow access if authenticated
//    const loginUserNotAccess= 
//    request.NextUrl.pathname === "/signin" || 
//    request.NextUrl.pathname === "/signup"
//    if(loginUserNotAccess){
//     if(authToken){
//         NextResponse.redirect(new URL("/", request.url))
//     }
//    }
//    console.log(authToken)
//     // return NextResponse.next(new URL('/signin', request.url));
// }

// export const config = {
//     matcher: "/", // Exclude API and static files
// };

import { NextRequest, NextResponse } from "next/server";

export async function middleware(request) {
  // Read the `userId` cookie from the request
//   const {cookies} = request;

//   const userId = request.cookies.get("userId")?.value;
// //   const cookies = request.headers.get('cookie'); // Get the cookie header
// // const userId = cookies
// //   ?.split('; ') // Split cookies into key-value pairs
// //   .find(cookie => cookie.startsWith('userId=')) // Find the specific cookie
// //   ?.split('=')[1]; // Extract the value of userId

// console.log(userId); // Logs the value of userId if present, otherwise undefined


  

//   console.log("Middleware: userId from cookie =>", userId);

//   const loginUserNotAccess =
//     request.nextUrl.pathname === "/signin" || 
//     request.nextUrl.pathname === "/signup";

//   // If the user is authenticated and tries to access signin/signup, redirect to home
//   if (loginUserNotAccess && userId) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   // If the user is unauthenticated and tries to access protected routes
//   if (!userId && !loginUserNotAccess && !request.nextUrl.pathname.startsWith("/users")) {
//     return NextResponse.redirect(new URL("/signin", request.url));
//   }

  // Allow access if no redirection is required
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/signin", "/signup"],
};


// import { NextRequest, NextResponse } from 'next/server';

// export function middleware(request) {
//   const authToken = request.cookies.get("authToken")?.value;

//   const publicPaths = ["/signin", "/signup"];
//   const isPublicPath = publicPaths.includes(request.nextUrl.pathname);

//   // Redirect authenticated users trying to access public paths
//   if (authToken && isPublicPath) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   // Redirect unauthenticated users trying to access protected paths
//   if (!authToken && !isPublicPath) {
//     return NextResponse.redirect(new URL("/signin", request.url));
//   }

//   // Allow access if no redirection is needed
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/((?!api|_next|static|favicon.ico).*)"], // Apply middleware to all paths except API, _next, static files, and favicon
// };
