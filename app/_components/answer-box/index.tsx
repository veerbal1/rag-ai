import { TextAlignLeftIcon } from '@radix-ui/react-icons';

function AnswerBox() {
  return (
    <div className="w-full mt-8">
      <h2 className="flex mt-10 items-center scroll-m-20 pb-2 text-xl font-light tracking-tight transition-colors first:mt-0 text-left w-full">
        <TextAlignLeftIcon className="mr-3 font-bold w-6 h-6" />
        Answer
      </h2>
      <div className="w-full min-w-0">
        <p className="leading-normal break-words">
          Artificial Intelligence (AI) is the intelligence of machines or
          software, as opposed to the intelligence of humans or animals. It is a
          field of study in computer science which develops and studies
          intelligent machines. AI technology is widely used throughout
          industry, government, and science. AI encompasses various subfields,
          including machine learning (ML) and deep learning, which allow systems
          to learn and adapt in novel ways from training data. Specific
          applications of AI include expert systems, natural language
          processing, speech recognition, and machine vision.
        </p>
      </div>
    </div>
  );
}

export default AnswerBox;
