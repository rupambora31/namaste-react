import { useRouteError } from 'react-router-dom';
function Error() {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>⚠ Oops ⚠</h1>
      <h2>Something went wrong!</h2>
      <h3>
        {err.status} : {err.statusText}
      </h3>
      <h4>Message: {err.error.message}</h4>
    </div>
  );
}

export default Error;
