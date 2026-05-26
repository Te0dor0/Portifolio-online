import { createFileRoute } from "@tanstack/react-router";
import diegoPhoto from "@/assets/diego.jpg";
import {
  Mail, Phone, MapPin, Github, Download, ArrowUpRight,
  Server, Network, Shield, Code2, Database, Cloud, Wrench, GraduationCap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Diego Teodoro — Suporte TI & Infraestrutura" },
      {
        name: "description",
        content:
          "Portfólio de Diego Teodoro: Suporte TI N1/N2, redes, infraestrutura, Python e automação.",
      },
      { property: "og:title", content: "Diego Teodoro — Portfólio TI" },
      { property: "og:description", content: "Suporte TI N1/N2, Infraestrutura, Redes e Automação com Python." },
    ],
  }),
});

const skills = [
  { icon: Wrench, title: "Suporte & Helpdesk", items: ["Suporte N1/N2", "GLPI", "Diagnóstico HW/SW", "SLA"] },
  { icon: Network, title: "Redes & Infraestrutura", items: ["TCP/IP", "DNS · DHCP · VPN", "Switches / Roteadores", "Cabeamento estruturado"] },
  { icon: Server, title: "Sistemas & Cloud", items: ["Windows Server", "Microsoft 365", "Google Workspace", "ERP corporativo"] },
  { icon: Shield, title: "Segurança", items: ["Antivírus / Endpoints", "MFA / 2FA", "LGPD", "Gestão de acessos"] },
  { icon: Code2, title: "Dados & Automação", items: ["Python (POO)", "SQL · MySQL · PostgreSQL", "Power BI", "N8N · Postman"] },
  { icon: Cloud, title: "Virtualização", items: ["VMware", "Hyper-V", "Migração para nuvem", "Backup & Monitoramento"] },
];

const projects = [
  {
    name: "Pipeline de Dados",
    tag: "ETL · Produção",
    description:
      "Pipeline ETL automatizado de nível de produção para processar grandes volumes de dados de vendas e clientes, com orquestração via Airflow.",
    tech: ["Python", "Airflow", "SQL", "Pandas"],
    link: "https://github.com/Te0dor0/PIPELINE-DE-DADOS",
  },
  {
    name: "Projeto Glicemia",
    tag: "Healthtech",
    description:
      "Sistema completo de monitoramento de saúde com foco em controle glicêmico. Autenticação JWT, dashboards interativos com alertas visuais e sistema de recompensas.",
    tech: ["JavaScript", "JWT", "CSS"],
    link: "https://github.com/Te0dor0/projeto-glicemia",
  },
  {
    name: "StockFlow",
    tag: "Gestão & UX",
    description:
      "Aplicação voltada para gestão e produtividade com interface focada em UX e arquitetura modular separando responsabilidades de front-end.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/Te0dor0/stockflow",
  },
];

const achievements = [
  {
    title: "Infraestrutura de Rede — Prédio Comercial",
    period: "Ago/2024 – Set/2024",
    detail:
      "Planejei e implementei rede completa com 50+ pontos de cabeamento estruturado, switches, roteadores e Wi-Fi em 4 andares — redução de 30% no downtime.",
  },
  {
    title: "Portabilidade de Linhas Telefônicas Corporativas",
    period: "Jan/2025 – Mar/2025",
    detail:
      "Plano de portabilidade de todas as linhas telefônicas da empresa — economia de mais de 50% nos custos mensais de telefonia.",
  },
];

const certifications = [
  { name: "Linguagem de Programação Python — Trilha de Conhecimento", org: "Fundação Bradesco", date: "Abr/2026" },
  { name: "Jornada Python", org: "Hashtag Treinamentos", date: "Jan/2026" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
        <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-display font-semibold text-lg tracking-tight">
            diego<span className="text-primary">.</span>teodoro
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#sobre" className="hover:text-foreground transition">Sobre</a>
            <a href="#skills" className="hover:text-foreground transition">Stack</a>
            <a href="#experiencia" className="hover:text-foreground transition">Experiência</a>
            <a href="#projetos" className="hover:text-foreground transition">Projetos</a>
            <a href="#contato" className="hover:text-foreground transition">Contato</a>
          </div>
          <a
            href="./curriculo-diego-teodoro.pdf"
            download
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            <Download className="h-4 w-4" /> CV
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-glow)" }}
        />
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-32 md:pb-32 grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-mono text-muted-foreground mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Disponível para novas oportunidades
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
              Diego <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-hero)" }}>Teodoro</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-xl leading-snug">
              Suporte TI <span className="text-foreground">N1/N2</span>, Infraestrutura, Redes e Automação com <span className="text-foreground">Python</span>.
            </p>
            <p className="mt-4 text-base text-muted-foreground max-w-xl">
              Cursando Ciência da Computação · Atuação em ambientes corporativos no RJ e SP, garantindo estabilidade e disponibilidade dos sistemas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
                style={{ boxShadow: "var(--shadow-glow)" }}
              >
                Ver projetos <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium hover:bg-secondary transition"
              >
                Entrar em contato
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground font-mono">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Rio de Janeiro, BR</span>
              <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> (21) 96663-9171</span>
            </div>
          </div>
          <div className="relative justify-self-center">
            <div className="absolute -inset-4 rounded-full blur-2xl opacity-40" style={{ background: "var(--gradient-hero)" }} />
            <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-2 border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <img src={diegoPhoto} alt="Diego Teodoro" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 grid md:grid-cols-3 gap-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">// 01 · sobre</p>
            <h2 className="text-3xl md:text-4xl font-semibold">Perfil profissional</h2>
          </div>
          <div className="md:col-span-2 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              Profissional de TI com experiência em <span className="text-foreground">suporte técnico N1/N2</span>, administração de redes, infraestrutura e segurança da informação. Atuei na gestão de múltiplos ambientes corporativos no RJ e SP, garantindo disponibilidade e estabilidade dos sistemas.
            </p>
            <p>
              Cursando <span className="text-foreground">Bacharelado em Ciência da Computação (UNINTER)</span> e com certificações em Python, combino sólida base técnica com visão analítica para automação e melhoria de processos.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mb-12">
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">// 02 · stack</p>
            <h2 className="text-3xl md:text-4xl font-semibold">Habilidades técnicas</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map(({ icon: Icon, title, items }) => (
              <div
                key={title}
                className="group rounded-lg border border-border bg-card p-6 hover:border-primary/50 transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-md grid place-items-center bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold">{title}</h3>
                </div>
                <ul className="space-y-1.5 text-sm text-muted-foreground font-mono">
                  {items.map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section id="experiencia" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mb-12">
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">// 03 · experiência</p>
            <h2 className="text-3xl md:text-4xl font-semibold">Trajetória profissional</h2>
          </div>

          <div className="rounded-lg border border-border bg-card p-8 mb-10" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl font-semibold">Estagiário de TI</h3>
                <p className="text-muted-foreground">All Facilities · Rio de Janeiro & São Paulo</p>
              </div>
              <span className="font-mono text-sm text-primary">2024 — 2025</span>
            </div>
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-muted-foreground">
              {[
                "Suporte técnico N1/N2 via GLPI com SLA consistente.",
                "Diagnóstico e resolução de falhas em hardware e periféricos.",
                "Administração de servidores, switches, roteadores e APs.",
                "Gestão de backups periódicos e inventário de ativos.",
                "Antivírus, MFA/2FA e conformidade com LGPD.",
                "Administração de M365, Google Workspace e ERP.",
                "Documentação técnica e relatórios de desempenho.",
                "Projetos de migração para nuvem e upgrades de infra.",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="text-primary mt-2 h-1 w-1 rounded-full bg-primary flex-none" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <h3 className="text-lg font-semibold mb-4 text-muted-foreground">Conquistas em destaque</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((a) => (
              <div key={a.title} className="rounded-lg border border-border bg-card p-6 hover:border-accent/50 transition">
                <p className="font-mono text-xs text-accent mb-2">{a.period}</p>
                <h4 className="font-semibold mb-2">{a.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mb-12">
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">// 04 · projetos</p>
            <h2 className="text-3xl md:text-4xl font-semibold">Projetos em destaque</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {projects.map((p) => (
              <article
                key={p.name}
                className="group relative flex flex-col rounded-lg border border-border bg-card p-6 hover:border-primary/60 transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="h-10 w-10 rounded-md grid place-items-center bg-secondary text-primary">
                    <Database className="h-5 w-5" />
                  </div>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noreferrer" aria-label={`Abrir ${p.name}`} className="text-muted-foreground hover:text-primary transition">
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                </div>
                <p className="font-mono text-xs text-accent mb-1">{p.tag}</p>
                <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="font-mono text-[11px] px-2 py-0.5 rounded border border-border bg-background text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FORMAÇÃO & CERTIFICAÇÕES */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">// 05 · formação</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Acadêmico</h2>
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap className="h-5 w-5 text-primary" />
                <span className="font-mono text-xs text-accent">2024 — 2027 · 5º período</span>
              </div>
              <h3 className="font-semibold">Bacharelado em Ciência da Computação</h3>
              <p className="text-sm text-muted-foreground mt-1">UNINTER — Centro Universitário Internacional</p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                Estruturas de dados, algoritmos, redes, sistemas operacionais, banco de dados e desenvolvimento de software.
              </p>
            </div>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">// 06 · certificações</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Certificações</h2>
            <div className="space-y-3">
              {certifications.map((c) => (
                <div key={c.name} className="rounded-lg border border-border bg-card p-5 flex items-start gap-4">
                  <div className="h-9 w-9 rounded-md grid place-items-center bg-secondary text-primary flex-none">
                    <Code2 className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm leading-snug">{c.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1 font-mono">{c.org} · {c.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-50" style={{ background: "var(--gradient-glow)" }} />
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">// 07 · contato</p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Vamos <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-hero)" }}>conversar</span>?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Aberto a oportunidades em Suporte TI, Infraestrutura e Automação.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:diegoteodorotech@gmail.com"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              <Mail className="h-4 w-4" /> diegoteodorotech@gmail.com
            </a>
            <a
              href="tel:+5521966639171"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium hover:bg-secondary transition"
            >
              <Phone className="h-4 w-4" /> (21) 96663-9171
            </a>
            <a
              href="https://github.com/Te0dor0"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium hover:bg-secondary transition"
            >
              <Github className="h-4 w-4" /> github.com/Te0dor0
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground font-mono">
          <span>© 2026 Diego Teodoro</span>
          <span>Construído com TanStack Start · Tailwind</span>
        </div>
      </footer>
    </div>
  );
}
