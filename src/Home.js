import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <div class="container" style={{ height: "720px" }}>
        <div class="row" align="center"></div>
        <div class="row">
          <div class="col">
            <div
              class=""
              style={{
                marginTop: "5rem"
              }}
            >
              <div class="">
                <h3
                  class="te"
                  style={{ fontFamily: "cursive", fontWeight: "900" }}
                >
                  <span style={{ fontSize: "5rem" }}>&#8223;</span>
                  Creativity is contagious. Pass it on.
                </h3>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col"></div>
          </div>
        </div>
      </div>
    </>
  );
}
