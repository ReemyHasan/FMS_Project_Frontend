export const mockNextUseTranslation = () => {
  jest.mock("next-translate/useTranslation", () => ({
    __esModule: true,
    default: () => ({
      t: (key: string) => key,
      lang: "en",
    }),
  }));

  // Clears the module cache to ensure the new mock implementation is used
  jest.resetModules();
};
