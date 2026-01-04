import type { Metadata } from "next";
import { Suspense } from "react";
import { Results } from "@/components/results";
import { UploadedImagesProvider } from "@/components/uploaded-images-provider";

export const metadata: Metadata = {
  title: "vectr",
  description: "vectr",
};

const ImagesSkeleton = () => {
  const skeletonIds = [
    "square-1", "video-1", "portrait-1",
    "square-2", "video-2", "portrait-2",
    "square-3", "video-3", "portrait-3"
  ];

  return (
    <div className="columns-3 gap-4">
      {skeletonIds.map((id, idx) => {
        const aspects = [
          "aspect-square", // 1:1
          "aspect-video", // 16:9
          "aspect-[9/16]", // 9:16; needs tailwind support or define this utility in your css
        ];
        const aspect = aspects[idx % aspects.length];
        const className = `mb-4 rounded-xl bg-card p-2 shadow-xl ${aspect}`;
        return <div className={className} key={id} />;
      })}
    </div>
  );
};

const Home = () => (
  <UploadedImagesProvider>
    <div className="container relative mx-auto px-4 py-8">
      <Suspense fallback={<ImagesSkeleton />}>
        <Results />
      </Suspense>
    </div>
  </UploadedImagesProvider>
);

export default Home;
