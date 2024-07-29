import React from 'react';

function App() {
  const value = 'World, this is a test!';
  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/getreacttest`)).json();
      setData(text);
    })();
  });
  return <div>Hello {value} {text} </div>;
}

export default App;
