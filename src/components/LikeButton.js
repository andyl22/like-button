/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useCallback, useEffect, useState } from "react";
import Loading from "./Loading";

const unclickedCSS = css`
  color: black;
  background: gray;
  border-radius: 2em;
  padding: 0.2em;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;

const clickedCSS = css`
  color: white;
  background: red;
  border-radius: 2em;
  padding: 0.2em;
  &:hover {
    color: white;
    background: gray;
    cursor: pointer;
  }
`;

export default function LikeButton() {
  const [clicked, setClicked] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(false);

  const handleClick = async () => {
    // setLoadingStatus and setTimeout in handleClick to simulate post wait time. Should be moved to callBackend in real use cases
    setLoadingStatus(true);
    setTimeout(callBackend, 1000);
    setClicked(!clicked);
  };

  const callBackend = useCallback(() => {
    // Using giphy search API in place of a increment/decrement likes count API
    // const data = clicked ? { action: "increment" } : { action: "decrement" };
    fetch(
      "http://api.giphy.com/v1/gifs/search?api_key=Jy2Ju3zlY96ubjreQjn4M6FbXxdh84uU&q=bananas"
    )
      .then((res) => res.json())
      .then((res) => {
        setLoadingStatus(false);
      });
  }, []);

  return (
    <div>
      {loadingStatus ? (
        <Loading />
      ) : clicked ? (
        <FavoriteIcon css={clickedCSS} onClick={handleClick} />
      ) : (
        <FavoriteIcon css={unclickedCSS} onClick={handleClick} />
      )}
    </div>
  );
}
