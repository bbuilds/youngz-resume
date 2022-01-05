import * as React from "react";
import { BiGitPullRequest } from "react-icons/bi";
import { CgGitCommit } from "react-icons/cg";

const GitTrails = ({ numberOfIcons }) => {
  return (
    <div className="flex flex-col justify-center items-center absolute left-0 top-[30px]">
      {Array(numberOfIcons)
        .fill(undefined)
        .map((icon, index) => (
          <CgGitCommit className={`h-6 w-auto opacity-75`} key={index} />
        ))}
    </div>
  );
};

const WorkItem = ({ position, date, company, description, ...other }) => {
  const workExpRef = React.useRef(null);
  const [numbersOfIconsToRender, setnumbersOfIconsToRender] =
    React.useState(10);
  const [isDescriptionExpanded, setIsDescriptionExpanded] =
    React.useState(false);

  const truncatedDescription = description.slice(0, 75).concat("...");

  React.useLayoutEffect(() => {
    if (!workExpRef.current) {
      return;
    }

    setnumbersOfIconsToRender(
      // custom formula just happens to work
      Math.round(workExpRef.current.clientHeight / 10 + 5)
    );
  }, [isDescriptionExpanded, workExpRef]);
  return (
    <div
      className={
        "relative flex flex-col items-start justify-center w-full h-full pl-10 pr-4 overflow-hidden mb-8 lg:w-1/2 lg:mb-12"
      }
      ref={workExpRef}
      {...other}
    >
      <BiGitPullRequest className="absolute top-0 left-0 h-auto w-7 opacity-75" />
      <GitTrails numberOfIcons={numbersOfIconsToRender} />
      <h3 className="font-bold text-xl">{position}</h3>
      <p className="my-2 italic">{company}</p>
      <p className="mb-2 text-sm">{date}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: isDescriptionExpanded ? description : truncatedDescription,
        }}
      ></div>
      <button
        aria-label="expand section to read more"
        onClick={() => setIsDescriptionExpanded((prev) => !prev)}
        className="block underline"
      >
        {isDescriptionExpanded ? null : `Read more`}
      </button>
    </div>
  );
};

export default WorkItem;
