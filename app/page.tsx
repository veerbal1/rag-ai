'use client';
import { getSearchResults } from '@/utils/db';
import SearchBox from './_components/search-box';
import { useState } from 'react';
import QuestionTitle from './_components/question-title';

export default function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="w-screen h-screen flex items-center flex-col p-8 max-w-7xl mx-auto px-72">
      <SearchBox onSubmit={() => {}} />
      <QuestionTitle title="What is AI?" />
      {/* Searched pages */}
    </div>
  );
}
