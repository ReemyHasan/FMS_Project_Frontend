module.exports = {
  preset: "ts-jest",
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
    "\\.css$": "identity-obj-proxy"
},
};