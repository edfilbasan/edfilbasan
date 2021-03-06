import React from "react";
import BlueContainer from "./BlueContainer.js";
import BlueContent from "./BlueContent.js";

const interests = {
  General:
    "Design Processes \n XR/AR Technology \n Mobile & Desktop UI \n 2005-2008 Web Design \n Photography \n Smash Bros. \n Unironic Dabbing",
  Music: (
    <span>
      I listen to a little and a lot of everything. <br />
      <br /> Check out my{" "}
      <a
        href="https://open.spotify.com/user/12100801348?si=NQ9vxiAyRlK805EnUhNmaQ"
        target="_blank"
        rel="noopener noreferrer"
      >
        playlists.
      </a>
    </span>
  ),
  Movies: "The Room \n Spy Kids \n Citizen Kane",
  Books:
    "The Design Sprint \n Design of Everyday things \n Creative Confidence",
  Heroes: "Mom & Dad \n David Bowie"
};

const Interests = () => {
  return (
    <div>
      <BlueContainer header={"Edfil's Interests"}>
        {Object.keys(interests).map((key, i) => {
          return (
            <BlueContent key={i} title={key}>
              {Object.values(interests)[i]}
            </BlueContent>
          );
        })}
      </BlueContainer>
    </div>
  );
};

export default Interests;
