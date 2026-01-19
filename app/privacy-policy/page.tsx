import { LegalPageLayout } from "@/components/LegalPageLayout";
import { privacyPolicy } from "@/lib/legal-data";

export const metadata = {
  title: "Privacy Policy | Ashami Momo",
  description: "Privacy Policy for Ashami Momo - Authentic Himalayan Taste",
};

export default function PrivacyPolicyPage() {
  return <LegalPageLayout {...privacyPolicy} />;
}
