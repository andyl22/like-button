/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import AutorenewIcon from "@mui/icons-material/Autorenew";

const loadingAnimation = css`
  @keyframes spinning {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  animation-name: spinning;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  /* linear | ease | ease-in | ease-out | ease-in-out */
  animation-timing-function: linear;
`;

export default function Loading() {
  return (
    <div>
      <AutorenewIcon css={loadingAnimation} />
    </div>
  );
}
