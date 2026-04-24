import React from "react";
import { Loader } from "@/ui/components/Loader";
import { SkeletonText } from "@/ui/components/SkeletonText";

export function PartnerRouteLoading() {
  return (
    <div className="container max-w-none flex w-full flex-col items-start gap-6 bg-default-background pb-12">
      {/* <div className="flex w-full items-center justify-between rounded-md border border-solid border-neutral-border bg-default-background px-4 py-3">
        <SkeletonText size="subheader" className="max-w-48" />
        <div className="flex items-center gap-2">
          <Loader size="small" />
          <span className="text-caption font-caption text-subtext-color">
            Loading data...
          </span>
        </div>
      </div> */}

      <div className="flex w-full flex-wrap items-start rounded-md border border-solid border-neutral-border bg-default-background mobile:flex-col mobile:flex-nowrap">
        {Array.from({ length: 3 }).map((_, index) => (
          <React.Fragment key={index}>
            <div className="flex grow shrink-0 basis-0 flex-col items-center justify-center gap-2 px-4 py-4">
              <SkeletonText size="label" className="w-28" />
              <SkeletonText size="header" className="w-24" />
            </div>
            {index < 2 ? (
              <div className="flex w-px flex-none self-stretch bg-neutral-border mobile:h-px mobile:w-full mobile:flex-none" />
            ) : null}
          </React.Fragment>
        ))}
      </div>

      <div className="flex w-full flex-col items-start gap-4 rounded-md border border-solid border-neutral-border bg-default-background p-4">
        <div className="flex w-full items-center gap-2">
          <SkeletonText size="section-header" className="max-w-40" />
          <SkeletonText size="default" className="ml-auto max-w-56" />
          <SkeletonText size="default" className="max-w-36" />
        </div>
        {Array.from({ length: 6 }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            className="flex w-full items-center gap-3 border-t border-solid border-neutral-border pt-3 first:border-t-0 first:pt-0"
          >
            <SkeletonText size="default" className="max-w-24" />
            <SkeletonText size="default" className="max-w-40" />
            <SkeletonText size="default" className="max-w-32" />
            <SkeletonText size="default" className="max-w-24" />
            <SkeletonText size="default" className="max-w-32" />
            <SkeletonText size="default" className="max-w-20" />
            <SkeletonText size="default" className="max-w-16" />
          </div>
        ))}
      </div>
    </div>
  );
}
