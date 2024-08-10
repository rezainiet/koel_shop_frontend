import Carousel from "@/components/Carousel";
import Navbar from "@/components/Navbar";
import OurConcern from "@/components/OurConcern";
import OurSpeciality from "@/components/OurSpeciality";
import VideoToAction from "@/components/VideoToAction";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Carousel />
      <VideoToAction />
      <OurSpeciality />
      <OurConcern />
    </main>
  );
}
