import React, { useState } from 'react';
import { DataContext } from "../services/DataContext";

function PagePIT() {
  const [data, setData] = useState(undefined);
  return (
    <>
      <DataContext.Provider value={data}>
        Pagina PIT
      </DataContext.Provider>
    </>
  );
}

export default PagePIT;
