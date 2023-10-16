import { useRouter } from "next/router";
import LayoutHeader from "./header";
import LayoutFooter from "./footer";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../stores";

const HIDDEN_HEADERS: string[] = ["/login", "/sign-up"];

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

  useEffect(() => {
    const path = router.asPath;
    if (path === "/login" || "/sign-up") return;

    setVisitedPage(path);
  }, [router, setVisitedPage]);
  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      <main>{props.children}</main>
      <LayoutFooter />
    </>
  );
}
