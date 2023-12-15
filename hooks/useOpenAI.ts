import { useEffect, useState } from 'react';

const craftPrompt = (
  searchQuery: string,
  links: {
    title: string;
    link: string;
    snippet: string;
  }[]
) => {
  let query: string = `**Search Query:** ${searchQuery}`;
  links.forEach((link, i) => {
    const linkInfo = `**Link ${i + 1}:** ${link.link}
                      **Title:** ${link.title}
                      **Snippet:** ${link.snippet} (Summarized)`;
    query += linkInfo;
  });
  query += `Please summarize the key points of this webpage, focusing on its relevance to the search query.`;
};

function useOpenAI() {
  const [answer, setAnswer] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const summarize = async (searchQuery: string, links: any[]) => {
    console.log('Summarizing...', links);
    const prompt = craftPrompt(searchQuery, links);
    setLoading(true);
    // return response;
    fetch('/api/openai', {
      method: 'POST',
      body: JSON.stringify({ prompt }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        console.log('fetched answer', data.data.content);
        setAnswer(data.data.content);
      });
  };

  return {
    answer,
    loading,
    summarize,
  };
}

export default useOpenAI;
