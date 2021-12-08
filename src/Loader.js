import React from "react";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Loader() {
  let color = "#ffffff";

  return (
    <div className="sweet-loading">
      <FadeLoader color={color} css={override} size={150} />
    </div>
  );
}

export default Loader;
