import React from "react";
import { notFound } from "next/navigation";
import { AllCustomersTable } from "../../_components/AllCustomersTable";
import { resolvePartnerBySlug } from "../../_lib/resolvePartner";
import {
  CUSTOMERS_PAGE_SIZE,
  loadPartnerCustomersPage,
} from "../../_lib/loadPartnerCustomers";

export default async function PartnerSlugCustomersPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{
    page?: string;
    query?: string;
  }>;
}) {
  const [{ slug }, { page: pageParam, query: queryParam }] = await Promise.all([
    params,
    searchParams,
  ]);
  const page = Math.max(1, Number(pageParam) || 1);
  const query = queryParam ?? "";

  const partner = await resolvePartnerBySlug(slug);
  if (!partner) {
    notFound();
  }

  const { customers, count } = await loadPartnerCustomersPage(
    partner.id,
    page,
    query,
  );
  const totalPages = Math.max(1, Math.ceil(count / CUSTOMERS_PAGE_SIZE));

  return (
    <AllCustomersTable
      customers={customers}
      currentPage={page}
      totalPages={totalPages}
      query={query}
    />
  );
}
