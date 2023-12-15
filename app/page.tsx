'use client';
import SearchBox from './_components/search-box';
import QuestionTitle from './_components/question-title';
import PagesFetched from './_components/sources';
import AnswerBox from './_components/answer-box';
import useGoogleQuery from '@/hooks/useGoogleQueries';
import useOpenAI from '@/hooks/useOpenAI';

export default function Home() {
  const { loading: loadingAnswer, answer, summarize } = useOpenAI();
  const {
    loading: googleQueryLoading,
    searchQuery,
    data,
    searchGoogle,
  } = useGoogleQuery({
    onSuccess: (data) => {
      summarize(searchQuery, data);
    },
  });

  // useEffect(() => {
  //   if (data) {
  //     summarize(searchQuery, data);
  //   }
  // }, [googleQueryLoading]);

  return (
    <div className="w-screen h-screen max-w-screen-2xl flex items-center flex-col p-8 overflow-x-hidden mx-auto md:px-72">
      <SearchBox onSubmit={searchGoogle} />
      {googleQueryLoading ? (
        <div>Loading ...</div>
      ) : (
        <>
          <QuestionTitle title={searchQuery} />
          <PagesFetched data={data} />
        </>
      )}
      {/* Searched pages */}
      {googleQueryLoading || loadingAnswer ? (
        <div>Loading Answer...</div>
      ) : (
        <AnswerBox answer={answer} />
      )}
    </div>
  );
}
