import { useEffect, useMemo, useState } from 'react';
import {
  fetchAboutMomentsGallery,
  type AboutMoment,
} from '../services/aboutMomentsFirestore';

export function useAboutMomentsGallery() {
  const [moments, setMoments] = useState<AboutMoment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    setIsLoading(true);
    setError(null);

    fetchAboutMomentsGallery()
      .then((items) => {
        if (!alive) return;
        setMoments(items);
        setIsLoading(false);
      })
      .catch(() => {
        if (!alive) return;
        setError('Failed to load moments gallery');
        setIsLoading(false);
      });

    return () => {
      alive = false;
    };
  }, []);

  return useMemo(
    () => ({ moments, isLoading, error }),
    [moments, isLoading, error],
  );
}
