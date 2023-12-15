import { TextAlignLeftIcon } from '@radix-ui/react-icons';

function AnswerBox({ answer }: { answer: string }) {
  console.log('answer', answer);
  if (!answer) return null;
  return (
    <div className="w-full mt-8">
      <h2 className="flex mt-10 items-center scroll-m-20 pb-2 text-xl font-light tracking-tight transition-colors first:mt-0 text-left w-full">
        <TextAlignLeftIcon className="mr-3 font-bold w-6 h-6" />
        Answer
      </h2>
      <div className="w-full min-w-0">
        <p className="leading-normal break-words">
          {answer || 'No answer found.'}
        </p>
      </div>
    </div>
  );
}

export default AnswerBox;
