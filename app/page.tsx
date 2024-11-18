import About from "@/components/About";
import Acknowledgements from "@/components/Acknowledgements";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import type { NextPage } from "next";
import Head from "next/head";

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
        <Acknowledgements />
      </main>
      <Footer />
    </>
  );
};

export default Home;
