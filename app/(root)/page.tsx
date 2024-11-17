import About from "@/components/About";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>UCLA Poker Club</title>
        <meta
          name="description"
          content="Official website of the UCLA Poker Club"
        />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
      </main>
      <Footer />
    </>
  );
};

export default Home;
