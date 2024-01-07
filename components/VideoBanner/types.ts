export type VideoBannerProps = {
  children?: React.ReactNode;
  src: string;
  placeholder_alt: string;
  placeholder_src: string;
  glow?: boolean;
  style?: {
    [key: string]: string;
  };
  height?: string;
  width?: string;
  id: string;
};
