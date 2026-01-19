import { create } from "zustand";

interface LegalState {
  isPrivacyOpen: boolean;
  isTermsOpen: boolean;
  openPrivacy: () => void;
  closePrivacy: () => void;
  openTerms: () => void;
  closeTerms: () => void;
}

export const useLegalStore = create<LegalState>((set) => ({
  isPrivacyOpen: false,
  isTermsOpen: false,
  openPrivacy: () => set({ isPrivacyOpen: true }),
  closePrivacy: () => set({ isPrivacyOpen: false }),
  openTerms: () => set({ isTermsOpen: true }),
  closeTerms: () => set({ isTermsOpen: false }),
}));
