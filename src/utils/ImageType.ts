import { Icon } from "../assets/Icon";

/** Image types which get used by the lib. */
export class ImageType {
  public static Icon = Icon;
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
    width: string;
    /** The height of the image. */
    height: string;
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
