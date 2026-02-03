export default function Home() {
  return (
    <div className="page">
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
              <span className="pill">AI Agents</span>
              <h1>Automate your workflow</h1>
              <p>Automate workflows with intelligent task ownership.</p>
              <ul>
                <li>✔ Custom triggers</li>
                <li>✔ Defined behaviors</li>
                <li>✔ Workflow integration</li>
              </ul>
              <div className="hero-cta">
                <a className="btn btn-primary" href="#start">
                  Get started for free
                </a>
                <a className="btn btn-secondary" href="#setup">
                  Read setup docs
                </a>
              </div>
            </div>
            <div className="hero-visual fade-up delay-2">
              <div className="hero-card floating">
                <h3>Agent-driven task automation</h3>
                <p>Configure exactly how and when your agents work.</p>
                <div className="stat-grid">
                  <div className="stat">Custom triggers</div>
                  <div className="stat">Defined behaviors</div>
                  <div className="stat">Workflow integration</div>
                  <div className="stat">No-code setup</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="automation">
          <div className="container">
            <h2>Agent-driven task automation</h2>
            <p>
              <strong>Configure exactly how and when your agents work.</strong>
            </p>
            <div className="grid-3">
              <div className="card fade-up delay-1">
                <h3>Custom triggers</h3>
                <p>
                  Set agents to activate based on task assignments, comments, or
                  workflow events.
                </p>
              </div>
              <div className="card fade-up delay-2">
                <h3>Defined behaviors</h3>
                <p>
                  Configure what the agent does and where it sends data, no
                  coding required.
                </p>
              </div>
              <div className="card fade-up delay-3">
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
          <div className="container">
            <h2>Flexible use cases</h2>
            <div className="grid-2">
              <div className="card fade-up">
                <h3>Design assistant</h3>
                <p>
                  Automate creative production with design-focused agent
                  workflows.
                </p>
              </div>
              <div className="card fade-up delay-1">
                <h3>Dev support agent</h3>
                <p>
                  Generate or review code based on context from assigned tasks.
                </p>
              </div>
              <div className="card fade-up delay-2">
                <h3>Marketing agent</h3>
                <p>
                  Have agents draft and post marketing material across all of
                  your channels.
                </p>
              </div>
              <div className="card fade-up delay-3">
                <h3>Sales research agent</h3>
                <p>
                  Surface qualified leads, analyze buyer intent, and enrich CRM
                  records with contextual insights.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="manager">
          <div className="container">
            <h2>Built-in Project Manager</h2>
            <div className="grid-2">
              <div className="card fade-up">
                <h3>Dart AI</h3>
                <p>
                  Dart AI is our built-in project management agent that comes
                  with every workspace. It supports tasks from creation and
                  progress tracking to managing deadlines and team
                  communication.
                </p>
              </div>
              <div className="card fade-up delay-1">
                <h3>Always On</h3>
                <p>No setup required. Dart AI works out of the box to keep your projects moving.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="customizable">
          <div className="container">
            <h2>Fully Customizable</h2>
            <div className="grid-2">
              <div className="card fade-up">
                <h3>Default agents</h3>
                <p>Dart supports integrating with any 3rd party agent.</p>
                <ul className="inline-list">
                  <li>Cursor (Coding)</li>
                  <li>Magic Patterns (Design)</li>
                  <li>Predis (Marketing)</li>
                  <li>Clay (Sales research)</li>
                </ul>
              </div>
              <div className="card fade-up delay-1">
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
          <div className="container">
            <h2>Easy setup and management</h2>
            <div className="grid-2">
              <div className="card fade-up">
                <h3>Quick configuration</h3>
                <p>Set up agents from the settings menu in just a few steps.</p>
              </div>
              <div className="card fade-up delay-1">
                <h3>No-code options</h3>
                <p>Use templates or visual tools to build agents without writing code.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="testimonials">
          <div className="container">
            <h2>Scalable by design</h2>
            <p><strong>Loved by teams</strong></p>
            <div className="grid-2">
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
              <div className="hero-cta">
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
