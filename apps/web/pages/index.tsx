import { useRouter } from "next/router";
import React, { useCallback } from "react";
import Header from "./Header/Header";
import HeaderMedium from "./HeaderMedium/HeaderMedium";

export default function Web() {

  return (
    <div>
      <Header/>
     <HeaderMedium/>
    </div>
  );
}
