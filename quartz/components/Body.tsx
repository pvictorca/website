// Body.tsx
import clipboardScript from "./scripts/clipboard.inline"
import clipboardStyle from "./styles/clipboard.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Body: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return (
    <div id="quartz-body">
      <div className="custom-layout">
        {/* Left Sidebar */}
        <aside className="custom-sidebar-left">
          <div className="custom-sidebar-left-inner">
            <div className="custom-site-title">Seu Site</div>
            <nav className="custom-nav">
              {/* Navigation virá aqui */}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="custom-main">
          <div className="custom-content">
            {children}
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="custom-sidebar-right">
          <div className="custom-sidebar-right-inner">
            {/* Graph/Outline virão aqui */}
          </div>
        </aside>
      </div>
    </div>
  )
}

Body.afterDOMLoaded = clipboardScript
Body.css = clipboardStyle

export default (() => Body) satisfies QuartzComponentConstructor