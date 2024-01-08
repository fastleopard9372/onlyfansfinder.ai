import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";

import Swipe from "@/components/page/swipe/Swipe";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Search`,
  description: `${SITE_TITLE} - Search`
};

export default function SearchPage() {
  return <>
    <Swipe />
  </>
}
