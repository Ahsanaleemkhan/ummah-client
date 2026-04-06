'use client';

import { useCallback, useEffect, useState } from 'react';
import { fetchPageContent } from './pageContentApi';

export function usePageContent(pageKey) {
  const [sections, setSections] = useState({});
  const [sharedSections, setSharedSections] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = useCallback(async (force = false) => {
    if (!pageKey) {
      setSections({});
      setSharedSections({});
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const payload = await fetchPageContent(pageKey, { force });
      setSections(payload?.sections || {});
      setSharedSections(payload?.sharedSections || {});
    } catch (nextError) {
      setError(nextError);
      setSections({});
      setSharedSections({});
    } finally {
      setLoading(false);
    }
  }, [pageKey]);

  useEffect(() => {
    load(false);
  }, [load]);

  return {
    sections,
    sharedSections,
    loading,
    error,
    refresh: () => load(true),
  };
}
