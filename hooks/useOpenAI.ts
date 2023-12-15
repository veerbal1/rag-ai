import { useState } from 'react';

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
    const linkInfo = `

                    ${link.snippet} (Summarized)

                    `;
    query += linkInfo;
  });
  query += `Please this, focusing on its relevance to the search query. Do not mention about search query, snippets etc.`;
  return query;
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
        setLoading(false);
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
