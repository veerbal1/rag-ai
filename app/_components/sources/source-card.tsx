import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { StarIcon } from '@radix-ui/react-icons';

function SourceCard() {
  return (
    <Card className="w-[200px] sm:w-fit">
      <CardHeader className="grid items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle className="w-[150px] md:w-[250px] overflow-hidden text-ellipsis whitespace-nowrap">
            Artificial intelligence - Wikipedia
          </CardTitle>
          <CardDescription className="w-[150px] md:w-[250px] overflow-hidden text-ellipsis whitespace-nowrap">
            Artificial intelligence (AI) is the simulation of human intelligence
            processes by machines, especially computer systems. Read the full
            definition.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <img
              className="mr-1 h-6 w-6"
              src="https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://wikipedia.org&size=128"
            />
            wikipedia
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
