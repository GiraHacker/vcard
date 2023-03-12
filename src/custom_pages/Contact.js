import React from "react";
import ColorText from "../components/ColorText";
import { removeAllCaracteresSpecial } from "../components/helpers/utils.js";


export default function Contact({page}) {
  const isRequired = "é obrigatório.";
  return (
    <section 
             id={`#${removeAllCaracteresSpecial(page.menu).toLowerCase()}`}
             className="animated-section">
      <div className="page-title">
        <h2><ColorText text= {page.menu} /></h2>
      </div>

      <div className="section-content">
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <div className="lm-info-block gray-default">
              <i className="lnr lnr-map-marker"></i>
              <h4>{page.content.locality}</h4>
              <span className="lm-info-block-value"></span>
              <span className="lm-info-block-text"></span>
            </div>

            <div className="lm-info-block gray-default">
              <i className="lnr lnr-phone-handset"></i>
              <h4>{page.content.phone}</h4>
              <span className="lm-info-block-value"></span>
              <span className="lm-info-block-text"></span>
            </div>

            <div className="lm-info-block gray-default">
              <i className="lnr lnr-envelope"></i>
              <h4>
                {page.content.email}
              </h4>
              <span className="lm-info-block-value"></span>
              <span className="lm-info-block-text"></span>
            </div>

            <div className="lm-info-block gray-default">
            <i className={page.content.freelancer ? "lnr lnr-checkmark-circle" : "lnr lnr-cross"}></i>
              <h4>{`Freelance ${ page.content.freelancer ? 'Disponível':  'Indisponível' }` }</h4>
              <span className="lm-info-block-value"></span>
              <span className="lm-info-block-text"></span>
            </div>
          </div>

          <div className="col-xs-12 col-sm-8">
            <div id="map" className="map">
              <div className="lmpixels-map">
                <iframe
                  title="local"
                  loading="lazy"
                  src=""
                ></iframe>
              </div>
            </div>
            <div className="block-title">
              <h3>
                <ColorText text= {page.content.form.title} />
              </h3>
            </div>

            <form
              id="contact_form"
              className="contact-form"
              action=""
              method="post"
            >
              <div className="messages"></div>
              <div className="controls two-columns">
                <div className="fields clearfix">
                  <div className="left-column">
                    <div className="form-group form-group-with-icon">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder=""
                        required="required"
                        data-error={`${page.content.form.fullname} ${isRequired}`}
                      />
                      <label>{page.content.form.fullname}</label>
                      <div className="form-control-border"></div>
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group form-group-with-icon">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder=""
                        required="required"
                        data-error={`${page.content.form.email} válido ${isRequired}`}
                      />
                      <label>{page.content.form.email}</label>
                      <div className="form-control-border"></div>
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group form-group-with-icon">
                      <input
                        id="form_subject"
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder=""
                        required="required"
                        data-error={`${page.content.form.subject} ${isRequired}`}
                      />
                      <label>{page.content.form.subject}</label>
                      <div className="form-control-border"></div>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="right-column">
                    <div className="form-group form-group-with-icon">
                      <textarea
                        id="form_message"
                        name="message"
                        className="form-control"
                        placeholder=""
                        rows="7"
                        required="required"
                        data-error={`Para ser enviada, ${page.content.form.message.toLowerCase()} ${isRequired} `}
                      ></textarea>
                      <label>{page.content.form.message}</label>
                      <div className="form-control-border"></div>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                </div>

                <input
                  type="submit"
                  className="button btn-send"
                  value={page.content.form.button}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
