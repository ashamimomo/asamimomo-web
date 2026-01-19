"use client";

import { LegalPopup } from "./LegalPopup";
import { privacyPolicy, termsAndConditions } from "@/lib/legal-data";
import { useLegalStore } from "@/store/legalStore";

export function LegalPopupContainer() {
  const { isPrivacyOpen, closePrivacy, isTermsOpen, closeTerms } =
    useLegalStore();

  return (
    <>
      <LegalPopup
        isOpen={isPrivacyOpen}
        onClose={closePrivacy}
        {...privacyPolicy}
      />
      <LegalPopup
        isOpen={isTermsOpen}
        onClose={closeTerms}
        {...termsAndConditions}
      />
    </>
  );
}
