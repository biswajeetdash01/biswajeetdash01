"use client";

import { useEffect, useMemo, useState } from "react";

const experience = [
  {
    period: "2025 - Present",
    role: "IT Support Engineer - Cloud & Infrastructure",
    company: "INNOVATE IT",
    points: [
      "Administer Microsoft 365, Active Directory, and hybrid infrastructure environments.",
      "Manage identity, security groups, onboarding, offboarding, permissions, and access provisioning.",
      "Troubleshoot Exchange Online, SharePoint, authentication, connectivity, and service incidents.",
      "Resolve TCP/IP, DNS, DHCP, network device, and secure remote-access issues."
    ]
  },
  {
    period: "Jul 2022 - Apr 2024",
    role: "Engineer - Microsoft Cloud Operations",
    company: "HCL Technologies",
    points: [
      "Delivered enterprise L1/L2 support across Microsoft 365 and Exchange Online environments.",
      "Administered user accounts, mailboxes, permissions, and secure access controls.",
      "Managed onboarding, offboarding, password resets, mailbox administration, and user lifecycle requests.",
      "Created troubleshooting documentation to improve operational consistency and support efficiency."
    ]
  },
  {
    period: "Dec 2021 - Jun 2022",
    role: "Application Tester",
    company: "Truelancer",
    points: [
      "Investigated web application and API issues across multiple workflows.",
      "Collaborated with developers to track, troubleshoot, and validate fixes through release.",
      "Supported functional testing, deployment-readiness checks, and application stability."
    ]
  }
];

const stackGroups = [
  {
    title: "Cloud & Identity",
    items: [
      "Microsoft Azure",
      "Azure App Service",
      "Azure SQL Database",
      "Azure Resource Groups",
      "Azure Monitor",
      "Microsoft Entra ID",
      "Microsoft 365",
      "Exchange Online",
      "SharePoint",
      "Intune",
      "Active Directory"
    ]
  },
  {
    title: "DevOps & Monitoring",
    items: [
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "CI/CD",
      "Git/GitHub",
      "Container Registry",
      "kubectl",
      "Platform Logs",
      "System Monitoring"
    ]
  },
  {
    title: "ITSM & Operations",
    items: [
      "ServiceNow",
      "Jira Service Management",
      "Incident Management",
      "SLA Management",
      "Root Cause Troubleshooting",
      "Technical Documentation"
    ]
  }
];

const work = [
  {
    type: "Cloud Operations",
    title: "Microsoft 365 and Exchange incident support",
    body:
      "Resolved mailbox, identity, access, authentication, and platform incidents for enterprise users while maintaining SLA and service-quality expectations."
  },
  {
    type: "Identity & Access",
    title: "User lifecycle administration",
    body:
      "Managed onboarding, offboarding, password resets, security groups, mailbox access, and permissions across Microsoft environments."
  },
  {
    type: "Infrastructure",
    title: "Hybrid network troubleshooting",
    body:
      "Diagnosed TCP/IP, DNS, DHCP, network device, and secure remote-access incidents with clear escalation notes and knowledge-base updates."
  },
  {
    type: "Release Quality",
    title: "Web application and API validation",
    body:
      "Investigated defects, validated fixes, and supported deployment-readiness checks for web application workflows and APIs."
  }
];

const metrics = [
  ["4+", "Years IT experience"],
  ["L1/L2", "Microsoft cloud support"],
  ["SLA", "Incident ownership"],
  ["Azure", "Cloud infrastructure focus"]
];

const assetBase = process.env.NEXT_PUBLIC_BASE_PATH || "";
const resumeHref = `${assetBase}/assets/Jeet.Cloud%20Engineer_Resume.pdf`;

const contactLinks = [
  {
    label: "Email",
    value: "connect.ben.au@gmail.com",
    href: "mailto:connect.ben.au@gmail.com"
  },
  {
    label: "Phone",
    value: "+61 435 667 307",
    href: "tel:+610435667307"
  },
  {
    label: "LinkedIn",
    value: "ben-dash",
    href: "https://www.linkedin.com/in/ben-dash/"
  },
  {
    label: "Resume",
    value: "Download PDF",
    href: resumeHref,
    download: true
  }
];

export default function Home() {
  const [briefType, setBriefType] = useState("Cloud Engineer opportunity");
  const [briefArea, setBriefArea] = useState("Azure and Microsoft cloud operations");
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [timeframe, setTimeframe] = useState("This month");
  const [note, setNote] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.18 }
    );

    document.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const message = useMemo(() => {
    const extra = note.trim();
    const lines = [
      "Hi Ben,",
      "",
      `I'm reaching out about: ${briefType}.`,
      `The main area is: ${briefArea}.`,
      `Timing: ${timeframe}.`
    ];

    if (organisation.trim()) {
      lines.push(`Organisation: ${organisation.trim()}.`);
    }

    if (extra) {
      lines.push(`Context: ${extra}.`);
    }

    lines.push("", "Could we arrange a time to talk?", "", "Thanks,");

    if (senderName.trim()) {
      lines.push(senderName.trim());
    }

    if (senderEmail.trim()) {
      lines.push(senderEmail.trim());
    }

    return lines.join("\n");
  }, [briefArea, briefType, note, organisation, senderEmail, senderName, timeframe]);

  const openEmail = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry: ${briefType}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:connect.ben.au@gmail.com?subject=${subject}&body=${body}`;
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top">BEN.DASH</a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#stack">Stack</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">Cloud Engineer - Sydney & Melbourne, Australia</p>
            <h1>I keep cloud and hybrid environments reliable, secure, and easy to operate.</h1>
            <p className="lead">
              Cloud Engineer with 4+ years of progressive IT experience across Microsoft Azure,
              Microsoft 365, identity and access, infrastructure operations, virtualisation, and
              application troubleshooting.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">See cloud work</a>
              <a className="button" href="#contact">Get in touch</a>
              <a className="button ghost" href={resumeHref} download>
                Download resume
              </a>
            </div>
            <div className="hero-badges" aria-label="Primary capabilities">
              <span>Azure operations</span>
              <span>Microsoft 365</span>
              <span>Identity support</span>
              <span>Hybrid infrastructure</span>
            </div>
          </div>

          <div className="ops-orbit" aria-label="Animated cloud operations dashboard" data-reveal>
            <div className="pulse-ring" />
            <div className="cloud-core">
              <span>Azure</span>
              <strong>Healthy</strong>
            </div>
            <div className="signal signal-one">Identity</div>
            <div className="signal signal-two">M365</div>
            <div className="signal signal-three">SLA</div>
            <div className="terminal-panel">
              <div className="terminal-top">
                <span />
                <span />
                <span />
              </div>
              <pre><code>{`az monitor alert list --status active
+ identity.access: healthy
+ exchange.online: incidents resolved
+ hybrid.network: documented
+ service.sla: maintained`}</code></pre>
            </div>
          </div>
        </section>

        <section className="metrics" aria-label="Career highlights" data-reveal>
          {metrics.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        <section id="about" className="section split" data-reveal>
          <div>
            <p className="section-kicker">About</p>
            <h2>Cloud support with an operator&apos;s eye for detail.</h2>
          </div>
          <div className="section-body">
            <p>
              I work across Microsoft cloud platforms, enterprise technical support, identity and
              access management, network services, and day-to-day infrastructure operations. My focus
              is keeping services available while making the troubleshooting path clearer for the next
              person.
            </p>
            <p>
              Recent work spans Azure App Service, Microsoft 365, Exchange Online, SharePoint,
              Microsoft Entra ID, Active Directory, ServiceNow, Docker, Kubernetes, GitHub Actions,
              monitoring, access controls, and technical documentation.
            </p>
            <dl className="fact-grid">
              <div><dt>Based in</dt><dd>Sydney / Melbourne, Australia</dd></div>
              <div><dt>Focus</dt><dd>Azure, Microsoft 365, hybrid infrastructure</dd></div>
              <div><dt>Education</dt><dd>Master of Information Technology, Deakin University</dd></div>
              <div><dt>Strength</dt><dd>Incident resolution, access control, documentation</dd></div>
            </dl>
          </div>
        </section>

        <section id="experience" className="section" data-reveal>
          <p className="section-kicker">Experience</p>
          <h2>Three roles, one operating rhythm.</h2>
          <p className="section-intro">
            Cloud operations, enterprise support, application testing, and access-sensitive customer
            environments.
          </p>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.role}>
                <time>{item.period}</time>
                <div>
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <ul>
                    {item.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="stack" className="section split" data-reveal>
          <div>
            <p className="section-kicker">Stack</p>
            <h2>What I build and support with.</h2>
          </div>
          <div className="stack-groups">
            {stackGroups.map((group) => (
              <article key={group.title}>
                <h3>{group.title}</h3>
                <div className="chips">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="section" data-reveal>
          <p className="section-kicker">Selected Work</p>
          <h2>Operational work that keeps services moving.</h2>
          <div className="work-grid">
            {work.map((item) => (
              <article className="work-card" key={item.title}>
                <span>{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section education" data-reveal>
          <div>
            <p className="section-kicker">Education</p>
            <h2>Currently studying, already supporting production systems.</h2>
          </div>
          <div className="education-list">
            <article>
              <time>Jul 2024 - Jul 2026</time>
              <h3>Master of Information Technology</h3>
              <p>Deakin University - Melbourne, VIC</p>
            </article>
            <article>
              <time>2018 - 2022</time>
              <h3>Bachelor of Technology - Information Technology</h3>
              <p>References available upon request</p>
            </article>
          </div>
        </section>

        <section id="contact" className="section contact" data-reveal>
          <div>
            <p className="section-kicker">Contact</p>
            <h2>Let&apos;s talk cloud support, Azure operations, or hybrid infrastructure.</h2>
            <p className="section-intro">
              Pick a brief below and open a prepared email, or connect directly through LinkedIn.
              Nothing sends until you review it.
            </p>
          </div>

          <div className="contact-layout">
            <form className="brief" onSubmit={openEmail}>
              <div className="form-header">
                <span>Quick enquiry</span>
                <strong>Build a clear message in seconds</strong>
              </div>
              <div className="field-row">
                <label>
                  Your name
                  <input
                    value={senderName}
                    onChange={(event) => setSenderName(event.target.value)}
                    placeholder="Your name"
                  />
                </label>
                <label>
                  Your email
                  <input
                    type="email"
                    value={senderEmail}
                    onChange={(event) => setSenderEmail(event.target.value)}
                    placeholder="name@example.com"
                  />
                </label>
              </div>
              <label>
                Company or team
                <input
                  value={organisation}
                  onChange={(event) => setOrganisation(event.target.value)}
                  placeholder="Organisation name"
                />
              </label>
              <div className="field-row">
                <label>
                  What are you looking for?
                  <select value={briefType} onChange={(event) => setBriefType(event.target.value)}>
                    <option>Cloud Engineer opportunity</option>
                    <option>Microsoft 365 support</option>
                    <option>Azure infrastructure support</option>
                    <option>Application testing support</option>
                  </select>
                </label>
                <label>
                  Timeframe
                  <select value={timeframe} onChange={(event) => setTimeframe(event.target.value)}>
                    <option>This month</option>
                    <option>Next 2 weeks</option>
                    <option>Flexible timing</option>
                    <option>Immediate requirement</option>
                  </select>
                </label>
              </div>
              <label>
                Which area?
                <select value={briefArea} onChange={(event) => setBriefArea(event.target.value)}>
                  <option>Azure and Microsoft cloud operations</option>
                  <option>Identity and access management</option>
                  <option>Incident and SLA management</option>
                  <option>Hybrid infrastructure troubleshooting</option>
                </select>
              </label>
              <label>
                Project or role context
                <textarea
                  value={note}
                  onChange={(event) => setNote(event.target.value)}
                  rows="5"
                  placeholder="Share the role, environment, users affected, or anything Ben should know before replying"
                />
              </label>
              <button className="button primary" type="submit">
                {copied ? "Email opened" : "Open email"}
              </button>
              <div className="preview-card">
                <span>Preview</span>
                <p className="preview">{copied ? "Your email app should now have the prepared note." : message}</p>
              </div>
            </form>

            <address className="contact-list">
              <div className="contact-card intro-card">
                <span>Available for</span>
                <strong>Cloud support, Azure operations, and junior-to-mid cloud engineering roles.</strong>
                <p>Sydney / Melbourne, Australia</p>
              </div>
              {contactLinks.map((link) => (
                <a
                  className="contact-card"
                  href={link.href}
                  key={link.label}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  download={link.download}
                >
                  <span>{link.label}</span>
                  <strong>{link.value}</strong>
                </a>
              ))}
            </address>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>(c) Ben Dash - Cloud Engineer</span>
        <a href="#top">Back to top</a>
      </footer>
    </>
  );
}
