import { HTMLAttributes, ReactNode } from 'react';

import { ButtonProps } from '../button/index.js';
import { IconProps } from '../icon/icon.types.js';

export type PopoverProps = {
  /**
   * Button text
   */
  children?: ReactNode;
  /**
   * Content of popover
   */
  content: string;
  /**
   * Heading for popover box
   */
  heading?: string;
  /**
   * Tag to render
   */
  headingTag?: keyof Pick<JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
  /**
   * Use an icon as the button
   */
  icon?: (props: IconProps) => JSX.Element;
  /**
   * A function for the onClick event
   */
  onClick?: () => void;
  /**
   * Whether popover is open by default
   */
  open?: boolean;
  /**
   * Placement of popover
   */
  placement?: 'top' | 'bottom';
} & HTMLAttributes<Element> &
  Pick<ButtonProps, 'look'>;