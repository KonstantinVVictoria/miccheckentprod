export type SpecialImageProps = {
  parallax?: boolean;
  src: string;
  alt: string;
  style?: {
    [key: string]: string;
  };
  mobile?: boolean;
  desktop?: boolean;
  span?: boolean;
  img_style?: {
    [key: string]: string;
  };
};
