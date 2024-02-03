import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
const Github = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/HASSAN-TANOLI")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-col justify-center items-center">
      <img src={data.avatar_url} width="300px" height="auto" />
      <h3>Github Name: {data.login}</h3>
      <h3> Github Followers: {data.followers}</h3>
      <h3> Total Repositories: {data.public_repos}</h3>
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/HASSAN-TANOLI");
  return response.json();
};
