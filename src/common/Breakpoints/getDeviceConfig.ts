import { XS_BREAKPOINT_WIDTH, SM_BREAKPOINT_WIDTH, MD_BREAKPOINT_WIDTH, LG_BREAKPOINT_WIDTH } from './constans';

export type Breakpoint = 'lg' | "md" | "sm" | "xs" | "xxs";

export const getDeviceConfig = (width: number): Breakpoint | undefined => {
    if(width < XS_BREAKPOINT_WIDTH) {
      return 'xxs'
    } else if(width >= XS_BREAKPOINT_WIDTH && width < SM_BREAKPOINT_WIDTH ) {
      return 'xs'
    } else if(width >= SM_BREAKPOINT_WIDTH && width < MD_BREAKPOINT_WIDTH ) {
      return 'sm'
    } else if(width >= MD_BREAKPOINT_WIDTH && width < LG_BREAKPOINT_WIDTH) {
      return 'md'
    } else if(width >= LG_BREAKPOINT_WIDTH) {
      return 'lg'
    }
  };
