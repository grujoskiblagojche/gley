type Props = {
  progress: number;
};

export const CircleProgressBar = ({ progress }: Props) => {
  return (
    <div className="progress">
      <span
        className="title"
        data-from="0"
        data-to={progress}
        data-speed="1800"
      >
        {progress}
      </span>
      <div className="overlay"></div>
      <div className="left"></div>
      <div className="right"></div>
    </div>
  );
};
