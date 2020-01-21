import * as React from "react";
import ContactForm from "./ContactForm";

export const Contact = () => {
  return (
    <React.Fragment>
      <div className="pi-banner">
        <div className="piheader-txt"> Contact</div>
      </div>
      <div className="picontent-grid piMT20">
        <div></div>
        <div>
          At Print Ideas, we are impulsively inclined towards transforming your
          deliberations into designs. Yes, you read it right. Any brand is
          undone without the branding material ensembles and that is when we
          come into the picture. We create one of a kind identities for
          corporate, business and individual firms by designing user interfaces,
          digital marketing, logos, flyers, brochures, presentations and much
          more...
          <div className="piMT20">
            <ContactForm />
          </div>
        </div>
        <div></div>
      </div>
    </React.Fragment>
  );
};
