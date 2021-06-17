import { SVGType } from '.';

declare module '*.svg' {
  const content: SVGType;
  export default content;
}
