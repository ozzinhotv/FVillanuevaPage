import React from "react";
import croquis_caoma_black from "../../src/assets/Croquis_caomabw.gif"
import sillaDelDiablo from "../../src/assets/sillaDelDiablo.png"
import crvUcv1952 from "../../src/assets/crvUcv1952.png"
import vidaImg from "../../src/assets/Vida.png"
import obraImg from "../../src/assets/obrax.jpg"
import escritosImg from "../../src/assets/Escritos.png"
import "../../src/styles/Home.css";
import { useTranslation } from "react-i18next";

function Home() {
  const {t}=useTranslation(['homePage'])
  return (
    <div className="Home">
      <img className="croquis" alt="" src={croquis_caoma_black}/>
      <div className="container">  
        <div className="homeContainer">
          <div className="fundacionVillanuevaInfoHome m-4">
            <div className="fundacionVillanuevaTitleHome lead mb-4">
                <h1>{t("name")}</h1>
              </div>
            <div className="fVillanueva grid m-3">
                <div className="fundacionVillanuevaImgHome">
                    <p>
                        <img src={sillaDelDiablo} alt="Silla del Diablo" style={{objectFit: "cover", width: "65%", height: "auto"}}/>
                        <br></br>
                        <span>Carlos Raul Villanueva en Caoma, Caracas 1960.</span>
                        <br></br>
                        <span>Foto: Alfredo Brandler.</span>
                    </p>
                </div>
                <div>
                    <div className="fundacionVillanuevaDescriptionHome lead">
                        <p>
                        {t("fvDescription")}
                        </p>
                    </div>
                </div>
            </div>
          </div>
          <hr className="divider"></hr>
          <div className="crvInfoHome m-4">
            <div className="crvTitleHome lead mb-4">
                <h1>Carlos Raúl Villanueva</h1>
              </div>
            <div className="crvGrid grid m-3">
                <div>
                    <div className="crvDescriptionHome lead m">
                        <p>
                        {t("sibylTextPt1")}
                        </p>
                        <p>
                        {t("sibylTextPt2")}
                        </p>
                    </div>
                </div>
                <div className="crvImgHome">
                    <p>
                        <img src={crvUcv1952} alt="crvUcv1952" style={{objectFit: "cover", width: "65%", height: "auto"}}/>
                        <br></br>
                        <span>Ciudad Universitaria, Caracas 1952.</span>
                        <br></br>
                        <span>Foto: Hamilton Wright.</span>
                    </p>
                </div>
            </div>
          </div>
          <hr className="divider"></hr>
          <div className="moreInfo m-5">
          <div className="moreInfotitle lead mb-4">
                <h1>Consulta mas informacion sobre:</h1>
              </div>
            <div className="boxes">
              <div className="box1">
              <img src={vidaImg} alt="Vida Img" style={{objectFit: "cover", width: "100%", height: "420px", borderRadius: "5%"}}/>
                <p>Vida</p>
              </div>
              <div className="box2">
              <img src={obraImg} alt="Obra Img" style={{objectFit: "cover", width: "100%", height: "420px", borderRadius: "5%"}}/>
                <p>Obra</p>
              </div>
              <div className="box3">
              <img src={escritosImg} alt="Escritos Img" style={{objectFit: "cover", width: "100%", height: "420px", borderRadius: "5%"}}/>
                <p>Escritos</p>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Home
