import React from 'react';

const RandomDogs: React.FC = () => {

  return (
    <div>
    <iframe
src="https://random.dog/"
title="Dog"
width={"98%"}
height={"600px"}
>
</iframe>
<button
type="button"
    onClick={() => window.location.reload()}
>
Refresh
</button>
</div>
  );
}

export default RandomDogs
;