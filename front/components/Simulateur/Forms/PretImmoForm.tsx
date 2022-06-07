import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import {
  ConstruireSVG,
  Home2SVG,
  HomeAgrandissementSVG,
  HomeSVG,
  NegoCreditSVG,
  TraveauxSVG,
} from "../../common/SvgsComponent";
import { QuestionTitle } from "../../common/TitlesComponent";
import { DelayDropDown, InputCurrencyEuro } from "../../common/InputsComponent";
import { NextStepButton } from "../../common/ButtonsComponent";

const PretImmoForm: React.FC = () => {
  const [data, setData] = useState({
    type: "",
    etat: "",
    coutTravaux: 0,
    apportPersonnel: 0,
  });
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = (newData: any) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData: any) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <>
      <Formik initialValues={data} onSubmit={() => {}}>
        {({ values, setFieldValue, submitForm }) => (
          <Form className="w-full flex flex-col items-center space-y-6">
            {
              [
                <StepProject
                  key="project"
                  next={handleNextStep}
                  prev={handlePrevStep}
                  values={values}
                  setFieldValue={setFieldValue}
                />,
                <StepFinancement
                  key="financement"
                  next={handleNextStep}
                  prev={handlePrevStep}
                  values={values}
                  setFieldValue={setFieldValue}
                />,
                <StepProfile
                  key="profile"
                  next={handleNextStep}
                  prev={handlePrevStep}
                  values={values}
                  setFieldValue={setFieldValue}
                />,
              ][currentStep]
            }
          </Form>
        )}
      </Formik>

      <div className="w-full flex justify-between font-bold">
        <div
          onClick={() => {
            setCurrentStep((prev) => prev - 1);
          }}
        >
          {"<"} back
        </div>
        <div>next {">"}</div>
      </div>
    </>
  );
};

interface propsStep {
  values: any;
  next: any;
  prev: any;
  setFieldValue: any;
}

const StepProject: React.FC<propsStep> = ({
  values,
  prev,
  next,
  setFieldValue,
}) => {
  return (
    <>
      {/* Q1 */}
      <QuestionTitle>Quel est votre projet ?</QuestionTitle>
      <div className="w-2/3 flex flex-wrap">
        <div
          className={`w-1/3 p-2 ${values.type === "AB" ? "text-blue-400" : ""}`}
          onClick={() => {
            setFieldValue("type", "AB");
          }}
        >
          <div
            className={`border p-2 py-6 rounded-lg ${
              values.type === "AB"
                ? "bg-blue-100 bg-opacity-80 border-blue-300"
                : ""
            }`}
          >
            <div className="flex flex-col items-center space-y-3">
              <div>
                <Home2SVG />
              </div>
              <div className="font-bold">Acheter un bien</div>
            </div>
          </div>
        </div>
        <div
          className={`w-1/3 p-2 ${values.type === "RC" ? "text-blue-400" : ""}`}
          onClick={() => {
            setFieldValue("type", "RC");
          }}
        >
          <div
            className={`border p-2 py-6 rounded-lg ${
              values.type === "RC"
                ? "bg-blue-100 bg-opacity-80 border-blue-300"
                : ""
            }`}
          >
            <div className="flex flex-col items-center space-y-3">
              <div>
                <NegoCreditSVG />
              </div>
              <div className="font-bold">Renégocier mon crédit</div>
            </div>
          </div>
        </div>
        <div
          className={`w-1/3 p-2 ${values.type === "C" ? "text-blue-400" : ""}`}
          onClick={() => {
            setFieldValue("type", "C");
          }}
        >
          <div
            className={`border p-2 py-6 rounded-lg ${
              values.type === "C"
                ? "bg-blue-100 bg-opacity-80 border-blue-300"
                : ""
            }`}
          >
            <div className="flex flex-col items-center space-y-3">
              <div>
                <ConstruireSVG />
              </div>
              <div className="font-bold">Construire</div>
            </div>
          </div>
        </div>
        <div
          className={`w-1/3 p-2 ${values.type === "FT" ? "text-blue-400" : ""}`}
          onClick={() => {
            setFieldValue("type", "FT");
          }}
        >
          <div
            className={`border p-2 py-6 rounded-lg ${
              values.type === "FT"
                ? "bg-blue-100 bg-opacity-80 border-blue-300"
                : ""
            }`}
          >
            <div className="flex flex-col items-center space-y-3">
              <div>
                <TraveauxSVG />
              </div>
              <div className="font-bold">Faire des travaux</div>
            </div>
          </div>
        </div>
        <div
          className={`w-1/3 p-2 ${values.type === "FA" ? "text-blue-400" : ""}`}
          onClick={() => {
            setFieldValue("type", "FA");
          }}
        >
          <div
            className={`border p-2 py-6 rounded-lg ${
              values.type === "FA"
                ? "bg-blue-100 bg-opacity-80 border-blue-300"
                : ""
            }`}
          >
            <div className="flex flex-col items-center space-y-3">
              <div>
                <HomeAgrandissementSVG />
              </div>
              <div className="font-bold">Faire un agrandissement</div>
            </div>
          </div>
        </div>
      </div>
      {/* Q2 */}
      <QuestionTitle>Où en êtes-vous dans votre projet ?</QuestionTitle>
      <div className="w-1/2 flex flex-col flex-wrap text-xl font-medium space-y-3">
        <div
          className={`border px-6 py-4 rounded-lg  ${
            values.etat === "SD"
              ? "text-blue-400 bg-blue-100 bg-opacity-80 border-blue-300"
              : "border-gray-300"
          }`}
          onClick={() => {
            setFieldValue("etat", "SD");
          }}
        >
          Vous avez déjà signé un devis
        </div>
        <div
          className={`border px-6 py-4 rounded-lg  ${
            values.etat === "PD"
              ? "text-blue-400 bg-blue-100 bg-opacity-80 border-blue-300"
              : "border-gray-300"
          }`}
          onClick={() => {
            setFieldValue("etat", "PD");
          }}
        >
          Vous êtes en possesion d&apos;un devis
        </div>
        <div
          className={`border px-6 py-4 rounded-lg  ${
            values.etat === "SR"
              ? "text-blue-400 bg-blue-100 bg-opacity-80 border-blue-300"
              : "border-gray-300"
          }`}
          onClick={() => {
            setFieldValue("etat", "SR");
          }}
        >
          Vous êtes simplement en réflexion
        </div>
      </div>
      {/* Q3 */}
      <QuestionTitle>Montant de votre projet</QuestionTitle>

      <div className="w-1/2 flex flex-col flex-wrap text-xl font-medium space-y-3">
        <InputCurrencyEuro name="coutTravaux" title="Cout des travaux" />
        <InputCurrencyEuro name="apportPersonnel" title="Apport Personnel" />
      </div>
      <QuestionTitle>
        <div className="text-center space-y-3">
          <div>Coût Total du projet</div>
          <div>{values.coutTravaux + values.apportPersonnel}</div>
        </div>
      </QuestionTitle>

      <div className="w-1/2 flex flex-col flex-wrap text-xl font-medium space-y-3">
        <InputCurrencyEuro name="epargne" title="Epargne disponible" />
      </div>
      <QuestionTitle>Quelle durée ou mensualité souhaitez-vous ?</QuestionTitle>
      <div className="w-1/2 flex flex-col flex-wrap text-xl font-medium space-y-3">
        <DelayDropDown />
      </div>

      <NextStepButton
        onClick={() => {
          next(values);
        }}
      >
        Continue
      </NextStepButton>
    </>
  );
};
const StepFinancement: React.FC<propsStep> = () => {
  return <div></div>;
};
const StepProfile: React.FC<propsStep> = () => {
  return <div></div>;
};

export default PretImmoForm;
