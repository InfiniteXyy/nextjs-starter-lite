import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();
  const [input, setInput] = useState('');

  function navigateHi() {
    router.push({ pathname: `/hi/${input}` });
  }

  return (
    <>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border-dark-500 dark:border-light-600 my-2 border-b-2 bg-transparent transition focus:border-blue-400 focus:outline-none"
        placeholder="Your name"
      />
      <button
        className="ml-2 inline-flex items-center rounded bg-blue-100 py-1 px-4 font-bold transition disabled:opacity-40 dark:bg-blue-600 print:hidden"
        disabled={!input}
        onClick={navigateHi}
      >
        <span>Go</span>
        <div className="i-[carbon-chevron-right] ml-1 print:hidden" />
      </button>
    </>
  );
}
