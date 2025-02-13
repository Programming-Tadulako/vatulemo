interface TextFlipProps {
  text: string;
}

export function TextFlip({ text }: TextFlipProps) {
  return (
    <div className="group relative overflow-hidden font-medium">
      <span className="invisible">{text}</span>
      <span className="absolute top-0 left-0 transition-transform duration-500 ease-in-out group-hover:-translate-y-full hover:duration-300">
        {text}
      </span>
      <span className="absolute top-0 left-0 translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 hover:duration-300">
        {text}
      </span>
    </div>
  );
}
