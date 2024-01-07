import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";

import Result_2 from "@/components/result_2";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Search`,
  description: `${SITE_TITLE} - Search`
};

export default function SearchPage() {
  return <>
    <Result_2 />
  </>
}
