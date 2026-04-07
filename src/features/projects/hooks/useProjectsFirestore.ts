import { useEffect, useMemo, useState } from 'react';
import { fetchAllProjects, type ProjectDetail } from '../services/projectsFirestore';

export function useProjectsFirestore() {
  const [projects, setProjects] = useState<ProjectDetail[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    setIsLoading(true);
    setError(null);
    fetchAllProjects()
      .then((p) => {
        if (!alive) return;
        setProjects(p);
        setIsLoading(false);
      })
      .catch(() => {
        if (!alive) return;
        setError('Failed to load projects');
        setIsLoading(false);
      });
    return () => {
      alive = false;
    };
  }, []);

  return useMemo(
    () => ({ projects, isLoading, error }),
    [projects, isLoading, error],
  );
}

