export interface Props {
  numberOfItems: number;
}

export default function APIColors(props: Props, _req: Request) {
  return { props };
}