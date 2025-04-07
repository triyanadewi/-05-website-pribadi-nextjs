import { Inter } from 'next/font/google';
import "./globals.css";
import Layout from '../components/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Website Pribadi',
  description: 'Website pribadi untuk menampilkan proyek dan esai.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Layout>      
          {children}
        </Layout>
      </body>
    </html>
  );
}
