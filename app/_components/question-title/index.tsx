function QuestionTitle({ title }: { title: string }) {
  return (
    <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-light tracking-tight transition-colors first:mt-0 text-left w-full">
      {title}
    </h2>
  );
}

export default QuestionTitle;
