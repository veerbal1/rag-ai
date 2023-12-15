'use client';
import SearchBox from './_components/search-box';
import { useEffect, useState } from 'react';
import QuestionTitle from './_components/question-title';
import PagesFetched from './_components/sources';
import AnswerBox from './_components/answer-box';
import useGoogleQuery from '@/hooks/useGoogleQueries';

export default function Home() {
  const { searchQuery, data, searchGoogle } = useGoogleQuery();

  return (
    <div className="w-screen h-screen max-w-screen-2xl flex items-center flex-col p-8 overflow-x-hidden mx-auto md:px-72">
      <SearchBox onSubmit={searchGoogle} />
      <QuestionTitle title={searchQuery} />
      {/* Searched pages */}
      <PagesFetched data={data} />
      {/* Answer */}
      <AnswerBox />
    </div>
  );
}
