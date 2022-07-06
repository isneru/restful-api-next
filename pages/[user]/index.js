import React from "react";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  const { user } = router.query;

  return (
    <>
      <button>
        <a href={`https://github.com/${user}`} target="_blank" rel="noreferrer">
          {user}'s Github
        </a>
      </button>
      <button>
        <a href={`/${user}/repos`}>Check repos</a>
      </button>
      <button>
        <a href="../">Go back</a>
      </button>
    </>
  );
}
