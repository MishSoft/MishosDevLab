import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pb-24">
          <div>Text</div>
          <div>Photo</div>
        </div>
      </div>
    </section>
  );
}
