export const getRegionalLink = (href: string, pathname: string) => {
  const isUS = pathname.startsWith('/us');
  const regionPrefix = isUS ? '/us' : '';
  
  // If it's the home link
  if (href === '/') return isUS ? '/us' : '/';
  
  // If it's already a regional link, return as is
  if (href.startsWith('/us')) return href;
  
  return `${regionPrefix}${href}`;
};

export const getToggleLink = (pathname: string) => {
  const isUS = pathname.startsWith('/us');
  if (isUS) {
    return pathname.replace('/us', '') || '/';
  } else {
    return `/us${pathname === '/' ? '' : pathname}`;
  }
};
