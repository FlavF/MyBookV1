"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    roots: ["<rootDir>/test"],
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testRegex: "(/__test__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: ["<rootDir>/src/app/**/*.ts"]
};
exports.default = config;
