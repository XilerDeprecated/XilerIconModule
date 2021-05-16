import * as React from 'react';

import ImageType, { ImageProps, MainImageProps } from '../utils/ImageType';

import Themes from '@xiler/theme';

/**
 * The main image component which gets shared.
 */
const Image: React.FC<MainImageProps> = ({ className, size, Img, color = Themes.dark.secondary[500] }) => (
  <Img className={className} style={{ ...size, fill: color as string }} />
);

/**
 * The Xiler icon.
 *
 * @param props The {@typedef ImageProps} which apply to the img.
 * @returns An image with the Xiler icon.
 */
export const Icon: React.FC<ImageProps> = (props) => <Image Img={ImageType.Icon} {...props} />;

export default Image;
