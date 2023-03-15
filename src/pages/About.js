import React from 'react';
import ColorText from "../components/ColorText/ColorText";

export default function About({ data }) {
  return (
    <>
      <div className="page-title">
        <h2>
          <ColorText text={data.menu} />
        </h2>
      </div>
      <div className="white-space-50"></div>
      <div className="section-content">
        <div className="row">
          <div className="col-xs-12 col-sm-7">
            {data.content.text.map((texto, indexTexto) => (
              <p key={`texto-${indexTexto}`}>{texto}</p>
            ))}
          </div>
          <div className="col-xs-12 col-sm-5">
            <div className="info-list">
              <ul>
                <li>
                  <span className="title">Idade</span>
                  <span className="value">{data.content.age}</span>
                </li>

                <li>
                  <span className="title">Cidade:</span>
                  <span className="value">{`${data.content.city} - ${data.content.zone}`}</span>
                </li>

                <li>
                  <span className="title">E-mail:</span>
                  <span className="value">
                    <a href={`mailto: ${data.content.email}`} rel="noreferrer">
                      {data.content.email}
                    </a>
                  </span>
                </li>

                <li>
                  <span className="title">Telefone:</span>
                  <span className="value">+ 55 11-{data.content.phone}</span>
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
                {data.content.whatido.title.replace(
                  data.content.whatido.title.substring(
                    data.content.whatido.title.lastIndexOf(" ") + 1
                  ),
                  ""
                )}
                <span>
                  {data.content.whatido.title.substring(
                    data.content.whatido.title.lastIndexOf(" ") + 1
                  )}
                </span>
              </h3>
            </div>
          </div>
        </div>
        {data.content.whatido.features.map((row, indexRow) => {
          if (indexRow % data.content.whatido.columns === 0) {
            return (
              <React.Fragment key={`row-${indexRow}`}>
                <div className="row">
                  {Array.from({ length: data.content.whatido.columns }).map(
                    (column, indexColumn) => {
                      const key = `row-${indexRow}column-${indexColumn}`;
                      const featureIndex = indexRow + indexColumn;
                      if (data.content.whatido.features[featureIndex]) {
                        const { icon, title, description } =
                          data.content.whatido.features[featureIndex];
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
    </>
  );
}
