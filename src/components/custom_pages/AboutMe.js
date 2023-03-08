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
            {page.content.text.map((texto, index) => (
              <p key={index}>{texto}</p>
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
                    <a href={`mailto: ${page.content.email}`}>
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
              <>
                <div key={`#row${indexRow}`} className="row">
                  {Array.from({ length: page.content.whatido.columns }).map(
                    (column, indexColumn) => (
                      <div
                        key={`#column${indexColumn}`}
                        className="col-xs-12 col-sm-6"
                      >
                        <div className="col-inner">
                          <div className="info-list-w-icon">
                            <div className="info-block-w-icon">
                                    <div className="ci-icon">
                                    <i className={`lnr ${page.content.whatido.features[indexRow + indexColumn].icon}`}></i>
                                    </div>
                                    <div className="ci-text">
                                    <h4>{page.content.whatido.features[indexRow + indexColumn].title}</h4>
                                    <p>
                                        {page.content.whatido.features[indexRow + indexColumn].description}
                                    </p>
                                  </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
                <div className="white-space-30"></div>
              </>
            );
          }
        })}
        {/* <div className="row">
          <div className="col-xs-12 col-sm-6">
            <div className="col-inner">
              <div className="info-list-w-icon">
                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lnr lnr-store"></i>
                  </div>
                  <div className="ci-text">
                    <h4>Ecommerce</h4>
                    <p>
                      Pellentesque pellentesque, ipsum sit amet auctor accumsan,
                      odio tortor bibendum massa, sit amet ultricies ex lectus
                      scelerisque nibh. Ut non sodales.
                    </p>
                  </div>
                </div>
                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lnr lnr-laptop-phone"></i>
                  </div>
                  <div className="ci-text">
                    <h4>Web Design</h4>
                    <p>
                      Pellentesque pellentesque, ipsum sit amet auctor accumsan,
                      odio tortor bibendum massa, sit amet ultricies ex lectus
                      scelerisque nibh. Ut non sodales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6">
            <div className="col-inner">
              <div className="info-list-w-icon">
                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lnr lnr-pencil"></i>
                  </div>
                  <div className="ci-text">
                    <h4>Copywriting</h4>
                    <p>
                      Pellentesque pellentesque, ipsum sit amet auctor accumsan,
                      odio tortor bibendum massa, sit amet ultricies ex lectus
                      scelerisque nibh. Ut non sodales.
                    </p>
                  </div>
                </div>
                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lnr lnr-flag"></i>
                  </div>
                  <div className="ci-text">
                    <h4>Management</h4>
                    <p>
                      Pellentesque pellentesque, ipsum sit amet auctor accumsan,
                      odio tortor bibendum massa, sit amet ultricies ex lectus
                      scelerisque nibh. Ut non sodales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="white-space-30"></div>

        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="block-title">
              <h3>Empresas</h3>
            </div>
          </div>
        </div> */}

        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="clients owl-carousel">
              <div className="client-block">
                <a href="#" target="_blank" title="Logo">
                  <img src="img/clients/client-1.png" alt="Logo" />
                </a>
              </div>

              <div className="client-block">
                <a href="#" target="_blank" title="Logo">
                  <img src="img/clients/client-2.png" alt="Logo" />
                </a>
              </div>

              <div className="client-block">
                <a href="#" target="_blank" title="Logo">
                  <img src="img/clients/client-3.png" alt="Logo" />
                </a>
              </div>

              <div className="client-block">
                <a href="#" target="_blank" title="Logo">
                  <img src="img/clients/client-4.png" alt="Logo" />
                </a>
              </div>

              <div className="client-block">
                <a href="#" target="_blank" title="Logo">
                  <img src="img/clients/client-5.png" alt="Logo" />
                </a>
              </div>

              <div className="client-block">
                <a href="#" target="_blank" title="Logo">
                  <img src="img/clients/client-6.png" alt="Logo" />
                </a>
              </div>

              <div className="client-block">
                <a href="#" target="_blank" title="Logo">
                  <img src="img/clients/client-7.png" alt="Logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
