import { useRouter } from "next/router";
import React from "react";
import data from "../../data/forms.json";
import { Card } from "../common/CardsComponent";
import PretImmoForm from "./Forms/PretImmoForm";

const SimulateurForms = () => {
  const router = useRouter();
  const { id } = router.query;
  if (id && typeof id === "string") {
    const d = data.find((e) => e.id === parseInt(id));
    return (
      <div className="bg-blue-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col justify-center w-full items-center space-y-3">
            <h1 className="capitalize font-bold text-3xl">{d?.title}</h1>
            <div className="font-bold">
              Déjà venu(e)?{" "}
              <span className="underline text-blue-400">Identifiez-vous</span>
            </div>
            <div className="w-full">
              <Card>
                <div className="w-full flex flex-col items-center">
                  {d?.id === 1 ? <PretImmoForm /> : null}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default SimulateurForms;
