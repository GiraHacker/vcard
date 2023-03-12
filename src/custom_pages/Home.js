import React from "react";
import { removeAllCaracteresSpecial } from "../components/helpers/utils.js";

export default function Home({ page, name }) {
  return (
    <section
      
      id={`#${removeAllCaracteresSpecial(page.menu).toLowerCase()}`}
      className="animated-section start-page"
    >
      <div className="section-content vcentered">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="title-block">
              <h2>{name}</h2>
              <div className="owl-carousel text-rotation">
                {page.content.occupations.map((o, indexOccupation) => (
                  <div key={`occupation-${indexOccupation}`} className="item">
                    <div className="sp-subtitle">{o}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
