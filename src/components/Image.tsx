import * as React from 'react';

import ImageType, { ImageProps, MainImageProps } from '../utils/ImageType';

import Themes from '@xiler/theme';

/**
 * The main image component which gets shared.
 */
const Image: React.FC<MainImageProps> = ({ className, size, Img, color = Themes.dark.secondary[500] }) => (
  <Img className={className} width={size?.width ?? 'auto'} height={size?.height ?? 'auto'} fill={color} />
);

/**
 * The Xiler icon.
 *
 * @param props The {@typedef ImageProps} which apply to the img.
 * @returns An image with the Xiler icon.
 */
export const Icon: React.FC<ImageProps> = (props) => <Image Img={ImageType.Icon} {...props} />;

/**
 * The dashboard icon.
 *
 * @param props The {@typedef ImageProps} which apply to the img.
 * @returns An image with the dashboard icon.
 */
export const DashboardIcon: React.FC<ImageProps> = (props) => <Image Img={ImageType.DashboardIcon} {...props} />;

/**
 * The documentation icon.
 *
 * @param props The {@typedef ImageProps} which apply to the img.
 * @returns An image with the documentation icon.
 */
export const DocumentationIcon: React.FC<ImageProps> = (props) => (
  <Image Img={ImageType.DocumentationIcon} {...props} />
);

/**
 * The applications icon.
 *
 * @param props The {@typedef ImageProps} which apply to the img.
 * @returns An image with the applications icon.
 */
export const ApplicationsIcon: React.FC<ImageProps> = (props) => <Image Img={ImageType.ApplicationsIcon} {...props} />;

/**
 * The inbox icon.
 *
 * @param props The {@typedef ImageProps} which apply to the img.
 * @returns An image with the inbox icon.
 */
export const InboxIcon: React.FC<ImageProps> = (props) => <Image Img={ImageType.InboxIcon} {...props} />;

/**
 * The bell icon.
 *
 * @param props The {@typedef ImageProps} which apply to the img.
 * @returns An image with the bell icon.
 */
export const BellIcon: React.FC<ImageProps> = (props) => <Image Img={ImageType.BellIcon} {...props} />;

/**
 * The settings icon.
 *
 * @param props The {@typedef ImageProps} which apply to the img.
 * @returns An image with the settings icon.
 */
export const SettingsIcon: React.FC<ImageProps> = (props) => <Image Img={ImageType.SettingsIcon} {...props} />;

/**
 * The search icon.
 *
 * @param props The {@typedef ImageProps} which apply to the img.
 * @returns An image with the search icon.
 */
export const SearchIcon: React.FC<ImageProps> = (props) => <Image Img={ImageType.SearchIcon} {...props} />;

/**
 * The coins icon.
 *
 * @param props The {@typedef ImageProps} which apply to the img.
 * @returns An image with the coins icon.
 */
export const CoinsIcon: React.FC<ImageProps> = (props) => <Image Img={ImageType.CoinsIcon} {...props} />;
