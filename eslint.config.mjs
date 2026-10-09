import tseslint from "typescript-eslint";
//import { esLintConfigAIDCToolkit } from "@aidc-toolkit/dev";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  ...tseslint.configs.recommended,
  {
  languageOptions: {
    globals: globals.browser,
  },
  plugins: {
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
  },
  rules: {
    "no-alert": "off",
    "no-console": "off",
    ...reactHooks.configs.recommended.rules,
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    // --- ESEMPI DI REGOLE E WARNING PERSONALIZZATI ---
    "no-unused-vars": "off", // Disabilitato a favore della regola TypeScript
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // Warning su variabili inutilizzate
    "@typescript-eslint/no-explicit-any": "warn", // Avvisa se usi il tipo 'any'
    "no-console": ["warn", { allow: ["warn", "error"] }], // Avvisa se usi console.log
    eqeqeq: ["error", "always"], // Errore se non usi === o !==

    // --- REGOLE SPECIFICHE PER GLI HOOKS ---

    // 1. Forza il rispetto delle Regole degli Hooks (chiamate solo al livello principale, non in cicli o condizionali)
    "react-hooks/rules-of-hooks": "error",

    // 2. Verifica le dipendenze specificate negli Hook come useEffect, useCallback, useMemo
    "react-hooks/exhaustive-deps": "warn",
  },
}];
