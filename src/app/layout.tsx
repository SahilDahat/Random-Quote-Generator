import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import "bootstrap/dist/css/bootstrap.min.css"; //added bootstrap using https://stackoverflow.com/questions/76089345/where-to-import-bootstrap-js-file-in-next-js-13-using-new-app-directory
import ImportBsJS from "@/components/importBsJS";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Random Quote Generator'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ImportBsJS /> {/* for implementing bootstrap */}
        <div className="container-lg">{children}</div>
      </body>
    </html>
  );
}