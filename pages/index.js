import Image from "next/image";
import localFont from "next/font/local";
import Head from "next/head";
import Header from "@/components/Header";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import Login from "@/components/Login";
import { useSession } from "next-auth/react";
import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";
import Widgets from "@/components/Widgets";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  
  // if (!session) return <Login />;
  const {data : session} = useSession()
  console.log(session)
  if (session) {
  return (
    <div className="h-screen bg-gray-100 overflow-hidden"
    >
      <Head>
        <title>Facebook</title>
      </Head>

      <Header/>

      <main className="flex">
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
      
    </div>
  )
}
return (
  <Login/>
)
}

// export async function getServerSideProps(context) {
//   const session = await getServerSession(context.req, context.res, authOptions);
//   return {
//     props: {
//       session,
//     },
//   };
// }