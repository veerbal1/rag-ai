import { fakeData } from '@/utils/fake-data';
import { useState } from 'react';

function useGoogleQuery() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<unknown[]>([]);

  const searchGoogle = async (query: string) => {
    // setLoading(true);
    const res = await fetch('/api/search', {
      method: 'POST',
      body: JSON.stringify({ query }),
    });
    const data = await res.json();
    console.log(data);
    if (data.status === 'success') {
      setLoading(false);
      setData(data.data['organic_results']);
    } else {
      setLoading(false);
      setData([]);
    }
  };

  return {
    loading,
    searchQuery: fakeData.search_parameters.q,
    data,
    searchGoogle,
  };
}

export default useGoogleQuery;
