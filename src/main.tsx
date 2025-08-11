import { SectionProvider } from "@/components/lib/section-context";
import { ThemeProvider } from "@/components/lib/theme-provider";
import "@/index.css";
import { App } from "@/modules/App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { TranslateProvider } from "./components/lib/translate-context";

const getBrowserLang = (): 'en' | 'es' => {
  const lang = navigator.language || navigator.languages[0] || 'en';
  return lang.startsWith('es') ? 'es' : 'en';
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <TranslateProvider initialLang={getBrowserLang()}>
          <SectionProvider>
            <App />
          </SectionProvider>
        </TranslateProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
