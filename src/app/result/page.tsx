import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";

import Result from "@/components/page/result/Result";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Search`,
  description: `${SITE_TITLE} - Search`
};

export default function SearchPage() {
  return <>
    <Result />
  </>
}
