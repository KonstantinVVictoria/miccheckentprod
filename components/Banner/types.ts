import { RefObject } from "react";

export type BannerProps = {
  children?: React.ReactNode;
  special?: boolean;
  style?: {
    [key: string]: string;
  };
  reference?: RefObject<any>;
};
