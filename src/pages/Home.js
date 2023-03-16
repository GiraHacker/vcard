import React from "react";

export default function Home({ data,name }) {
  return (
    <>
      <div className="section-content vcentered">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="title-block">
              <h2> {name} </h2>
              <div className="text-animation">
                {data.content.occupations.map((o,index)=> (
                <div key={index} className="item ">
                  <div className="sp-subtitle">{o}</div>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
