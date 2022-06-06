import React from "react";
import { LinkWrap, SubLinkMenu } from "./common/InputsComponent";

const HeaderComponent: React.FC = () => {
  return (
    <div className="divide-y">
      <div>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <LinkWrap link="/">
              <div className="font-bold text-4xl">EMP</div>
            </LinkWrap>
            <LinkWrap link="/login">
              <div className="bg-slate-500 rounded-full px-5 py-2 text-white font-bold">
                Mon espace client
              </div>
            </LinkWrap>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <ol className="flex space-x-2 justify-between px-12">
            <SubLinkMenu link="/simulateur/1">Crédit immobilier</SubLinkMenu>
            <SubLinkMenu link="/simulateur/2">Crédit automobile</SubLinkMenu>
            <SubLinkMenu link="/">Crédit consommation</SubLinkMenu>
            <SubLinkMenu link="/">Mutuelle santé</SubLinkMenu>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
