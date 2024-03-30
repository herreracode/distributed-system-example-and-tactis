module.exports = {
  testEnvironment: 'node',
  setupFiles: [],
  transform: {},
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
  ],
  moduleNameMapper: {},
  verbose: true,
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],

  // Asegúrate de que Jest solo ejecute pruebas en el directorio "test"
  testMatch: [
    '**/test/**/*.js?(x)', // Ajusta las extensiones de archivo según sea necesario
    '**/?(*.)+(spec|test).js?(x)', // Esto incluye tanto archivos .spec.js como .test.js dentro del directorio test
  ],
};