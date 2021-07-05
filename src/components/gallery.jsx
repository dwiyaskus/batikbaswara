import { useHistory } from "react-router-dom";
export const Gallery = (props) => {
  const history = useHistory();
  const submit = () => {
    history.push("/ska-skt");
  };
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Layanan Pengurusan Surat</h2>
        </div>
        <div className="row">
          <div className="portfolio-items">
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="portfolio-item">
                <a
                  href="/ska-skt"
                  title="Project Title"
                  data-lightbox-gallery="gallery1"
                >
                  <div className="hover-bg">
                    <div className="hover-text">
                      <h4>SKA/SKT</h4>
                    </div>
                    <img
                      src="img/portfolio/01-small.jpg"
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="portfolio-item">
                <div className="hover-bg">
                  {" "}
                  <a
                    href="img/portfolio/02-large.jpg"
                    title="Project Title"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>SBUJK</h4>
                    </div>
                    <img
                      src="img/portfolio/02-small.jpg"
                      className="img-responsive"
                      alt="Project Title"
                    />{" "}
                  </a>{" "}
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="portfolio-item">
                <div className="hover-bg">
                  {" "}
                  <a
                    href="img/portfolio/03-large.jpg"
                    title="Project Title"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>SIUJK</h4>
                    </div>
                    <img
                      src="img/portfolio/03-small.jpg"
                      className="img-responsive"
                      alt="Project Title"
                    />{" "}
                  </a>{" "}
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="portfolio-item">
                <div className="hover-bg">
                  {" "}
                  <a
                    href="img/portfolio/04-large.jpg"
                    title="Project Title"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>ISO</h4>
                    </div>
                    <img
                      src="img/portfolio/04-small.jpg"
                      className="img-responsive"
                      alt="Project Title"
                    />{" "}
                  </a>{" "}
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="portfolio-item">
                <div className="hover-bg">
                  {" "}
                  <a
                    href="img/portfolio/05-large.jpg"
                    title="Project Title"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>SIUJPTL</h4>
                    </div>
                    <img
                      src="img/portfolio/05-small.jpg"
                      className="img-responsive"
                      alt="Project Title"
                    />{" "}
                  </a>{" "}
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="portfolio-item">
                <div className="hover-bg">
                  {" "}
                  <a
                    href="img/portfolio/06-large.jpg"
                    title="Project Title"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Legalitas Badan Usaha</h4>
                    </div>
                    <img
                      src="img/portfolio/06-small.jpg"
                      className="img-responsive"
                      alt="Project Title"
                    />{" "}
                  </a>{" "}
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="portfolio-item">
                <div className="hover-bg">
                  {" "}
                  <a
                    href="img/portfolio/07-large.jpg"
                    title="Project Title"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>SMK3(KEMENAKER)</h4>
                    </div>
                    <img
                      src="img/portfolio/07-small.jpg"
                      className="img-responsive"
                      alt="Project Title"
                    />{" "}
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
