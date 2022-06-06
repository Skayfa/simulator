import React from "react";
import { LinkWrap } from "../common/InputsComponent";
import { CarSVG, ConsoSVG, HealthSVG, HomeSVG } from "../common/SvgsComponent";

const PretActionComponent: React.FC<{
  Elements: {
    SVG: JSX.Element;
    title: string;
    link: string;
  };
}> = ({ Elements }) => {
  return (
    <div className="w-1/3">
      <LinkWrap link={Elements.link}>
        <div className="bg-white m-2 rounded-md shadow-sm p-5 flex justify-center hover:cursor-pointer">
          <div className="space-y-4">
            <div className="flex justify-center">{Elements.SVG}</div>
            <div className="font-bold">
              {Elements.title} {">"}
            </div>
          </div>
        </div>
      </LinkWrap>
    </div>
  );
};

const PretActionSection: React.FC = () => {
  return (
    <main className="bg-blue-100">
      <div className="mx-auto max-w-7xl py-20">
        <div className="flex">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-bold">
              Votre courtier en crédits, assurance de prêt et mutuelle
            </h2>
            <ol className="space-y-8">
              <li className="">
                <span className="mr-2 bg-blue-300 rounded-full p-2">1</span>
                <span>Nos meilleures solutions</span> pour votre projet
                immobilier 🥇
              </li>
              <li className="">
                <span className="mr-2 bg-blue-300 rounded-full p-2">1</span>
                <span>Des conditions négociées :</span>
                nos courtiers vous accompagnent 🧘‍♀️
              </li>
              <li className="">
                <span className="mr-2 bg-blue-300 rounded-full p-2">1</span>
                <span>Un service à distance :</span> empruntis.com c&apos;est
                facile, et mobile ! 😉
              </li>
            </ol>
          </div>
          <div className="flex-1">
            <div>
              <div className="flex flex-wrap">
                <PretActionComponent
                  Elements={{
                    SVG: <HomeSVG />,
                    title: "Prêt immobilier",
                    link: "/simulateur/1",
                  }}
                />
                <PretActionComponent
                  Elements={{
                    SVG: <CarSVG />,
                    title: "Crédit auto",
                    link: "/simulateur/2",
                  }}
                />
                <PretActionComponent
                  Elements={{
                    SVG: <HealthSVG />,
                    title: "Mutuelle santé",
                    link: "/simulateur/3",
                  }}
                />
                <PretActionComponent
                  Elements={{
                    SVG: <ConsoSVG />,
                    title: "Crédit conso",
                    link: "/simulateur/4",
                  }}
                />
              </div>
              <div>Excellent</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PretActionSection;
