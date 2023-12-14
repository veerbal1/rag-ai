import { getSearchResults } from '@/utils/db';
import Image from 'next/image';

export default async function Home() {
  const results = await getSearchResults('san francisco');
  return <div>{results.answer_box.snippet}</div>;
}
