import { useRouter } from "next/router";
import LayoutHeader from "./header";
import LayoutFooter from "./footer";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userMenuOpenState, visitedPageState } from "../stores";

const HIDDEN_HEADERS: string[] = ["/login", "/sign-up"];

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  const [_, setVisitedPage] = useRecoilState(visitedPageState);
  const [userMenuOpen, setUserMenuOpen] = useRecoilState(userMenuOpenState);

  const onClickDocument = () => {
    if (userMenuOpen) setUserMenuOpen(false);
  };

  useEffect(() => {
    const path = router.asPath;
    if (path === "/login" || path === "/sign-up") return;
    setVisitedPage(path);
  }, [router, setVisitedPage]);
  return (
    <div onClick={onClickDocument}>
      {!isHiddenHeader && <LayoutHeader />}
      <main>{props.children}</main>
      <LayoutFooter />
    </div>
  );
}
