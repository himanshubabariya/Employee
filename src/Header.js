function Header() {
  return (
    <>
      <div class="">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="col">
            <a class="navbar-brand ha" href="#">
              HB-INFOTECH
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="col">
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    <h5> Home</h5> <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <h5> Features</h5>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <h5>Pricing</h5>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">
                    <h5>Disabled</h5>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col" style={{ marginLeft: "0px" }}>
            <button type="button" class="btn btn-danger">
              LOGIN
            </button>
            <button type="button" class="btn btn-warning">
              SIGNUP
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Header;
