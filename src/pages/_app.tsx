import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { TodoContextProvider } from 'src/contexts/TodoContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TodoContextProvider>
      <Component {...pageProps} />;
    </TodoContextProvider>
  );
}
export default MyApp;
