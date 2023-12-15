'use client';
import { getSearchResults } from '@/utils/db';
import SearchBox from './_components/search-box';

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center flex-col p-8">
      <SearchBox onSubmit={() => {}} />
    </div>
  );
}
