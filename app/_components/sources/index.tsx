import { FileTextIcon } from '@radix-ui/react-icons';
import Card from './source-card';

function PagesFetched({ data }: { data: unknown[] }) {
  return (
    <div className="w-full mt-4">
      <h2 className="flex mt-10 items-center scroll-m-20 pb-2 text-xl font-light tracking-tight transition-colors first:mt-0 text-left w-full">
        <FileTextIcon className="mr-3 font-bold w-6 h-6" />
        Resources
      </h2>
      <div className="w-full flex gap-3 overflow-x-scroll mt-2">
        {data.map((item: any) => (
          <Card
            key={item.position}
            title={item.title}
            source={item.source}
            snippet={item.snippet}
            favicon={item.favicon}
          />
        ))}
      </div>
    </div>
  );
}

export default PagesFetched;
