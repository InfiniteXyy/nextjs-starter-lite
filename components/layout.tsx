import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useIsServer } from '~/hooks';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { setTheme, theme } = useTheme();
  const isServer = useIsServer();
  function toggleDarkMode() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }
  return (
    <div className="text-dark-500 dark:text-light-300 max-w-200 mx-auto w-full p-2 md:p-10">
      <header className="flex items-center space-x-2">
        <nav className="inline-block space-x-2 text-blue-500">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>
        {!isServer && (
          <button onClick={toggleDarkMode} type="button">
            <div className={`${theme === 'dark' ? 'i-[carbon-sun]' : 'i-[carbon-moon]'} text-2xl`} />
          </button>
        )}
      </header>
      <div>{children}</div>
    </div>
  );
}
