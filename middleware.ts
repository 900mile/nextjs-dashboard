import NextAuth from 'next-auth';
import { authConfig } from './auth.config'; // 將authConfig物件匯入
 
// 使用authConfig物件初始化NextAuth.js並匯出auth屬性。
export default NextAuth(authConfig).auth;
 
// 使用matcher選項來指定它應該在特定路徑上執行
// 好處是，在middleware驗證身份驗證之前，受保護的路由甚至不會開始渲染，從而增強應用程式的安全性和效能。
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};