import { useRouter } from 'next/router';

export default function HiName() {
  const name = useRouter().query.name;
  return <div>Hello {name}</div>;
}
