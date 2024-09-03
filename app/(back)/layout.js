import { Sidebar } from "./components/sidebar"
import "../(front)/globals.css"
import { AdminNavbar } from "./components/admin-navbar"
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col flex-1">
        <AdminNavbar/>
        <div className="flex flex-1">
          <div className="w-2/12">
            <Sidebar/>
          </div>
          <div className="w-10/12">
              <div className="p-5">
                  {children}
              </div>
          </div>
        </div>
        </div>
        
        </body>
    </html>
  )
}
