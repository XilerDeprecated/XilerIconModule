import { ApplicationsIcon } from '../assets/ApplicationsIcon';
import { ArrowIcon } from '../assets/ArrowIcon';
import { BellIcon } from '../assets/BellIcon';
import { CoinsIcon } from '../assets/CoinsIcon';
import { DashboardIcon } from '../assets/DashboardIcon';
import { DocumentationIcon } from '../assets/DocumentationIcon';
import { Icon } from '../assets/Icon';
import { InboxIcon } from '../assets/InboxIcon';
import { SVGType } from '..';
import { SearchIcon } from '../assets/SearchIcon';
import { SettingsIcon } from '../assets/SettingsIcon';
import { SignOutIcon } from '../assets/SignOutIcon';

/** Image types which get used by the lib. */
export class ImageType {
  public static Icon = Icon;
  public static DashboardIcon = DashboardIcon;
  public static DocumentationIcon = DocumentationIcon;
  public static ApplicationsIcon = ApplicationsIcon;
  public static InboxIcon = InboxIcon;
  public static BellIcon = BellIcon;
  public static SettingsIcon = SettingsIcon;
  public static SearchIcon = SearchIcon;
  public static CoinsIcon = CoinsIcon;
  public static SignOutIcon = SignOutIcon;
  public static ArrowIcon = ArrowIcon;
}

/** The image properties for the custom image elements. */
export interface ImageProps {
  /**  Accesses the class attribute of the img element. */
  className: string;

  /**
   * The image size that will be applied to the style.
   * This does not get implemented as property, but it gets put in the element its css.
   */
  size?: {
    /** The width of the image. */
    width: string | number;
    /** The height of the image. */
    height: string | number;
  };

  /** The css color for the vector. */
  color?: string;
}

/** The props for the main image element that gets used by the sub elements which are distributed. */
export interface MainImageProps extends ImageProps {
  /** The svg image */
  Img: SVGType;
}

export default ImageType;
