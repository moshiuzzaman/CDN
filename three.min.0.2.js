let controllerValue;

if (typeof mainControllerValue == "object") {
  controllerValue = mainControllerValue;
} else {
  controllerValue = {
    mainHaeding: "3D viewer",
    assetLink: "https://threejsfundamentals.org/threejs/resources/models/cartoon_lowpoly_small_city_free_pack/scene.gltf",
    controllerVisibility: true,
    rotation: 10,
    maxAngleForOrbit: 3.4,
    minAngleForOrbit: 0,
    zoomMax: 50,
    zoomMin: 10,
    defaultbg: "green",
    bgColor: ["skyblue", "#D14250", "#8B9298", "#3888FD", "#198754", "#FFC107"],
    bgTexrute: [
      {
        texture_ft: "https://raw.githubusercontent.com/Siam456/FT_Filees/main/backgroundTexture/tropic_ft.jpg",
        texture_bk: "https://raw.githubusercontent.com/Siam456/FT_Filees/main/backgroundTexture/tropic_bk.jpg",
        texture_up: "https://raw.githubusercontent.com/Siam456/FT_Filees/main/backgroundTexture/tropic_up.jpg",
        texture_dn: "https://raw.githubusercontent.com/Siam456/FT_Filees/main/backgroundTexture/tropic_dn.jpg",
        texture_rt: "https://raw.githubusercontent.com/Siam456/FT_Filees/main/backgroundTexture/tropic_rt.jpg",
        texture_lf: "https://raw.githubusercontent.com/Siam456/FT_Filees/main/backgroundTexture/tropic_lf.jpg",
      },
      {
        texture_ft: "https://raw.githubusercontent.com/Siam456/FT_Filees/main/backgroundTexture/arid2_ft.jpg",
        texture_bk: "https://raw.githubusercontent.com/Siam456/FT_Filees/main/backgroundTexture/arid2_bk.jpg",
        texture_up: "https://raw.githubusercontent.com/Siam456/FT_Filees/main/backgroundTexture/arid2_up.jpg",
        texture_dn: "https://raw.githubusercontent.com/Siam456/FT_Filees/main/backgroundTexture/arid2_dn.jpg",
        texture_rt: "https://raw.githubusercontent.com/Siam456/FT_Filees/main/backgroundTexture/arid2_rt.jpg",
        texture_lf: "https://raw.githubusercontent.com/Siam456/FT_Filees/main/backgroundTexture/arid2_lf.jpg",
      },
      {
        texture_ft: "https://raw.githubusercontent.com/Siam456/FT_Filees/main/backgroundTexture/zeus_ft.jpg",
        texture_bk: "https://raw.githubusercontent.com/Siam456/FT_Filees/main/backgroundTexture/zeus_bk.jpg",
        texture_up: "https://raw.githubusercontent.com/Siam456/FT_Filees/main/backgroundTexture/zeus_up.jpg",
        texture_dn: "https://raw.githubusercontent.com/Siam456/FT_Filees/main/backgroundTexture/zeus_dn.jpg",
        texture_rt: "https://raw.githubusercontent.com/Siam456/FT_Filees/main/backgroundTexture/zeus_rt.jpg",
        texture_lf: "https://raw.githubusercontent.com/Siam456/FT_Filees/main/backgroundTexture/zeus_lf.jpg",
      },
    ],
    htmlRotationSpeedMin: -50,
    htmlRotationSpeedMax: 50,
    htmlRotationSpeedStep: 5,
    htmlRotationSpeedDefaultValue: 10,

    htmlRotationtopLimiteMin: 1.6,
    htmlRotationtopLimiteMax: 3.2,
    htmlRotationBottonLimiteMin: 0,
    htmlRotationBottonLimiteMax: 1.6,
    htmlRotationLimiteStep: 0.2,
    htmlRotationtopLimiteDefaultValue: 3.1,
    htmlRotationBottonLimiteDefaultValue: 0,

    htmlZoomInMin: -10,
    htmlZoomInMax: 10,
    htmlZoomOutMin: 50,
    htmlZoomOutMax: 90,
    zoomStape: 2,
    htmlZoomInDefaultValue: 10,
    htmlZoomOutDefaultValue: 50,
  };
}

if (typeof controllerValue.controllerVisibility !== "boolean") {
  controllerValue.controllerVisibility = true;
}

document.getElementById("bs__root").innerHTML = `
<div class="container">
        <div class="heading">
            <h1>${controllerValue.mainHaeding ? controllerValue.mainHaeding : " "}</h1>

        </div>
        <div class="wrapper" id="wrapperId">
            <div class="canvasWrapper">
                <div class="actionButton">
                    <button id="fullscreen"><img height="15px"
                            src="https://img.icons8.com/ios-glyphs/30/000000/full-screen--v1.png" /></button>
                    <button id="snapshot"><img height="15px"
                            src="https://img.icons8.com/ios-glyphs/30/000000/screenshot.png" /></button>
                </div>
                <canvas id="myCanvasElement"></canvas>
            </div>

            <div id="functions" class="">


                <div class="config">
                    <h6 class="configText">Configuration</h6>
                </div>

                <!-- rotation section -->
                <button id="col1" class="collapsible"><span>Rotation</span><img id="icon1" src="https://img.icons8.com/ios-filled/50/000000/expand-arrow--v1.png" /></button>
                <div class="content">
                    <div class="sectionWrapper">
                        <div class="autoRotation flexSpaceBetween">
                            <p>Autorotation</p>
                            <label class="switch">
                                <input type="checkbox" id="autoRotationBtn" checked>
                                <span class="slider round"></span>
                            </label>
                        </div>

                        <div class="autoRotation">
                            <p>Autorotation speed</p>
                            <input type="range" min=${controllerValue.htmlRotationSpeedMin ? controllerValue.htmlRotationSpeedMin : -50} max=${
  controllerValue.htmlRotationSpeedMax ? controllerValue.htmlRotationSpeedMax : 50
} 
                            step=${controllerValue.htmlRotationSpeedStep ? controllerValue.htmlRotationSpeedStep : 5} 
                            value=${
                              controllerValue.htmlRotationSpeedStep ? controllerValue.htmlRotationSpeedStep : 10
                            } class="sliderRange" id="myRange">

                        </div>

                        <div class="autoRotation">
                            <p>Rotation Top Limit</p>
                            <input type="range" 
                            min=${controllerValue.htmlRotationtopLimiteMin ? controllerValue.htmlRotationtopLimiteMin : 1.6} 
                            max=${controllerValue.htmlRotationtopLimiteMax ? controllerValue.htmlRotationtopLimiteMax : 3.2} 
                            step=${controllerValue.htmlRotationLimiteStep ? controllerValue.htmlRotationLimiteStep : 0.2} 
                            value=${
                              controllerValue.htmlRotationtopLimiteDefaultValue ? controllerValue.htmlRotationtopLimiteDefaultValue : 3.1
                            } class="sliderRange"
                                id="myRangeTopLimite">

                        </div>
                        <div class="autoRotation">
                            <p>Rotation Bottom Limit</p>
                            <input type="range" 
                            min=${controllerValue.htmlRotationBottonLimiteMin ? controllerValue.htmlRotationBottonLimiteMin : 0} 
                            max=${controllerValue.htmlRotationBottonLimiteMax ? controllerValue.htmlRotationBottonLimiteMax : 1.6} 
                            step=${controllerValue.htmlRotationLimiteStep ? controllerValue.htmlRotationLimiteStep : 0.2}
                            value=${controllerValue.htmlRotationBottonLimiteDefaultValue ? controllerValue.htmlRotationBottonLimiteDefaultValue : 0} 
                            class="sliderRange reversedRange"
                                id="myRangeBottomLimite">

                        </div>
                    </div>
                </div>


                <!-- zoom section  -->

                <button id="col2" class="collapsible"><span>Zoom</span> <img id="icon2" src="https://img.icons8.com/ios-filled/50/000000/expand-arrow--v1.png" /></button>
                <div class="content">
                    <div class="sectionWrapper">

                        <div class="autoRotation flexSpaceBetween">
                            <p>Zoom Enable</p>
                            <label class="switch">
                                <input type="checkbox" id="ZoomBtn" checked>
                                <span class="slider round"></span>
                            </label>
                        </div>

                        <div class="autoRotation">
                            <p>Zoom In limit</p>
                            <input type="range" 
                            min=${controllerValue.htmlZoomInMin ? controllerValue.htmlZoomInMin : -10} 
                            max=${controllerValue.htmlZoomInMax ? controllerValue.htmlZoomInMax : 10} 
                            step=${controllerValue.zoomStape ? controllerValue.zoomStape : 2} 
                            value=${controllerValue.htmlZoomInDefaultValue ? controllerValue.htmlZoomInDefaultValue : 10} 
                            class="sliderRange reversedRange"
                                id="ZoomLimiteIn">

                        </div>
                        <div class="autoRotation">
                            <p>Zoom Out limit</p>
                            <input type="range" 
                            min=${controllerValue.htmlZoomOutMin ? controllerValue.htmlZoomOutMin : 50} 
                            max=${controllerValue.htmlZoomOutMax ? controllerValue.htmlZoomOutMax : 90} 
                            step=${controllerValue.zoomStape ? controllerValue.zoomStape : 2} 
                            value=${controllerValue.htmlZoomOutDefaultValue ? controllerValue.htmlZoomOutDefaultValue : 50} 
                            class="sliderRange "
                                id="ZoomLimiteOut">

                        </div>
                    </div>
                </div>



                <!-- background section -->
                <button id="col3" class="collapsible"><span>background</span> <img id="icon3" src="https://img.icons8.com/ios-filled/50/000000/expand-arrow--v1.png" /></button>
                <div class="content">
                    <div class="btnGroup">
                        <button class="bgBtn bgLeftBtn">Plain Background</button>
                        <button class="bgBtn bgRightBtn">Texture Background</button>
                    </div>
                    <div class="sectionWrapper">
                        <div id="plainBackground">
                            <p class='pbg'>Choose Plain Background Color</p>
                            
                            <div class="bgInputWrapper">
                            <div class = 'pbg'>
                                <div class="radioInputDiv">
                                    <input class="hide" type="radio" id="skyblue" name="bg" value="skyblue">
                                    <label class="radioLabel Skyblue" for="skyblue"></label>
                                </div>

                                <div class="radioInputDiv">
                                    <input class="hide" type="radio" id="red" name="bg" value="red">
                                    <label class="radioLabel red" for="red"></label>
                                </div>

                                <div class="radioInputDiv">
                                    <input class="hide" type="radio" id="gray" name="bg" value="gray">
                                    <label class="radioLabel gray" for="gray"></label>
                                </div>

                                <div class="radioInputDiv">
                                    <input class="hide" type="radio" id="blue" name="bg" value="blue">
                                    <label class="radioLabel blue" for="blue"></label>
                                </div>

                                <div class="radioInputDiv">
                                    <input class="hide" type="radio" id="green" name="bg" value="green">
                                    <label class="radioLabel green" for="green"></label>
                                </div>

                                <div class="radioInputDiv">
                                    <input class="hide" type="radio" id="yellow" name="bg" value="yellow">
                                    <label class="radioLabel yellow" for="yellow"></label>
                                </div>
                            </div>
                            <div class='pbg_msg'>
                                No background available check texture
                            </div>
                            </div>
                        </div>
                        <div id="TextureBackground" class="hide">
                            <p class='tbg'>Choose Texture Background</p>
                            
                            <div class="bgInputWrapper">
                                <div class='tbg'>
                                    <div class="radioInputDiv">
                                        <input class="hide" type="radio" id="texture1" name="bg" value="texture1">
                                        <label class="radioLabel texture1" for="texture1"></label>
                                    </div>

                                    <div class="radioInputDiv">
                                        <input class="hide" type="radio" id="texture2" name="bg" value="texture2">
                                        <label class="radioLabel texture2" for="texture2"></label>
                                    </div>

                                    <div class="radioInputDiv">
                                        <input class="hide" type="radio" id="texture3" name="bg" value="texture3">
                                        <label class="radioLabel texture3" for="texture3"></label>
                                    </div>
                                </div>

                                <div class='tbg_msg'>
                                    No background available check plane
                                </div>

                            </div>
                        </div>
                    </div>
                    <br><br>
                </div>

                <!-- upload section -->
                <button id="col4" class="collapsible"><span>Upload a model</span> <img id="icon4" src="https://img.icons8.com/ios-filled/50/000000/expand-arrow--v1.png" /></button>
                <div class="content">
                    <div class="btnGroup">
                        <button class="bgBtn upLeftBtn">File Upload</button>
                        <button class="bgBtn upRightBtn">URL Upload</button>
                    </div>

                    <div class="sectionWrapper">
                        <div id="uploadFile">
                            <p>Upload a gltf/obj/fbx file</p>
                            <br>
                            <input type="file" id="fileInput">
                            <button id="fileUploadBtn" class="btn">File Upload</button>
                        </div>
                        <div id="urlFile" class="hide">
                            <p>gltf/fbx/obj model url</p>
                            <br>
                            <input type="text" id="urlInput" placeholder="Enter URL Here" autocomplete="off">
                            <button id="urlUploadBtn" class="btn">URL Upload</button>
                        </div>


                        <br><br>
                    </div>
                </div>
            </div>

        </div>
    </div>`;

// Add style ***********

let styles = `@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai+Looped:wght@100;300&display=swap');

* {
    margin: 0;
    padding: 0;
}
*:focus {
    outline: none;
}

body {
    height: 100vh;
}

.container {
    width: 80%;
    margin: auto;
    height: auto;
}

.wrapper {
    display: flex;
    height: 80%;
}

.wrapperClone {
    display: grid;
    grid-template-columns: auto;
    height: 80%;
}

.canvasWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    
}

canvas {
    height: 70vh;
    width: 100%;
}

.actionButton {
    position: absolute;
    right: 10px;
    top: 10px;
}

.actionButton button {
    padding: 13px 15px;
    margin: 2px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
}

.heading h1 {
    text-align: center;
    font-size: 50px;
    margin-bottom: 1rem;
    font-family: IBM Plex Sans Thai Looped;
}

#functions {
    display: ${controllerValue.controllerVisibility ? "block" : "none"};
    padding: 0 20px;
    width: 67%;
}
.sectionWrapper {
    width: 95%;
    margin: auto;
}

.hide {
    display: none;
}

.reversedRange {
    direction: rtl;
}

.config {
    padding: 15px 0;
    background: #f1f1f1;
}

.configText {
    text-align: center;
    font-family: IBM Plex Sans Thai Looped;
    /* font-weight: bold; */
    font-size: 1rem;
}

.font_style{
    font-family: IBM Plex Sans Thai Looped;
    font-weight: bold;
}
.pbg, .tbg{
    font-family: IBM Plex Sans Thai Looped;
}

/* collapsable */

.collapsible {
    background-color: white;
    color: #009fdb;
    font-weight: bold;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 2px;
    cursor: pointer;
    padding: 17px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    text-align: left;
    outline: none;
    font-size: 15px;
}

.rotation {
    transform: rotate(-180deg);
}

i{
    transition: 00.5s ease;
    color: black;
}
button img{
    transition: 00.5s ease;
    width: 16px;
}

.content {
    padding: 0 18px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
    background-color: #f1f1f1;
}

/* rotation section  */

.autoRotation {
    margin: 10px ;
}

.flexSpaceBetween {
    display: flex;
    justify-content: space-between;
}

/* checkbox design/ */

.switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

input:checked + .slider {
    background-color: #2196f3;
}

input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}

/* range input design  */

.sliderRange {
    margin: 10px;
    -webkit-appearance: none;
    width: 100%;
    height: 10px;
    border-radius: 5px;
    background: #d3d3d3;
    outline: none;
    opacity: 1;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
}

.sliderRange::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: blue;
    cursor: pointer;
}

.sliderRange::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #04aa6d;
    cursor: pointer;
}

/* background section */

.bgInputWrapper {
    display: flex;
}
.pbg{
    display: ${controllerValue.bgColor ? (controllerValue.bgColor.length !== 0 ? "flex" : "none") : "none"};
}
.pbg_msg{
    padding: 25px;
    display: ${controllerValue.bgColor ? (controllerValue.bgColor.length !== 0 ? "none" : "flex") : "flex"};
}

.radioInputDiv {
    margin: 5px;
}

.radioLabel {
    padding: 23px 23px;
    border-radius: 5px;
    cursor: pointer;
}

.Skyblue {
    display: ${
      typeof controllerValue === undefined ? "skyblue" : controllerValue.bgColor ? (controllerValue.bgColor[0] ? "inline-block" : "none") : "none"
    };
    background: ${controllerValue.bgColor ? controllerValue.bgColor[0] : "skyblue"};
}

.red {
    display: ${controllerValue.bgColor ? (controllerValue.bgColor[1] ? "inline-block" : "none") : "none"};
    background: ${controllerValue.bgColor ? controllerValue.bgColor[1] : "skyblue"};
}

.gray {
    display: ${controllerValue.bgColor ? (controllerValue.bgColor[2] ? "inline-block" : "none") : "none"};
    background: ${controllerValue.bgColor ? controllerValue.bgColor[2] : "skyblue"};
}

.blue {
    display: ${controllerValue.bgColor ? (controllerValue.bgColor[3] ? "inline-block" : "none") : "none"};
    background: ${controllerValue.bgColor ? controllerValue.bgColor[3] : "skyblue"};
}

.green {
    display: ${controllerValue.bgColor ? (controllerValue.bgColor[4] ? "inline-block" : "none") : "none"};
    background: ${controllerValue.bgColor ? controllerValue.bgColor[4] : "skyblue"};
}

.yellow {
    display: ${controllerValue.bgColor ? (controllerValue.bgColor[5] ? "inline-block" : "none") : "none"};
    background: ${controllerValue.bgColor ? controllerValue.bgColor[5] : "skyblue"};
}

/* texture background start */

.tbg{
    display: ${controllerValue.bgTexrute ? (controllerValue.bgTexrute.length > 0 ? "flex" : "none") : "none"};
}
.tbg_msg{
    display: ${controllerValue.bgTexrute ? (controllerValue.bgTexrute.length > 0 ? "none" : "flex") : "flex"};
    padding: 25px;
}

.texture1 {
    display: ${controllerValue.bgTexrute ? (controllerValue.bgTexrute[0] ? "inline-block" : "none") : "none"};
    background: url( ${controllerValue.bgTexrute ? (controllerValue.bgTexrute[0] ? controllerValue.bgTexrute[0].texture_rt : "none") : "none"});
    background-repeat: no-repeat;
    background-size: 50px 50px;
    
}
.texture2 {
    display: ${controllerValue.bgTexrute ? (controllerValue.bgTexrute[1] ? "inline-block" : "none") : "none"};
    background: url( ${controllerValue.bgTexrute ? (controllerValue.bgTexrute[1] ? controllerValue.bgTexrute[1].texture_rt : "none") : "none"});
    background-repeat: no-repeat;
    background-size: 50px 50px;
}
.texture3 {
    display: ${controllerValue.bgTexrute ? (controllerValue.bgTexrute[2] ? "inline-block" : "none") : "none"};
    background: url( ${controllerValue.bgTexrute ? (controllerValue.bgTexrute[2] ? controllerValue.bgTexrute[2].texture_rt : "none") : "none"});
    background-repeat: no-repeat;
    background-size: 50px 50px;
}

/* texture background end */
.btnGroup {
    display: flex;
    margin: 15px;
    /*  */
}
.bgBtn {
    background: none;
    flex: 1 1 auto;
    padding: 13px 0;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}
.bgLeftBtn,
.upLeftBtn {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    background: #37c1dc;
    transition: background-color 0.5s ease;
}
.bgRightBtn,
.upRightBtn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background: #246ad0;
    color: white;
    transition: background-color 0.5s ease;
}
.bgLeftBtn:hover,
.upLeftBtn:hover {
    background: #34b1c9;
}
.bgRightBtn:hover,
.upRightBtn:hover {
    background: #215eb8;
}

#plainBackground {
    width: 100%;
}
#TextureBackground {
    width: 100%;
}

input {
    width: 100%;
}

/* file upload */

#fileInput,
#urlInput {
    padding: 8px;
    border: 1px solid #ccc;
}

.btn {
    width: 100%;
    padding: 10px;
    border: none;
    margin: 10px 0;
    background: #157347;
    color: white;
    border-radius: 5px;
    transition: background-color 0.5s ease;
}
.btn:hover {
    background: rgb(9, 77, 45);
}

/* container */

@media only screen and (max-width: 1000px) {
    .container {
        width: 97%;
    }
}
@media only screen and (max-width: 750px) {
    .wrapper {
        display: block;
    }
    #functions {
        
        padding: 20px 0;
        width: auto;
    }
    .container {
        width: 80%;
    }
}
`;
let styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

//threejs script files **************************

//importing necessary things
import * as THREE from "three";
import { OrbitControls } from "https://cdn.jsdelivr.net/gh/Siam456/FT_Filees@main/files/OrbitControls.js";

import { GLTFLoader, OBJLoader, FBXLoader } from "https://cdn.jsdelivr.net/gh/Siam456/FT_Filees@main/files/Loader.js";
import { DRACOLoader } from "https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/jsm/loaders/DRACOLoader.js";
//console.log(ARButton);
let camera,
  scene,
  renderer,
  obj = "",
  mixer,
  controls;

let rotation = controllerValue.rotation || 10,
  maxAngleForOrbit = controllerValue.maxAngleForOrbit || 3.4,
  minAngleForOrbit = controllerValue.minAngleForOrbit || 0,
  zoomMax = controllerValue.zoomMax || 50,
  zoomMin = controllerValue.zoomMin || 10;

const clock = new THREE.Clock();

init();
render();

function init() {
  //getting canvas
  var canvReference = document.getElementById("myCanvasElement");

  //create scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(
    controllerValue.bgColor ? controllerValue.bgColor[0] : controllerValue.defaultbg ? controllerValue.defaultbg : "skyblue"
  );

  //set resderer
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvReference,
    preserveDrawingBuffer: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  const canvas = renderer.domElement;
  // look up the size the canvas is being displayed
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  //setup camera
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);

  camera.lookAt(scene.position);
  camera.position.set(0, 0, 25);

  // adjust displayBuffer size to match
  if (canvas.width !== width || canvas.height !== height) {
    // you must pass false here or three.js sadly fights the browser
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    // update any render target sizes here
  }

  //setup light
  let light = new THREE.HemisphereLight(0xffffbb, 0x080820, 0.8);

  scene.add(light);

  let DirectionalLightbt = new THREE.DirectionalLight(0xffffff, 0.7);
  DirectionalLightbt.position.set(3, -8, 1.5);

  scene.add(DirectionalLightbt);

  let DirectionalLightside = new THREE.DirectionalLight(0xffffff, 0.5);
  DirectionalLightside.position.set(7, 8, 0);

  scene.add(DirectionalLightside);

  let DirectionalLightside2 = new THREE.DirectionalLight(0xffffff, 0.5);
  DirectionalLightside2.position.set(-7, 8, 0);

  scene.add(DirectionalLightside2);

  // const helper = new THREE.DirectionalLightHelper( DirectionalLightbt, 5 );
  // scene.add( helper );

  // file handle start
  let file = null,
    x;

  const FBXloader = new FBXLoader();
  const GLTFloader = new GLTFLoader();
  const OBJloader = new OBJLoader();

  if (controllerValue.assetLink) {
    let fileName = controllerValue.assetLink.split(".");
    let fileExt = fileName[fileName.length - 1];

    if (fileExt === "fbx") {
      scene.remove(obj);
      FBXloader.load(controllerValue.assetLink, function (fbx) {
        obj = fbx;
        var bbox = new THREE.Box3().setFromObject(obj);
        var size = bbox.getSize(new THREE.Vector3());

        var maxAxis = Math.max(size.x, size.y, size.z);

        if (!isNaN(maxAxis)) {
          obj.scale.multiplyScalar(10 / maxAxis);
        } else {
          obj.scale.set(0.02, 0.02, 0.02);
        }

        const offset = new THREE.Vector3();
        bbox.getCenter(offset).negate();
        obj.children.forEach((element) => {
          if (element.children.length === obj.children.length) element.position.set(offset.x, offset.y, offset.z);
        });

        if (obj.animations.length) {
          mixer = new THREE.AnimationMixer(obj);
          const action = mixer.clipAction(obj.animations[0]);
          action.play();
          obj.castShadow = true;
        }
        scene.add(obj);
      });
    } else if (fileExt === "glb" || fileExt === "gltf") {
      scene.remove(obj);

      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderConfig({ type: "js" });
      dracoLoader.setDecoderPath("https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/libs/draco/");
      GLTFloader.setDRACOLoader(dracoLoader);

      GLTFloader.load(controllerValue.assetLink, function (gltf) {
        obj = gltf.scene;
        var bbox = new THREE.Box3().setFromObject(obj);
        var size = bbox.getSize(new THREE.Vector3());

        var maxAxis = Math.max(size.x, size.y, size.z);

        if (!isNaN(maxAxis)) {
          obj.scale.multiplyScalar(10 / maxAxis);
        } else {
          obj.scale.set(0.02, 0.02, 0.02);
        }

        const offset = new THREE.Vector3();
        bbox.getCenter(offset).negate();
        obj.children.forEach((element) => {
          if (element.children.length === obj.children.length) element.position.set(offset.x, offset.y, offset.z);
        });

        if (gltf.animations.length) {
          mixer = new THREE.AnimationMixer(gltf.scene);
          mixer.clipAction(gltf.animations[0]).play();
        }
        // console.log(obj);
        scene.add(obj);
      });
    } else if (fileExt === "obj") {
      scene.remove(obj);
      OBJloader.load(controllerValue.assetLink, function (objNew) {
        obj = objNew;
        // console.log(obj);
        var bbox = new THREE.Box3().setFromObject(obj);
        var size = bbox.getSize(new THREE.Vector3());

        var maxAxis = Math.max(size.x, size.y, size.z);

        if (!isNaN(maxAxis)) {
          obj.scale.multiplyScalar(10 / maxAxis);
        } else {
          obj.scale.set(0.02, 0.02, 0.02);
        }

        const offset = new THREE.Vector3();
        bbox.getCenter(offset).negate();
        obj.children.forEach((element) => {
          if (element.children.length === obj.children.length) element.position.set(offset.x, offset.y, offset.z);
        });

        if (obj.animations.length) {
          mixer = new THREE.AnimationMixer(obj);
          const action = mixer.clipAction(obj.animations[0]);
          action.play();
          obj.castShadow = true;
        }
        scene.add(obj);
      });
    }
  } else {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderConfig({ type: "js" });
    dracoLoader.setDecoderPath("https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/libs/draco/");
    GLTFloader.setDRACOLoader(dracoLoader);
    GLTFloader.load("https://threejsfundamentals.org/threejs/resources/models/cartoon_lowpoly_small_city_free_pack/scene.gltf", function (gltf) {
      obj = gltf.scene;
      var bbox = new THREE.Box3().setFromObject(obj);
      var size = bbox.getSize(new THREE.Vector3());

      var maxAxis = Math.max(size.x, size.y, size.z);

      if (!isNaN(maxAxis)) {
        obj.scale.multiplyScalar(10 / maxAxis);
      } else {
        obj.scale.set(0.02, 0.02, 0.02);
      }

      const offset = new THREE.Vector3();
      bbox.getCenter(offset).negate();
      obj.children.forEach((element) => {
        if (element.children.length === obj.children.length) element.position.set(offset.x, offset.y, offset.z);
      });

      if (gltf.animations.length) {
        mixer = new THREE.AnimationMixer(gltf.scene);
        mixer.clipAction(gltf.animations[0]).play();
      }
      // console.log(obj);
      scene.add(obj);
    });
  }

  //events for file uploader start
  const inputElement = document.getElementById("fileInput");
  inputElement.addEventListener("change", handleFiles, false);

  function handleFiles() {
    const fileList = this.files;
    file = fileList[0];
  }

  document.getElementById("fileUploadBtn").addEventListener("click", () => {
    x = URL.createObjectURL(file);
    // console.log(x);

    let fileName = file.name.split(".");
    let fileExt = fileName[fileName.length - 1];

    if (fileExt === "fbx") {
      scene.remove(obj);
      FBXloader.load(x, function (fbx) {
        obj = fbx;
        var bbox = new THREE.Box3().setFromObject(obj);
        var size = bbox.getSize(new THREE.Vector3());

        var maxAxis = Math.max(size.x, size.y, size.z);

        let y = 0.5;
        if (!isNaN(maxAxis)) {
          obj.scale.multiplyScalar(10 / maxAxis);
          // y = 10 / maxAxis + 1;
        } else {
          obj.scale.set(0.02, 0.02, 0.02);
          y = 0.1;
        }

        const offset = new THREE.Vector3();
        bbox.getCenter(offset).negate();
        for (let element of obj.children) {
          if (element.children.length === obj.children.length) {
            element.position.set(offset.x, offset.y, offset.z);
            break;
          } else obj.position.y -= y;
        }
        // console.log(obj);

        if (obj.animations.length) {
          mixer = new THREE.AnimationMixer(obj);
          for (let i = 0; i < obj.animations.length; i++) {
            mixer.clipAction(obj.animations[0]).play();
          }

          obj.castShadow = true;
        }

        scene.add(obj);
      });
    } else if (fileExt === "glb" || fileExt === "gltf") {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderConfig({ type: "js" });
      dracoLoader.setDecoderPath("https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/libs/draco/");
      GLTFloader.setDRACOLoader(dracoLoader);

      scene.remove(obj);
      GLTFloader.load(x, function (gltf) {
        obj = gltf.scene;
        var bbox = new THREE.Box3().setFromObject(obj);
        // var cent = bbox.getCenter(new THREE.Vector3());
        var size = bbox.getSize(new THREE.Vector3());

        var maxAxis = Math.max(size.x, size.y, size.z);
        if (!isNaN(maxAxis)) {
          obj.scale.multiplyScalar(10 / maxAxis);
        } else {
          obj.scale.set(0.02, 0.02, 0.02);
        }

        const offset = new THREE.Vector3();
        bbox.getCenter(offset).negate();
        obj.children.forEach((element) => {
          if (element.children.length === obj.children.length) element.position.set(offset.x, offset.y, offset.z);
        });

        // console.log(gltf.animations.length);
        if (gltf.animations.length) {
          mixer = new THREE.AnimationMixer(gltf.scene);
          mixer.clipAction(gltf.animations[0]).play();
        }

        scene.add(obj);
      });
    } else if (fileExt === "obj") {
      scene.remove(obj);
      OBJloader.load(x, function (objNew) {
        obj = objNew;
        var bbox = new THREE.Box3().setFromObject(obj);
        var size = bbox.getSize(new THREE.Vector3());

        var maxAxis = Math.max(size.x, size.y, size.z);

        if (!isNaN(maxAxis)) {
          obj.scale.multiplyScalar(10 / maxAxis);
        } else {
          obj.scale.set(0.02, 0.02, 0.02);
        }

        const offset = new THREE.Vector3();
        bbox.getCenter(offset).negate();
        obj.children.forEach((element) => {
          if (element.children.length === obj.children.length) element.position.set(offset.x, offset.y, offset.z);
        });

        if (obj.animations.length) {
          mixer = new THREE.AnimationMixer(obj);
          const action = mixer.clipAction(obj.animations[0]);
          action.play();
          obj.castShadow = true;
        }
        // console.log(objNew);

        scene.add(obj);
      });
    }
  });

  //events for file uploader end

  //events for url uploader start

  let link;
  const urlinputElement = document.getElementById("urlInput");
  urlinputElement.addEventListener("change", urlhandleFiles, false);

  function urlhandleFiles() {
    link = this.value;
  }

  document.getElementById("urlUploadBtn").addEventListener("click", () => {
    x = link;

    let fileName = link.split(".");
    let fileExt = fileName[fileName.length - 1];

    if (fileExt === "fbx") {
      scene.remove(obj);
      FBXloader.load(x, function (fbx) {
        obj = fbx;
        var bbox = new THREE.Box3().setFromObject(obj);
        var size = bbox.getSize(new THREE.Vector3());

        var maxAxis = Math.max(size.x, size.y, size.z);

        if (!isNaN(maxAxis)) {
          obj.scale.multiplyScalar(10 / maxAxis);
        } else {
          obj.scale.set(0.02, 0.02, 0.02);
        }

        const offset = new THREE.Vector3();
        bbox.getCenter(offset).negate();
        obj.children.forEach((element) => {
          if (element.children.length === obj.children.length) element.position.set(offset.x, offset.y, offset.z);
        });

        if (obj.animations.length) {
          mixer = new THREE.AnimationMixer(obj);
          const action = mixer.clipAction(obj.animations[0]);
          action.play();
          obj.castShadow = true;
        }
        scene.add(obj);
      });
    } else if (fileExt === "glb" || fileExt === "gltf") {
      scene.remove(obj);

      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderConfig({ type: "js" });
      dracoLoader.setDecoderPath("https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/libs/draco/");
      GLTFloader.setDRACOLoader(dracoLoader);

      GLTFloader.load(x, function (gltf) {
        obj = gltf.scene;
        var bbox = new THREE.Box3().setFromObject(obj);
        var size = bbox.getSize(new THREE.Vector3());

        var maxAxis = Math.max(size.x, size.y, size.z);

        if (!isNaN(maxAxis)) {
          obj.scale.multiplyScalar(10 / maxAxis);
        } else {
          obj.scale.set(0.02, 0.02, 0.02);
        }

        const offset = new THREE.Vector3();
        bbox.getCenter(offset).negate();
        obj.children.forEach((element) => {
          if (element.children.length === obj.children.length) element.position.set(offset.x, offset.y, offset.z);
        });

        if (gltf.animations.length) {
          mixer = new THREE.AnimationMixer(gltf.scene);
          mixer.clipAction(gltf.animations[0]).play();
        }
        // console.log(obj);
        scene.add(obj);
      });
    } else if (fileExt === "obj") {
      scene.remove(obj);
      OBJloader.load(x, function (objNew) {
        obj = objNew;
        // console.log(obj);
        var bbox = new THREE.Box3().setFromObject(obj);
        var size = bbox.getSize(new THREE.Vector3());

        var maxAxis = Math.max(size.x, size.y, size.z);

        if (!isNaN(maxAxis)) {
          obj.scale.multiplyScalar(10 / maxAxis);
        } else {
          obj.scale.set(0.02, 0.02, 0.02);
        }

        const offset = new THREE.Vector3();
        bbox.getCenter(offset).negate();
        obj.children.forEach((element) => {
          if (element.children.length === obj.children.length) element.position.set(offset.x, offset.y, offset.z);
        });

        if (obj.animations.length) {
          mixer = new THREE.AnimationMixer(obj);
          const action = mixer.clipAction(obj.animations[0]);
          action.play();
          obj.castShadow = true;
        }
        scene.add(obj);
      });
    }
  });

  //events for url uploader end

  // file handle end

  //setup orbit controller
  controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0, 0);

  controls.autoRotate = true;

  controls.screenSpacePanning = false;
  controls.update();

  renderer.setAnimationLoop(render);

  //for responsiveness
  window.addEventListener("resize", onWindowResize);
}

function onWindowResize() {
  const canvas = renderer.domElement;

  // look up the size the canvas is being displayed
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height, false);

  // renderer.setSize(window.innerWidth, window.innerHeight, false);
  render();
}

function render() {
  if (controls.autoRotateSpeed !== rotation) controls.autoRotateSpeed = rotation;

  if (controls.minDistance !== zoomMin) controls.minDistance = zoomMin;

  if (controls.maxDistance !== zoomMax) controls.maxDistance = zoomMax;

  if (controls.minPolarAngle !== minAngleForOrbit) controls.minPolarAngle = minAngleForOrbit;

  if (controls.maxPolarAngle !== maxAngleForOrbit) controls.maxPolarAngle = maxAngleForOrbit;

  if (mixer) mixer.update(clock.getDelta());

  controls.update();
  renderer.render(scene, camera);
}

//////////////////////////adding script file //////////////////
//////////////////////...............////////////////////////////
/////////////////////////...........//////////////////////////////////

//rotation section
var checkBox = document.getElementById("autoRotationBtn");

checkBox.addEventListener("click", () => {
  if (checkBox.checked === true) {
    //add = 0.005;
    rotation = document.getElementById("myRange").value;
    // console.log(document.getElementById("myRange").value/300 );
  } else {
    rotation = 0;
  }
});

var RotationSpeed = document.getElementById("myRange");
RotationSpeed.oninput = function () {
  checkBox.checked = true;
  rotation = this.value;
};

var RotationTopLimite = document.getElementById("myRangeTopLimite");
RotationTopLimite.oninput = function () {
  maxAngleForOrbit = this.value;
};

var RotationBottomLimite = document.getElementById("myRangeBottomLimite");
RotationBottomLimite.oninput = function () {
  minAngleForOrbit = this.value;
};

//rotation section end

//zomm section start
let inX = document.getElementById("ZoomLimiteIn").value,
  outX = document.getElementById("ZoomLimiteOut").value;

var ZoomLimiteIn = document.getElementById("ZoomLimiteIn");
ZoomLimiteIn.oninput = function () {
  checkBoxZoom.checked = true;
  zoomMin = this.value;
  inX = this.value;
};

var ZoomLimiteOut = document.getElementById("ZoomLimiteOut");
ZoomLimiteOut.oninput = function () {
  checkBoxZoom.checked = true;
  zoomMax = this.value;
  outX = this.value;
};

var checkBoxZoom = document.getElementById("ZoomBtn");

checkBoxZoom.addEventListener("click", () => {
  if (checkBoxZoom.checked !== true) {
    zoomMin = 25;
    zoomMax = 25;
  } else {
    zoomMin = inX;
    zoomMax = outX;
  }
});

//zoom section end

///scene background color change part start
let bgLeftBtn = document.querySelector(".bgLeftBtn");
let bgRightBtn = document.querySelector(".bgRightBtn");

bgLeftBtn.addEventListener("click", () => {
  document.getElementById("plainBackground").classList.remove("hide");
  document.getElementById("TextureBackground").classList.add("hide");
}); //
bgRightBtn.addEventListener("click", () => {
  document.getElementById("plainBackground").classList.add("hide");
  document.getElementById("TextureBackground").classList.remove("hide");
}); //

let skybox = null;

document.getElementsByName("bg").forEach((radio) => {
  radio.addEventListener("click", () => {
    if (radio.value === "skyblue") {
      if (skybox !== null) scene.remove(skybox);
      scene.background = new THREE.Color(controllerValue.bgColor[0]);
    } else if (radio.value === "red") {
      if (skybox !== null) scene.remove(skybox);
      scene.background = new THREE.Color(controllerValue.bgColor[1]);
    } else if (radio.value === "gray") {
      if (skybox !== null) scene.remove(skybox);
      scene.background = new THREE.Color(controllerValue.bgColor[2]);
    } else if (radio.value === "blue") {
      if (skybox !== null) scene.remove(skybox);
      scene.background = new THREE.Color(controllerValue.bgColor[3]);
    } else if (radio.value === "green") {
      if (skybox !== null) scene.remove(skybox);
      scene.background = new THREE.Color(controllerValue.bgColor[4]);
    } else if (radio.value === "yellow") {
      if (skybox !== null) scene.remove(skybox);
      scene.background = new THREE.Color(controllerValue.bgColor[5]);
    } else if (radio.value === "texture1") {
      if (skybox !== null) scene.remove(skybox);
      let materialArray = [];
      let texture_ft = new THREE.TextureLoader().load(controllerValue.bgTexrute[0].texture_ft);
      let texture_bk = new THREE.TextureLoader().load(controllerValue.bgTexrute[0].texture_bk);
      let texture_up = new THREE.TextureLoader().load(controllerValue.bgTexrute[0].texture_up);
      let texture_dn = new THREE.TextureLoader().load(controllerValue.bgTexrute[0].texture_dn);
      let texture_rt = new THREE.TextureLoader().load(controllerValue.bgTexrute[0].texture_rt);
      let texture_lf = new THREE.TextureLoader().load(controllerValue.bgTexrute[0].texture_lf);

      materialArray.push(new THREE.MeshBasicMaterial({ map: texture_ft }));
      materialArray.push(new THREE.MeshBasicMaterial({ map: texture_bk }));
      materialArray.push(new THREE.MeshBasicMaterial({ map: texture_up }));
      materialArray.push(new THREE.MeshBasicMaterial({ map: texture_dn }));
      materialArray.push(new THREE.MeshBasicMaterial({ map: texture_rt }));
      materialArray.push(new THREE.MeshBasicMaterial({ map: texture_lf }));

      for (let i = 0; i < 6; i++) materialArray[i].side = THREE.BackSide;

      let skyboxGeo = new THREE.BoxGeometry(100, 100, 100);
      skybox = new THREE.Mesh(skyboxGeo, materialArray);
      // scene.background = null;
      scene.add(skybox);
    } else if (radio.value === "texture2") {
      if (skybox !== null) scene.remove(skybox);
      let materialArray = [];
      let texture_ft = new THREE.TextureLoader().load(controllerValue.bgTexrute[1].texture_ft);
      let texture_bk = new THREE.TextureLoader().load(controllerValue.bgTexrute[1].texture_bk);
      let texture_up = new THREE.TextureLoader().load(controllerValue.bgTexrute[1].texture_up);
      let texture_dn = new THREE.TextureLoader().load(controllerValue.bgTexrute[1].texture_dn);
      let texture_rt = new THREE.TextureLoader().load(controllerValue.bgTexrute[1].texture_rt);
      let texture_lf = new THREE.TextureLoader().load(controllerValue.bgTexrute[1].texture_lf);

      materialArray.push(new THREE.MeshBasicMaterial({ map: texture_ft }));
      materialArray.push(new THREE.MeshBasicMaterial({ map: texture_bk }));
      materialArray.push(new THREE.MeshBasicMaterial({ map: texture_up }));
      materialArray.push(new THREE.MeshBasicMaterial({ map: texture_dn }));
      materialArray.push(new THREE.MeshBasicMaterial({ map: texture_rt }));
      materialArray.push(new THREE.MeshBasicMaterial({ map: texture_lf }));

      for (let i = 0; i < 6; i++) materialArray[i].side = THREE.BackSide;

      let skyboxGeo = new THREE.BoxGeometry(100, 100, 100);
      skybox = new THREE.Mesh(skyboxGeo, materialArray);
      // scene.background = null;
      scene.add(skybox);
    } else if (radio.value === "texture3") {
      if (skybox !== null) scene.remove(skybox);
      let materialArray = [];
      let texture_ft = new THREE.TextureLoader().load(controllerValue.bgTexrute[2].texture_ft);
      let texture_bk = new THREE.TextureLoader().load(controllerValue.bgTexrute[2].texture_bk);
      let texture_up = new THREE.TextureLoader().load(controllerValue.bgTexrute[2].texture_up);
      let texture_dn = new THREE.TextureLoader().load(controllerValue.bgTexrute[2].texture_dn);
      let texture_rt = new THREE.TextureLoader().load(controllerValue.bgTexrute[2].texture_rt);
      let texture_lf = new THREE.TextureLoader().load(controllerValue.bgTexrute[2].texture_lf);

      materialArray.push(new THREE.MeshBasicMaterial({ map: texture_ft }));
      materialArray.push(new THREE.MeshBasicMaterial({ map: texture_bk }));
      materialArray.push(new THREE.MeshBasicMaterial({ map: texture_up }));
      materialArray.push(new THREE.MeshBasicMaterial({ map: texture_dn }));
      materialArray.push(new THREE.MeshBasicMaterial({ map: texture_rt }));
      materialArray.push(new THREE.MeshBasicMaterial({ map: texture_lf }));

      for (let i = 0; i < 6; i++) materialArray[i].side = THREE.BackSide;

      let skyboxGeo = new THREE.BoxGeometry(100, 100, 100);
      skybox = new THREE.Mesh(skyboxGeo, materialArray);
      // scene.background = null;
      scene.add(skybox);
    }
  });
});

//change background color event end

//uploader section

///scene background color change part start
let upLeftBtn = document.querySelector(".upLeftBtn");
let upRightBtn = document.querySelector(".upRightBtn");

upLeftBtn.addEventListener("click", () => {
  document.getElementById("uploadFile").classList.remove("hide");
  document.getElementById("urlFile").classList.add("hide");
}); //
upRightBtn.addEventListener("click", () => {
  document.getElementById("uploadFile").classList.add("hide");
  document.getElementById("urlFile").classList.remove("hide");
}); //

//for collapsable design

var colBtn1 = document.getElementById("col1");
var colBtn2 = document.getElementById("col2");
var colBtn3 = document.getElementById("col3");
var colBtn4 = document.getElementById("col4");
//rotation

let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");
let icon3 = document.getElementById("icon3");
let icon4 = document.getElementById("icon4");

colBtn1.addEventListener("click", function () {
  var content1 = this.nextElementSibling;
  var content2 = colBtn2.nextElementSibling;
  var content3 = colBtn3.nextElementSibling;
  var content4 = colBtn4.nextElementSibling;
  if (content1.style.maxHeight) {
    content1.style.maxHeight = null;
    icon1.classList.remove("rotation");
  } else {
    content1.style.maxHeight = content1.scrollHeight + "px";
    content2.style.maxHeight = null;
    content3.style.maxHeight = null;
    content4.style.maxHeight = null;

    icon1.classList.add("rotation");
    icon2.classList.remove("rotation");
    icon3.classList.remove("rotation");
    icon4.classList.remove("rotation");
  }
});

colBtn2.addEventListener("click", function () {
  var content1 = this.nextElementSibling;
  var content2 = colBtn1.nextElementSibling;
  var content3 = colBtn3.nextElementSibling;
  var content4 = colBtn4.nextElementSibling;
  if (content1.style.maxHeight) {
    content1.style.maxHeight = null;
    icon2.classList.remove("rotation");
  } else {
    content1.style.maxHeight = content1.scrollHeight + "px";
    content2.style.maxHeight = null;
    content3.style.maxHeight = null;
    content4.style.maxHeight = null;

    icon1.classList.remove("rotation");
    icon2.classList.add("rotation");
    icon3.classList.remove("rotation");
    icon4.classList.remove("rotation");
  }
});

colBtn3.addEventListener("click", function () {
  var content1 = this.nextElementSibling;
  var content2 = colBtn2.nextElementSibling;
  var content3 = colBtn1.nextElementSibling;
  var content4 = colBtn4.nextElementSibling;
  if (content1.style.maxHeight) {
    content1.style.maxHeight = null;
    icon3.classList.remove("rotation");
  } else {
    content1.style.maxHeight = content1.scrollHeight + "px";
    content2.style.maxHeight = null;
    content3.style.maxHeight = null;
    content4.style.maxHeight = null;

    icon1.classList.remove("rotation");
    icon2.classList.remove("rotation");
    icon3.classList.add("rotation");
    icon4.classList.remove("rotation");
  }
});

colBtn4.addEventListener("click", function () {
  var content1 = this.nextElementSibling;
  var content2 = colBtn2.nextElementSibling;
  var content3 = colBtn3.nextElementSibling;
  var content4 = colBtn1.nextElementSibling;
  if (content1.style.maxHeight) {
    content1.style.maxHeight = null;
    icon4.classList.remove("rotation");
  } else {
    content1.style.maxHeight = content1.scrollHeight + "px";
    content2.style.maxHeight = null;
    content3.style.maxHeight = null;
    content4.style.maxHeight = null;

    icon1.classList.remove("rotation");
    icon2.classList.remove("rotation");
    icon3.classList.remove("rotation");
    icon4.classList.add("rotation");
  }
});

//snapshot and full screen

let fullScreen = document.getElementById("fullscreen");
let snapShot = document.getElementById("snapshot");

let check = true;
fullScreen.addEventListener("click", () => {
  if (check) {
    document.querySelector("#functions").style.display = "none";
    document.querySelector(".heading").classList.add("hide");

    document.querySelector(".container").style.width = "100%";
    document.getElementById("myCanvasElement").style.height = "100vh";

    renderer.setSize(window.innerWidth, window.innerHeight, false);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    // renderer.setSize(window.innerWidth, window.innerHeight, false);
    // render();
    check = false;
  } else {
    if (controllerValue.controllerVisibility) {
      document.querySelector("#functions").style.display = "block";
    }

    document.querySelector(".heading").classList.remove("hide");

    document.querySelector(".container").style.width = "80%";
    document.getElementById("myCanvasElement").style.height = "70vh";

    const canvas = renderer.domElement;
    // look up the size the canvas is being displayed
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    renderer.setSize(width, height, false);

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    check = true;
  }
});
snapShot.addEventListener("click", () => {
  var canvas = document.getElementById("myCanvasElement");

  var url = canvas.toDataURL();

  var link = document.createElement("a");

  link.setAttribute("href", url);
  link.setAttribute("target", "_blank");
  link.setAttribute("download", "canvas.png");

  link.click();
});
