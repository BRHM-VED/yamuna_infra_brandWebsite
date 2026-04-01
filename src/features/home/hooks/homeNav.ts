import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Home page section ids (must match `id` on section elements in `Home.tsx`).
 */
export const HOME_SECTION_IDS = {
  about: 'about',
  knowledge: 'knowledge',
} as const;

export type HomeSectionKey = keyof typeof HOME_SECTION_IDS;

/**
 * Navigation helpers for the global navbar:
 * - On `/`, scrolls smoothly to the target section.
 * - Elsewhere, navigates to `/#sectionId` so `Home` can scroll on mount.
 * - `goToAllProjects` always goes to `/projects`.
 */
export function useHomeNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToElementById = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const goToHomeSection = useCallback(
    (key: HomeSectionKey) => {
      const id = HOME_SECTION_IDS[key];
      if (location.pathname === '/') {
        scrollToElementById(id);
      } else {
        navigate({ pathname: '/', hash: `#${id}` });
      }
    },
    [location.pathname, navigate, scrollToElementById],
  );

  const goToAllProjects = useCallback(() => {
    navigate('/projects');
  }, [navigate]);

  return {
    goToAbout: () => goToHomeSection('about'),
    goToKnowledge: () => goToHomeSection('knowledge'),
    goToAllProjects,
  };
}
