import StreamVideoProvider from "@/provider/StreamClientProvider"
import { Metadata } from "next";
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "YOOM",
  description: "A video call app",
  icons: {
    icon: '/icons/yoom-logo.svg',
  }
};


const RootLayout = ({children} : { children: ReactNode}) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  )
}

export default RootLayout
