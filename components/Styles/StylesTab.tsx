"use client";

import { ResultsClient } from "@/components/results.client";
import { UploadedImagesProvider } from "@/components/uploaded-images-provider";

type StylesTabProps = {
  className?: string;
};

export const StylesTab = ({ className }: StylesTabProps) => (
	<div className={className}>
		<UploadedImagesProvider>
			<ResultsClient defaultData={[]} />
		</UploadedImagesProvider>
	</div>
);
