import { Metadata } from 'next';

const BASE_URL = 'https://reddify.me';

export function getSiloMetadata(path: string, region: 'in' | 'us'): Metadata {
  // Normalize path: remove leading /us if it exists, ensure leading slash
  let cleanPath = path.startsWith('/us') ? path.replace('/us', '') : path;
  if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;
  
  // Ensure home path is just /
  if (cleanPath === '') cleanPath = '/';

  // Construct absolute URLs
  const indiaUrl = `${BASE_URL}${cleanPath === '/' ? '/' : cleanPath}`;
  const usUrl = `${BASE_URL}/us${cleanPath === '/' ? '/' : cleanPath}`;

  const canonical = region === 'in' ? indiaUrl : usUrl;

  return {
    alternates: {
      canonical: canonical,
      languages: {
        'en-in': indiaUrl,
        'en-us': usUrl,
        'x-default': indiaUrl,
      },
    },
  };
}

export function constructMetadata(
  title: string,
  description: string,
  path: string,
  region: 'in' | 'us'
): Metadata {
  const siloMetadata = getSiloMetadata(path, region);
  
  return {
    title: `${title} | Reddify${region === 'us' ? ' US' : ''}`,
    description,
    ...siloMetadata,
  };
}
