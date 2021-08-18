import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { TodoContextProvider } from 'src/contexts/TodoContext';
import { Header } from 'src/components/common/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TodoContextProvider>
      <Header />
      <main className="md:px-10 pt-14">
        <Component {...pageProps} />
      </main>
    </TodoContextProvider>
  );
}
export default MyApp;
