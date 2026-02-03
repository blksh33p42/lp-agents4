const logoUrls = [
  "https://cdn.prod.website-files.com/66a69462ca0cad470171dfa7/67a12e61eec9fd821df0b1d0_logo-card-9.svg",
  "https://cdn.prod.website-files.com/66a69462ca0cad470171dfa7/67a12e61bd6c74d4b9dc0c82_logo-card-5.svg",
  "https://cdn.prod.website-files.com/66a69462ca0cad470171dfa7/67a12e6142f7f8acec15f332_logo-card-4.svg",
  "https://cdn.prod.website-files.com/66a69462ca0cad470171dfa7/67a12e6133a4a2dd1f0c85b0_logo-card-3.svg",
];

export default function Home() {
  return (
    <div className="page">
      <div className="announcement">AI Agents for modern teams</div>
      <main>
        <div className="container">
          <nav className="nav">
            <div className="logo">
              <div className="logo-mark">D</div>
              <span>Dart AI</span>
            </div>
            <div className="nav-actions">
              <a className="btn btn-secondary" href="#setup">
                Read setup docs
              </a>
              <a className="btn btn-primary" href="#start">
                Get started for free
              </a>
            </div>
          </nav>
        </div>

        <section className="hero">
          <div className="container hero-grid">
            <div className="fade-up">
              <span className="hero-badge">AI Agents</span>
              <h1>Automate your workflow</h1>
              <p>Automate workflows with intelligent task ownership.</p>
              <ul>
                <li>✔ Custom triggers</li>
                <li>✔ Defined behaviors</li>
                <li>✔ Workflow integration</li>
              </ul>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#start">
                  Get started for free
                </a>
                <a className="btn btn-secondary" href="#setup">
                  Read setup docs
                </a>
              </div>
              <div className="hero-note">No credit card required</div>
            </div>
            <div className="hero-media fade-up delay-2">
              <img
                className="glow"
                src="https://cdn.prod.website-files.com/66a69462ca0cad470171dfa7/67a12e25dad45a7a42f530bb_purple-gradient.svg"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/66a69462ca0cad470171dfa7/67a12dd46c5214ca68dcb570_description.png"
                alt="Dart AI preview"
              />
            </div>
          </div>
        </section>

        <section className="trusted">
          <div className="container">
            <h4>Trusted by forward-thinking teams</h4>
            <div className="logo-strip">
              {logoUrls.map((logo) => (
                <img key={logo} src={logo} alt="Company logo" />
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="automation">
          <div className="container">
            <span className="tag">Agent-driven task automation</span>
            <h2>Agent-driven task automation</h2>
            <p>
              <strong>Configure exactly how and when your agents work.</strong>
            </p>
            <div className="section-grid">
              <div className="section-card fade-up">
                <h3>Custom triggers</h3>
                <p>
                  Set agents to activate based on task assignments, comments, or
                  workflow events.
                </p>
              </div>
              <div className="section-card fade-up delay-1">
                <h3>Defined behaviors</h3>
                <p>
                  Configure what the agent does and where it sends data, no
                  coding required.
                </p>
              </div>
              <div className="section-card fade-up delay-2">
                <h3>Workflow integration</h3>
                <p>
                  Connect agents directly to tools like n8n or webhooks for full
                  process automation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="use-cases">
          <div className="container section-split">
            <div className="media-card fade-up">
              <img
                src="https://cdn.prod.website-files.com/66a69462ca0cad470171dfa7/67a12e25f911e0fd3a37c542_old-way.svg"
                alt="Workflow automation"
              />
            </div>
            <div className="fade-up delay-1">
              <span className="tag">Flexible use cases</span>
              <h2>Flexible use cases</h2>
              <div className="section-grid" style={{ gridTemplateColumns: "1fr" }}>
                <div className="section-card">
                  <h3>Design assistant</h3>
                  <p>
                    Automate creative production with design-focused agent
                    workflows.
                  </p>
                </div>
                <div className="section-card">
                  <h3>Dev support agent</h3>
                  <p>
                    Generate or review code based on context from assigned tasks.
                  </p>
                </div>
                <div className="section-card">
                  <h3>Marketing agent</h3>
                  <p>
                    Have agents draft and post marketing material across all of
                    your channels.
                  </p>
                </div>
                <div className="section-card">
                  <h3>Sales research agent</h3>
                  <p>
                    Surface qualified leads, analyze buyer intent, and enrich CRM
                    records with contextual insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="manager">
          <div className="container section-split">
            <div className="fade-up">
              <span className="tag">Built-in Project Manager</span>
              <h2>Built-in Project Manager</h2>
              <div className="section-card" style={{ marginBottom: "16px" }}>
                <h3>Dart AI</h3>
                <p>
                  Dart AI is our built-in project management agent that comes
                  with every workspace. It supports tasks from creation and
                  progress tracking to managing deadlines and team
                  communication.
                </p>
              </div>
              <div className="section-card">
                <h3>Always On</h3>
                <p>
                  No setup required. Dart AI works out of the box to keep your
                  projects moving.
                </p>
              </div>
            </div>
            <div className="media-card fade-up delay-1">
              <img
                src="https://cdn.prod.website-files.com/66a69462ca0cad470171dfa7/67a12e2550fc60de21506469_vision-card.webp"
                alt="Dart AI workspace"
              />
            </div>
          </div>
        </section>

        <section className="section" id="customizable">
          <div className="container">
            <span className="tag">Fully Customizable</span>
            <h2>Fully Customizable</h2>
            <div className="section-split">
              <div className="section-card fade-up">
                <h3>Default agents</h3>
                <p>Dart supports integrating with any 3rd party agent.</p>
                <ul className="inline-list">
                  <li>Cursor (Coding)</li>
                  <li>Magic Patterns (Design)</li>
                  <li>Predis (Marketing)</li>
                  <li>Clay (Sales research)</li>
                </ul>
              </div>
              <div className="section-card fade-up delay-1">
                <h3>Setup Checklist</h3>
                <ol className="steps">
                  <li>Go to Settings &gt; Agents</li>
                  <li>Click 'Add Agent'</li>
                </ol>
                <p>
                  <em>Note: You can also set up a custom AI agent.</em>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="setup">
          <div className="container section-split">
            <div className="media-card fade-up">
              <img
                src="https://cdn.prod.website-files.com/66a69462ca0cad470171dfa7/67a12e2565ee9231dd2ae7a2_feature-4.webp"
                alt="Setup preview"
              />
            </div>
            <div className="fade-up delay-1">
              <span className="tag">Easy setup and management</span>
              <h2>Easy setup and management</h2>
              <div className="section-card" style={{ marginBottom: "16px" }}>
                <h3>Quick configuration</h3>
                <p>Set up agents from the settings menu in just a few steps.</p>
              </div>
              <div className="section-card">
                <h3>No-code options</h3>
                <p>
                  Use templates or visual tools to build agents without writing
                  code.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="testimonials">
          <div className="container">
            <span className="tag">Scalable by design</span>
            <h2>Scalable by design</h2>
            <p>
              <strong>Loved by teams</strong>
            </p>
            <div className="section-split">
              <div className="testimonial fade-up">
                <p>
                  &quot;I've been using Dart for months now, and it is my #1 tool
                  for managing my projects! Plus, the user experience is crisp
                  and it's a pleasure to make, track, and then close out tasks.&quot;
                </p>
                <span>— <strong>John Morgan</strong>, Head of Engineering</span>
              </div>
              <div className="testimonial fade-up delay-1">
                <p>
                  &quot;I really enjoy using the app - it has replaced my other
                  kanban apps because of the AI features. Auto fill properties
                  and generate subtasks are a massive boon.&quot;
                </p>
                <span>— <strong>Sijia Qiu</strong>, Analytics Consultant</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container">
            <h2>Frequently Asked Questions</h2>
            <div className="faq">
              <div className="faq-item">What are the default agents?</div>
              <div className="faq-item">What can trigger an agent?</div>
              <div className="faq-item">Is there a built-in agent in Dart?</div>
            </div>
          </div>
        </section>

        <section className="section" id="start">
          <div className="container">
            <div className="cta">
              <h2>Start automating today</h2>
              <p>
                <strong>
                  Take control of your project management today with intelligent
                  automation.
                </strong>
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#start">
                  Get started for free
                </a>
                <a className="btn btn-secondary" href="#setup">
                  Read setup docs
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="container">Dart AI Agents</div>
        </footer>
      </main>
    </div>
  );
}
