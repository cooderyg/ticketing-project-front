import { KeyboardEvent } from "react";

export const keydownCheck = (event: KeyboardEvent<HTMLFormElement>) => {
  if (event.key === "Enter") event.preventDefault();
};
