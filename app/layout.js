import { Nunito } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
// import { Toaster } from '@/components/ui/sonner';
// import { ExitModal } from '@/components/modals/exit-modal';
// import { lifesModal } from '@/components/modals/lifes-modal';
// import { PracticeModal } from '@/components/modals/practice-modal';
import './globals.css';

const font = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Vitlingo',
  description: 'Vitlingo'
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={font.className}>
{/*          <Toaster />
          <ExitModal />
          <lifesModal />
          <PracticeModal />*/}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
