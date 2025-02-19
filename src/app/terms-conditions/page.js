"use client";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import TermsConditionsPrimary from "@/components/sections/terms-conditions/TermsConditionsPrimary";

const TermsConditions = () => {
  return (
    <PageWrapper headerStyle={3} footerStyle={3}>
      <TermsConditionsPrimary />
    </PageWrapper>
  );
};

export default TermsConditions;
