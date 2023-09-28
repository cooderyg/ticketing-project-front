import { useRouter } from "next/router";
import LayoutHeader from "./header";
import LayoutFooter from "./footer";

const HIDDEN_HEADERS: string[] = [];

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      <main>{props.children}</main>
      <LayoutFooter />
    </>
  );
}
