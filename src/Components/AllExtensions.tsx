import DevLensLogo from "../assets/images/logo-devlens.svg";
import StyleSpyLogo from "../assets/images/logo-style-spy.svg"
import SpeedBoostLogo from "../assets/images/logo-speed-boost.svg"
import JSONwizard from "../assets/images/logo-json-wizard.svg"
import TabMasterLogo from "../assets/images/logo-tab-master-pro.svg"
import ViewLogo from "../assets/images/logo-viewport-buddy.svg"
import MarkupLogo from "../assets/images/logo-markup-notes.svg"
import GridLogo from "../assets/images/logo-grid-guides.svg"
import PletteLogo from "../assets/images/logo-palette-picker.svg"
import ToggleSwitch from "./ToggleSwitch";
import { useState } from "react";

function AllExtensions() {
  const [isSwitchDevLens, setSwitchDevLens] = useState(false);
  const [isSwitchStyleSpy, setSwitchStyleSpy] = useState(false);
  const [isSwitchSpeed, setSwitchSpeed] = useState(false);
  const [isSwitchJSON, setSwitchJSON] = useState(false);
  const [isSwitchTabMaster, setSwitchTabMaster] = useState(false);
  const [isSwitchViewPort, setSwitchViewPort] = useState(false);
  const [isSwitchMarkup, setSwitchMarkup] = useState(false);
  const [isSwitchGrid, setSwitchGrid] = useState(false);
  const [isSwitchPlette, setSwitchPlette] = useState(false);

  return (
    <>
      <section className="container mx-auto my-4">
        <div className="grid grid-cols-1 justify-center gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3">
          <article className="w-[100%] rounded-xl border border-2 border-gray-600 bg-[#1F2535] p-4">
            <header className="justify-left flex items-center">
              <img src={DevLensLogo} alt="DevLens Logo" />

              <div className="m-3">
                <h2 className="text-xl font-bold">DevLens</h2>
                <p>Quicly inspect page layouts and element boundaries.</p>
              </div>
            </header>

            <ToggleSwitch
              onClick={() => setSwitchDevLens(!isSwitchDevLens)}
              isOpen={isSwitchDevLens}
            />
          </article>

          <article className="w-[100%] rounded-xl border border-2 border-gray-600 bg-[#1F2535] p-4">
            <header className="justify-left flex items-center">
              <img src={StyleSpyLogo} alt="DevLens Logo" />

              <div className="m-3">
                <h2 className="text-xl font-bold">StyleSpy</h2>
                <p>Instantly analyze and copy CSS from any webpage element.</p>
              </div>
            </header>

            <ToggleSwitch
              onClick={() => setSwitchStyleSpy(!isSwitchStyleSpy)}
              isOpen={isSwitchStyleSpy}
            />
          </article>

          <article className="w-[100%] rounded-xl border border-2 border-gray-600 bg-[#1F2535] p-4">
            <header className="justify-left flex items-center">
              <img src={SpeedBoostLogo} alt="DevLens Logo" />

              <div className="m-3">
                <h2 className="text-xl font-bold">SpeedBoost</h2>
                <p>Optimizes browser resource usage to accelerate page loading.</p>
              </div>
            </header>

            <ToggleSwitch
              onClick={() => setSwitchSpeed(!isSwitchSpeed)}
              isOpen={isSwitchSpeed}
            />
          </article>

          <article className="w-[100%] rounded-xl border border-2 border-gray-600 bg-[#1F2535] p-4">
            <header className="justify-left flex items-center">
              <img src={JSONwizard} alt="DevLens Logo" />

              <div className="m-3">
                <h2 className="text-xl font-bold">JSONWizard</h2>
                <p>Formats, validates, and prettifies JSON responses in-browser.</p>
              </div>
            </header>

            <ToggleSwitch
              onClick={() => setSwitchJSON(!isSwitchJSON)}
              isOpen={isSwitchJSON}
            />
          </article>

          <article className="w-[100%] rounded-xl border border-2 border-gray-600 bg-[#1F2535] p-4">
            <header className="justify-left flex items-center">
              <img src={TabMasterLogo} alt="DevLens Logo" />

              <div className="m-3">
                <h2 className="text-xl font-bold">TabMaster Pro</h2>
                <p>Organizes browser tabs into groups and sessions.</p>
              </div>
            </header>

            <ToggleSwitch
              onClick={() => setSwitchTabMaster(!isSwitchTabMaster)}
              isOpen={isSwitchTabMaster}
            />
          </article>

          <article className="w-[100%] rounded-xl border border-2 border-gray-600 bg-[#1F2535] p-4">
            <header className="justify-left flex items-center">
              <img src={ViewLogo} alt="DevLens Logo" />

              <div className="m-3">
                <h2 className="text-xl font-bold">ViewportBuddy</h2>
                <p>Simulates various screen resolutions directly within the browser.</p>
              </div>
            </header>

            <ToggleSwitch
              onClick={() => setSwitchViewPort(!isSwitchViewPort)}
              isOpen={isSwitchViewPort}
            />
          </article>

          <article className="w-[100%] rounded-xl border border-2 border-gray-600 bg-[#1F2535] p-4">
            <header className="justify-left flex items-center">
              <img src={MarkupLogo} alt="DevLens Logo" />

              <div className="m-3">
                <h2 className="text-xl font-bold">Markup Notes</h2>
                <p>Enables annotation and notes directly onto webpages for collaborative debugging.</p>
              </div>
            </header>

            <ToggleSwitch
              onClick={() => setSwitchMarkup(!isSwitchMarkup)}
              isOpen={isSwitchMarkup}
            />
          </article>

          <article className="w-[100%] rounded-xl border border-2 border-gray-600 bg-[#1F2535] p-4">
            <header className="justify-left flex items-center">
              <img src={GridLogo} alt="DevLens Logo" />

              <div className="m-3">
                <h2 className="text-xl font-bold">GridGuides</h2>
                <p>Overlay customizable grids and alignment guides on any webpage.</p>
              </div>
            </header>

            <ToggleSwitch
              onClick={() => setSwitchGrid(!isSwitchGrid)}
              isOpen={isSwitchGrid}
            />
          </article>

          <article className="w-[100%] rounded-xl border border-2 border-gray-600 bg-[#1F2535] p-4">
            <header className="justify-left flex items-center">
              <img src={PletteLogo} alt="DevLens Logo" />

              <div className="m-3">
                <h2 className="text-xl font-bold">Palette Picker</h2>
                <p>Instantly extracts color palettes from any webpage.</p>
              </div>
            </header>

            <ToggleSwitch
              onClick={() => setSwitchPlette(!isSwitchPlette)}
              isOpen={isSwitchPlette}
            />
          </article>

          
        </div>
      </section>
    </>
  );
}

export default AllExtensions;
