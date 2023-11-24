import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";

const Topbar = () => {
  const { mutate: signOut, isSucess } = useSignOutAccount();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSucess) {
      if (isSucess) navigate(0);
    }
  }, [isSucess]);
  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <img src="./assets/images/logo.svg" alt="logo" />
        </Link>
        <div className="flex gap-4">
          <Button
            variant="ghost"
            className="shad-button_ghost"
            onClick={() => signOut()}
          >
            <img src="./assets/icons/logout.svg" alt="logout" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
