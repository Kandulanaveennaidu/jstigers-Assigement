import { Login } from '@/components/Login';
import '@/styles/globals.css';
import { Poppins } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from "@/providers/SessionProvider";
import { SessionValidator } from '@/providers/SessionValidator';

const font = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] });

export const metadata = {
  title: 'Vendor Registry',
  description: 'Register vendor details'
}

const RootLayout = async ({ children }) => {

  return (
    <html lang="en">
      <body className={font.className}>
        <SessionProvider>
          <SessionValidator>
            {children}
          </SessionValidator>
        </SessionProvider>
        <Toaster />
      </body>
    </html>
  )
}


export default RootLayout;