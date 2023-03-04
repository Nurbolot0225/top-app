declare module "*.module.css";
declare module "classnames";
declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
    export default content;
}