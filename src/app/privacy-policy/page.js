"use client";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import PrivacyPolicyPrimary from "@/components/sections/privacy-policy/PrivacyPolicyPrimary";

const PrivacyPolicy = () => {
  return (
    <PageWrapper headerStyle={3} footerStyle={3}>
      <PrivacyPolicyPrimary />
    </PageWrapper>
  );
};

export default PrivacyPolicy;
