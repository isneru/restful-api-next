import React from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Userdatas({ data }) {
  const router = useRouter();
  const { user, repo } = router.query;

  return (
    <div>
      <p>Repository Name: {data.name}</p>
      <p>Description: {data.description ?? "Doesnt exist"}</p>
      <p>
        URL:{" "}
        <a href={data.html_url} target="_blank">
          {data.html_url}
        </a>
      </p>
      <p>Created At: {data.created_at}</p>
      <p>Deploy Website: {data.homepage ?? "Doesnt exist"}</p>
      <p>Language: {data.language}</p>
      <button>
        <a href="./">Go Back</a>
      </button>
    </div>
  );
}

export async function getServerSideProps({ params: { user, repo } }) {
  const data = await axios.get(`https://api.github.com/repos/${user}/${repo}`);
  return {
    props: { data: data.data },
  };
}
