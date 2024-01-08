import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";

import Search from "@/components/page/search/Search";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Search`,
  description: `${SITE_TITLE} - Search`
};

export default function SearchPage() {
  return <>
    <Search />
  </>
}
