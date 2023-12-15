import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { StarIcon } from '@radix-ui/react-icons';

function SourceCard({
  title,
  source,
  snippet,
  favicon,
}: {
  title: string;
  source: string;
  snippet: string;
  favicon: string;
}) {
  return (
    <Card className="w-[200px] sm:w-fit">
      <CardHeader className="grid items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle className="w-[150px] md:w-[250px] overflow-hidden text-ellipsis whitespace-nowrap">
            {title}
          </CardTitle>
          <CardDescription className="w-[150px] md:w-[250px] overflow-hidden text-ellipsis whitespace-nowrap">
            {snippet}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <img className="mr-1 h-6 w-6" src={favicon} />
            {source.replace(/(https?:\/\/)?(www.)?/g, '')}
          </div>
          <div className="flex items-center">
            <StarIcon className="mr-1 h-3 w-3" />1
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default SourceCard;
