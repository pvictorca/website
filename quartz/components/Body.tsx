// @ts-ignore
// Body.tsx
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { GlobalSearch } from "./Search"
import { Explorer } from "./Explorer" 
import { Darkmode } from "./Darkmode"
import { Graph } from "./Graph"
import "./styles/publish.scss"

const Body: QuartzComponent = ({ children, cfg }: QuartzComponentProps) => {
  return (
    <div id="quartz-body" className="theme-dark">
      <div className="published-container print has-navigation has-graph has-outline">
        <div className="site-body">
          {/* Left Column */}
          <div className="site-body-left-column">
            <div className="site-body-left-column-inner">
              {/* Logo & Site Title */}
              <a className="site-body-left-column-site-logo" aria-label="Logo">
                <img src="/logo.png" alt="Site Logo" />
              </a>
              <a className="site-body-left-column-site-name">
                {cfg?.website?.title ?? "Caixa Preta"}
              </a>

              {/* Search Component */}
              <div className="search-view-outer">
                <GlobalSearch />
              </div>

              {/* Theme Toggle */}
              <Darkmode displayClass="site-body-left-column-site-theme-toggle" />

              {/* Navigation/Explorer */}
              <div className="nav-view-outer">
                <div className="nav-view">
                  <Explorer />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="site-body-center-column">
            <div className="site-header">
              <div className="clickable-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </div>
              <div className="site-header-text">{cfg?.website?.title ?? "Caixa Preta"}</div>
            </div>
            
            <div className="render-container">
              <div className="render-container-inner">
                <div className="publish-renderer">
                  <div className="markdown-preview-view markdown-rendered">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="site-body-right-column">
            <div className="site-body-right-column-inner">
              {/* Graph View */}
              <div className="graph-view-outer">
                <div className="list-item published-section-header">
                  <span className="published-section-header-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="2" y1="12" x2="22" y2="12"/>
                    </svg>
                  </span>
                  <span>Interactive graph</span>
                </div>
                <div className="graph-view-container">
                  <Graph />
                </div>
              </div>

              {/* Outline View */}
              <div className="outline-view-outer">
                <div className="list-item published-section-header">
                  <span className="published-section-header-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="21" y1="10" x2="3" y2="10"/>
                      <line x1="21" y1="6" x2="3" y2="6"/>
                      <line x1="21" y1="14" x2="3" y2="14"/>
                      <line x1="21" y1="18" x2="3" y2="18"/>
                    </svg>
                  </span>
                  <span>On this page</span>
                </div>
                <div className="outline-view">
                  {/* Outline content will be added */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default (() => Body) satisfies QuartzComponentConstructor
