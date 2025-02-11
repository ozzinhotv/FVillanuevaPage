import React from "react";
import croquis_caoma_black from "../../src/assets/croquisGif.gif";
import sillaDelDiablo from "../../src/assets/sillaDelDiablo.png";
import crvUcv1952 from "../../src/assets/crvUcv1952.png";
import logos from "../../src/assets/LOGOS-prueba-final.jpg";
import vidaImg from "../../src/assets/Vida.png";
import obraImg from "../../src/assets/obrax.jpg";
import escritosImg from "../../src/assets/Escritos.png";
import "../../src/styles/Home.css";
import "../../src/styles/index.css";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation(['homePage']);
  return (
    <div className="Home">
      <div className="parallax" style={{ backgroundImage: `url(${croquis_caoma_black})`, backgroundColor: "black" }}></div>
      <div className="container-lg">
        <div className="fundacionVillanueva mt-4 mb-5">
          <h1>{t("name")}</h1>
          <div className="row">
            <div className="col-6">
              <p>{t("fvDescription")}</p>
            </div>
            <div className="col text-center me-0">
              <img src={sillaDelDiablo} alt="Silla del Diablo" className="responsive-img"/>
              <br></br>
              <a>Carlos Raul Villanueva en Caoma, Caracas 1960.</a>
              <br></br>
              <a>Foto por: Alfredo Brandler.</a>
            </div>
          </div>
        </div>
        <hr className="divider"/>
        <div className="crvHome mt-4 mb-5">
          <h1>Carlos Raul Villanueva</h1>
          <div className="row d-flex justify-content-between">
            <div className="col">
              <p>{t("sibylTextPt1")}</p>
            </div>
            <div className="col text-center me-0">
              <img src={crvUcv1952} alt="crvUcv1952" className="responsive-img"/>
              <br></br>
              <a>Ciudad Universitaria, Caracas 1952.</a>
              <br></br>
              <a>Foto: Hamilton Wright.</a>
            </div>
          </div>
          <div className="row d-flex justify-content-between mt-4">
            <div className="col text-center me-0">
              <img src={logos} alt="logos" className="responsive-img"/>
            </div>
            <div className="col">
              <p>{t("sibylTextPt2")}</p>
            </div>
          </div>
        </div>
        <hr className="divider"/>
        <div className="moreInfo mt-4 mb-5">
          <div className="moreInfotitle mb-2">
            <h1>{t("more")}</h1>
          </div>
          <div className="boxes">
            <div className="box box1">
              <a lassName="nav-link" href="/vida">
                <img src={vidaImg} alt="Vida Img" className="responsive-img"/>
                <p>{t("vida")}</p>
              </a>
            </div>
            <div className="box box2">
              <a className="nav-link" href="/obra">
                <img src={obraImg} alt="Obra Img" className="responsive-img"/>
                <p>{t("obra")}</p>
              </a>
            </div>
            <div className="box box3">
              <a className="nav-link" href="/escritos">
                <img src={escritosImg} alt="Escritos Img" className="responsive-img"/>
                <p>{t("escritos")}</p>
              </a>
            </div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Home;
