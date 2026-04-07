import { useEffect, useMemo, useState } from 'react';
import { fetchProjectBySlug, type ProjectDetail } from '../services/projectsFirestore';

export function useProjectFirestore(slug: string | undefined) {
  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    setIsLoading(true);
    setError(null);
    setProject(null);
    fetchProjectBySlug(slug ?? '')
      .then((p) => {
        if (!alive) return;
        setProject(p);
        setIsLoading(false);
      })
      .catch(() => {
        if (!alive) return;
        setError('Failed to load project');
        setIsLoading(false);
      });
    return () => {
      alive = false;
    };
  }, [slug]);

  return useMemo(
    () => ({ project, isLoading, error }),
    [project, isLoading, error],
  );
}

