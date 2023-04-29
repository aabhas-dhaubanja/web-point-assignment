import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { Roboto } from "next/font/google";

const quicksand = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <main className={`${quicksand.className} bg-slate-50`}>
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  );
}
