// @ts-ignore
import clipboardScript from "./scripts/clipboard.inline"
import clipboardStyle from "./styles/clipboard.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Body: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return (
    <div id="quartz-body" className="theme-dark">
      <div className="published-container print has-navigation has-graph has-outline">
        <div className="site-body">
          {/* Left Column */}
          <div className="site-body-left-column">
            <div className="site-body-left-column-inner">
              <a className="site-body-left-column-site-logo" aria-label="Site logo">
                <img aria-hidden="true" src="/logo.png" />
              </a>
              <a className="site-body-left-column-site-name">Caixa Preta</a>
              
              {/* Theme Toggle */}
              <div className="site-body-left-column-site-theme-toggle is-dark">
                <span className="option mod-dark">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-icon lucide-moon">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </svg>
                </span>
                <div className="checkbox-container is-enabled"></div>
                <span className="option mod-light">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-icon lucide-sun">
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path>
                  </svg>
                </span>
              </div>

              {/* Search */}
              <div className="search-view-outer">
                <div className="search-view-container">
                  <span className="published-search-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-icon lucide-search">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </svg>
                  </span>
                  <input className="search-bar" type="text" placeholder="Search page or heading..." />
                </div>
              </div>

              {/* Navigation */}
              <div className="nav-view-outer">
                <div className="nav-view"></div>
              </div>
            </div>
          </div>

          {/* Center Column */}
          <div className="site-body-center-column">
            <div className="render-container">
              <div className="render-container-inner">
                <div className="publish-renderer">
                  <div className="markdown-preview-view markdown-rendered">
                    <div className="markdown-preview-sizer markdown-preview-section">
                      {children}
                    </div>
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
                <div className="graph-view-container">
                  <div className="graph-view"></div>
                </div>
              </div>
              {/* Outline */}
              <div className="outline-view-outer">
                <div className="outline-view"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Não vamos usar clipboard por enquanto
// Body.afterDOMLoaded = clipboardScript
// Body.css = clipboardStyle

export default (() => Body) satisfies QuartzComponentConstructor
