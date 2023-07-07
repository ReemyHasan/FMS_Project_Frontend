const nextJest = require("next/jest");
const { pathsToModuleNameMapper } = require("ts-jest");
const createJestConfig = nextJest({ dir: "./" });
const customJestConfig = {
  preset: "ts-jest",
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: pathsToModuleNameMapper({ "@/": ["<rootDir>/src/"] }),
  modulePaths: ["<rootDir>"],
  testTimeout: 20000,
};
module.exports = createJestConfig(customJestConfig);
