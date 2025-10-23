import React from "react";

type Props = {
  someExampleType?: unknown;
};

const App = (props: Props) => {
  const [count, setCount] = React.useState(0);

  console.log({ props });

  return (
    <React.Fragment>
      <div>This app supports typescript, React 18+, Vite, and TailwindCSS.</div>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </React.Fragment>
  );
};

export default App;
