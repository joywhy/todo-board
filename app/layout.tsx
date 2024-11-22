import type { Metadata } from 'next';
import { FONT_NOTOSANSKR } from '@/public/assets/fonts/index';
import { Toaster } from '@/components/ui/toast/toaster';
/** 스타일 */
import '@/public/style/globals.css';
import '@/public/style/main.scss';

export const metadata: Metadata = {
  title: 'TODO-BOARD 만들기',
  description: 'Shadcn UI 및 Supabase를 활용한 나만의 TODO-BOARD 만들기',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={FONT_NOTOSANSKR.className}>
        {children}
        {/* <div className="page">
          <AsideSection />
          <main className="page__main">{children}</main>
        </div> */}
        <Toaster />
      </body>
    </html>
  );
}
