"use client";

import { ResultsClient } from "@/components/results.client";
import { UploadedImagesProvider } from "@/components/uploaded-images-provider";
import { Suspense } from "react";

const ImagesSkeleton = () => {
  const skeletonIds = [
    "square-1",
    "video-1",
    "portrait-1",
    "square-2",
    "video-2",
    "portrait-2",
    "square-3",
    "video-3",
    "portrait-3",
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

type ColorsTabProps = {
  className?: string;
};

export const ColorsTab = ({ className }: ColorsTabProps) => (
  <div className={className}>
    <UploadedImagesProvider>
      <Suspense fallback={<ImagesSkeleton />}>
        <ResultsClient defaultData={[]} />
      </Suspense>
    </UploadedImagesProvider>
  </div>
);
