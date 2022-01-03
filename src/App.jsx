/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from 'react';
import Loading from "./components/Loading";

const unclickedCSS = css`
  color: black;
  background: gray;
  border-radius: 2em;
  padding: .2em;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;

const clickedCSS = css`
  color: white;
  background: red;
  border-radius: 2em;
  padding: .2em;
  &:hover {
    color: white;
    background: gray;
    cursor: pointer;
  }
`;

function App() {
  const [clicked, setClicked] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(false);

  const handleClick = async () => {
    // const data = (clicked) ? "increment" : "decrement";
    // const fetchOptions = {
    //   method: 'POST',
    //   body: JSON.stringify(data)
    // }
    setLoadingStatus(true);
    setTimeout(() => {
      setLoadingStatus(false);
    }, 1000);
    // fetch("https://localhost:3000/likedAPI", fetchOptions)
    setClicked(!clicked);
  }
  
  return (
    <div>
      {(loadingStatus) ? <Loading /> : (
        (clicked) ? <FavoriteIcon css={clickedCSS} onClick={handleClick}/> : 
        <FavoriteIcon css={unclickedCSS} onClick={handleClick}/>
      )}
    </div>
  );
}

export default App;
