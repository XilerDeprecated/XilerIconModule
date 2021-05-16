type SVGType = React.FunctionComponent<React.SVGAttributes<SVGElement>>;

declare module '*.svg' {
  const content: SVGType;
  export default content;
}
