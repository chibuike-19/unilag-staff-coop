import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import theme from '@/components/theme'
import BackToTheTopButton from '@/components/BacktoTop'
import Head from 'next/head'
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline"; 
import AuthService from '@/context/authContext'
import { Lato, Raleway, Mulish } from "next/font/google";

const mulish = Mulish({ subsets: ["latin"], weight: ["400", "700", "900"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${mulish.className} bg-[#fdfdfd0d]`}>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link href="https://fonts.googleapis.com/css?family=Mooli:regular" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Unique Unilag Staff Cooperative Multipurpose Society is the University of Lagos staff coop with over 2,000 academic and non-academic members"
        />
        <meta
          name="keywords"
          content="unilag, unique unilag, unilag cooperative,unilag staff, unique coop, society, unilag coop"
        />
        <title>
          Official Page - Unique Unilag Staff Cooperative Multipurpose Society
        </title>
        <link rel="shortcut icon" href="/favicon.png" />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="144x144"
          href="/apple-touch-icon-144-precomposed.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="114x114"
          href="/apple-touch-icon-114-precomposed.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="72x72"
          href="/apple-touch-icon-72-precomposed.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          href="/apple-touch-icon-57-precomposed.png"
        />
        <meta
          name="developer"
          content="https://www.linkedin.com/in/emmanuel-obiechina-341298235/"
        />
      </Head>
      <AuthService>
        <ThemeProvider theme={theme}>
          <BackToTheTopButton />
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </AuthService>
    </div>
  );
}
 