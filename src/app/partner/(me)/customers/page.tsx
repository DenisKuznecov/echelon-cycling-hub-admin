import React from "react";
import { AllCustomersTable } from "../../_components/AllCustomersTable";
import { resolveMyPartner } from "../../_lib/resolvePartner";
import {
  CUSTOMERS_PAGE_SIZE,
  loadPartnerCustomersPage,
} from "../../_lib/loadPartnerCustomers";

export default async function PartnerCustomersPage({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    query?: string;
  }>;
}) {
  const { page: pageParam, query: queryParam } = await searchParams;
  const page = Math.max(1, Number(pageParam) || 1);
  const query = queryParam ?? "";

  const { partner } = await resolveMyPartner();
  const { customers, count } = await loadPartnerCustomersPage(
    partner?.id,
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
