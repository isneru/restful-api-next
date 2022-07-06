import React from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function UserRepos({ repos }) {
  const router = useRouter();
  const { user } = router.query;

  return (
    <div>
      <span>All {user}'s repos</span>
      <ul>
        {repos.map((repo) => {
          return (
            <li key={repo.name}>
              <a href={`./${repo.name}`}>{repo.name}</a>
            </li>
          );
        })}
      </ul>
      <button>
        <a href="./">Go Back</a>
      </button>
    </div>
  );
}

export async function getServerSideProps({ params: { user } }) {
  const repos = await axios.get(`https://api.github.com/users/${user}/repos`);
  return {
    props: { repos: repos.data },
  };
}
