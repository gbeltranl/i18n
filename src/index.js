import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";


import JobsList from "./components/jobslist";
const localeLang = navigator.language;


ReactDOM.render(
  <IntlProvider locale={localeLang} messages= {localeLang === "en" ? localeEnMessages: localeEsMessages}>
    <JobsList />
  </IntlProvider>,
  document.getElementById("root")
);
