import { useActions } from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const RepoList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { SearchRepositories } = useActions();

  const { data, error, loading } = useTypedSelector(
    (state: any) => state.repositories
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    SearchRepositories(term);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <>
            {data.map((repo: any) => (
              <li>{repo}</li>
            ))}
            {error && <i>{error}</i>}
          </>
        )}
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default RepoList;
