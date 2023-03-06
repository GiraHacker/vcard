export default function Home({ page }) {
  function clear(item) {
    return item.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "");
  }
    return (
        <section data-id={`${clear(page.menu).toLowerCase()}`}  className="animated-section start-page">
          <div className="section-content vcentered">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="title-block">
                  <h2>Alex Smith</h2>
                  <div className="owl-carousel text-rotation">
                    <div className="item">
                      <div className="sp-subtitle">Web Designer</div>
                    </div>
                    <div className="item">
                      <div className="sp-subtitle">Frontend-developer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}