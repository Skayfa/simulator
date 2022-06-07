import React from "react";
import DefaultLayout from "../../components/layout/DefaultLayoutComponent";
import SimulateurForms from "../../components/Simulateur/SimulateurForms";

const simulateur: React.FC = () => {
  return (
    <DefaultLayout headTitle="EMP - Simulateur">
      <SimulateurForms />
    </DefaultLayout>
  );
};
export default simulateur;
