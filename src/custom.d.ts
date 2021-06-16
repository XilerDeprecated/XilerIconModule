type SVGProps = React.SVGAttributes<SVGElement>;
type SVGType = React.FC<SVGProps>;

declare module '*.svg' {
  const content: SVGType;
  export default content;
}
