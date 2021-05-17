type SVGProps = React.SVGAttributes<SVGElement>;
type SVGType = React.FunctionComponent<SVGProps>;

declare module '*.svg' {
  const content: SVGType;
  export default content;
}
