import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import "./styles/custom.scss"

const Body: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return (
    <div id="quartz-body">
      <div className="custom-layout">
        {/* Left Sidebar */}
        <aside className="custom-sidebar-left">
          <div className="custom-sidebar-left-inner">
            <div className="custom-site-title">Seu Site</div>
            <nav className="custom-nav">
              {/* Navigation virá aqui depois */}
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
            {/* Graph/Outline virão aqui depois */}
          </div>
        </aside>
      </div>
    </div>
  )
}

export default (() => Body) satisfies QuartzComponentConstructor