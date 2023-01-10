import { useState, useEffect } from "react";

const useRepositories = () => {
  const [repositories, setRepositories] = useState(null);

  const fetchRepositories = async () => {
    const res = await fetch(`http://192.168.100.5:5000/api/repositories`);
    const json = await res.json();
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  const repositoriesNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : null;

  return { repositories: repositoriesNodes };
};

export default useRepositories;
