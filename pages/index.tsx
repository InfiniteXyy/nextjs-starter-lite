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
        className="my-2 border-b-2 border-neutral-200 bg-transparent transition focus:border-blue-400  focus:outline-none dark:border-neutral-600 focus:dark:border-blue-400"
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
