'use client';
import SearchBox from './_components/search-box';
import { useState } from 'react';
import QuestionTitle from './_components/question-title';
import PagesFetched from './_components/sources';

export default function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="w-screen h-screen max-w-screen-2xl flex items-center flex-col p-8 overflow-x-hidden mx-auto md:px-72">
      <SearchBox onSubmit={() => {}} />
      <QuestionTitle title="What is AI?" />
      {/* Searched pages */}
      <PagesFetched />
    </div>
  );
}
