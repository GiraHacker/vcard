import React from "react";

export default function AboutMe({ page }) {
  function clear(item) {
    return item.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "");
  }
  return (
    <section
      data-id={`${clear(page.menu).toLowerCase()}`}
      className="animated-section"
    >
      <div className="page-title">
        <h2>
          {page.menu.replace(
            page.menu.substring(page.menu.lastIndexOf(" ") + 1),
            ""
          )}
          <span>{page.menu.substring(page.menu.lastIndexOf(" ") + 1)}</span>
        </h2>
      </div>

      <div className="section-content">
        <div className="row">
          <div className="col-xs-12 col-sm-7">
            {page.content.text.map((texto, indexTexto) => (
              <p key={`texto-${indexTexto}`}>{texto}</p>
            ))}
          </div>
          <div className="col-xs-12 col-sm-5">
            <div className="info-list">
              <ul>
                <li>
                  <span className="title">Idade</span>
                  <span className="value">{page.content.age}</span>
                </li>

                <li>
                  <span className="title">Cidade:</span>
                  <span className="value">{`${page.content.city} - ${page.content.zone}`}</span>
                </li>

                <li>
                  <span className="title">E-mail:</span>
                  <span className="value">
                    <a href={`mailto: ${page.content.email}`} rel="noreferrer">
                      {page.content.email}
                    </a>
                  </span>
                </li>

                <li>
                  <span className="title">Telefone:</span>
                  <span className="value">+ 55 11-{page.content.phone}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="white-space-50"></div>

        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="block-title">
              <h3>
                {page.content.whatido.title.replace(
                  page.content.whatido.title.substring(
                    page.content.whatido.title.lastIndexOf(" ") + 1
                  ),
                  ""
                )}
                <span>
                  {page.content.whatido.title.substring(
                    page.content.whatido.title.lastIndexOf(" ") + 1
                  )}
                </span>
              </h3>
            </div>
          </div>
        </div>
        {page.content.whatido.features.map((row, indexRow) => {
          if (indexRow % page.content.whatido.columns === 0) {
            return (
              <React.Fragment key={`row-${indexRow}`}>
                <div className="row">
                  {Array.from({ length: page.content.whatido.columns }).map(
                    (column, indexColumn) => {
                      const key = `row-${indexRow}column-${indexColumn}`;
                      const featureIndex = indexRow + indexColumn;
                      if (page.content.whatido.features[featureIndex]) {
                        const { icon, title, description } =
                          page.content.whatido.features[featureIndex];
                        return (
                          <div key={key} className="col-xs-12 col-sm-6">
                            <div className="col-inner">
                              <div className="info-list-w-icon">
                                <div className="info-block-w-icon">
                                  <div className="ci-icon">
                                    <i className={`lnr ${icon}`}></i>
                                  </div>
                                  <div className="ci-text">
                                    <h4>{title}</h4>
                                    <p>{description}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      } else {
                        return null;
                      }
                    }
                  )}
                </div>
                <div className="white-space-50"></div>
              </React.Fragment>
            );
          }
          return null;
        })}
      </div>
    </section>
  );
}
