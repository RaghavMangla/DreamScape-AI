"use client"
import GalleryPage from "@/components/Gallery";
import HomePage from "@/components/Home";
import MusicPlayer from "@/components/MusicPlayer";
import { Button } from "@/components/ui/button";
import Videos from "@/components/Videos";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <section className="relative z-10">
        <HomePage/>
      </section>
      <section className="relative z-10">
        <GalleryPage/>
      </section>
      <section className="relative z-10">
        <Videos/>
      </section>
    </main>
  );
}
