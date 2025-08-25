'use client';

import { ParallaxProvider } from 'react-scroll-parallax';

export const ParallaxClientWrapper = ({ children }: { children: React.ReactNode }) => {
  return <ParallaxProvider>{children}</ParallaxProvider>;
};
