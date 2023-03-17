import React from "react";

export default function NavArrows({selectedSection, setSelectedSection}) {
    const handleNextClick = () => {
        setSelectedSection(selectedSection === 3 ? 0 : selectedSection + 1);
      };
      const handlePreviousClick = () => {
        setSelectedSection(selectedSection === 0 ? 3 : selectedSection - 1);
      };

  return (
    <div className="lmpixels-arrows-nav">
      <div className="lmpixels-arrow-right cursor" onClick={handleNextClick}>
        <i className="lnr lnr-chevron-right"></i>
      </div>
      <div className="lmpixels-arrow-left cursor" onClick={handlePreviousClick}>
        <i className="lnr lnr-chevron-left"></i>
      </div>
    </div>
  );
}
