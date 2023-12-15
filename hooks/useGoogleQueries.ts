import { fakeData } from '@/utils/fake-data';
import { useState } from 'react';

function useGoogleQuery({
  onSuccess,
}: {
  onSuccess: (data: unknown[]) => void;
}) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<unknown[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const searchGoogle = async (query: string) => {
    setLoading(true);
    const res = await fetch('/api/serpapi', {
      method: 'POST',
      body: JSON.stringify({ query }),
    });
    const data = await res.json();
    if (data.status === 'success') {
      setLoading(false);
      setData(data.data['organic_results']);
      setSearchQuery(data.data.search_parameters.q);
      onSuccess(data.data['organic_results']);
    } else {
      setLoading(false);
      setData([]);
    }
  };

  return {
    loading,
    searchQuery,
    data,
    searchGoogle,
  };
}

export default useGoogleQuery;
