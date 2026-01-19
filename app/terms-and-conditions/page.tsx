import { LegalPageLayout } from "@/components/LegalPageLayout";
import { termsAndConditions } from "@/lib/legal-data";

export const metadata = {
  title: "Terms and Conditions | Ashami Momo",
  description:
    "Terms and Conditions for Ashami Momo - Authentic Himalayan Taste",
};

export default function TermsAndConditionsPage() {
  return <LegalPageLayout {...termsAndConditions} />;
}
