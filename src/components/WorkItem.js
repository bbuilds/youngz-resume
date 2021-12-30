import * as React from "react";
import { BiGitPullRequest } from "react-icons/bi";
import { CgGitCommit } from "react-icons/cg";

const GitTrails = ({ numberOfIcons }) => {
  return (
    <div className="flex flex-col justify-center items-center absolute l-0 top-[30px]">
      {Array(numberOfIcons)
        .fill(undefined)
        .map((icon, index) => (
          <CgGitCommit key={index} />
        ))}
    </div>
  );
};

const WorkItem = ({ position, year, company, description }) => {
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

    console.table({
      numberOfIcons: workExpRef.current.clientHeight / 10 + 5,
    });
  }, [isDescriptionExpanded, workExpRef]);
  return (
    <div
      className="relative flex flex-col items-start justify-center w-full h-full px-4 overflow-hidden"
      ref={workExpRef}
    >
      <BiGitPullRequest />
      <GitTrails numberOfIcons={numbersOfIconsToRender} />
      <p>{position}</p>
      <p>{company}</p>
      <p>{year}</p>
      <p>
        {isDescriptionExpanded ? description : truncatedDescription}{" "}
        <button
          aria-label="expand section to read more"
          onClick={() => setIsDescriptionExpanded((prev) => !prev)}
        >
          {isDescriptionExpanded ? null : `Read more`}
        </button>
      </p>
    </div>
  );
};

export default WorkItem;
