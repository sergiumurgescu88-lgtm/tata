import { ServiceDetail, Project } from '../types';

export const servicesData: ServiceDetail[] = [
  {
    id: 'feasibility',
    title: 'Inginerie & Studii de Fezabilitate (Bankability)',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    shortDesc: 'Documentație tehnică pentru Fondul de Modernizare, PNRR și POIM.',
    fullDesc: `
      Elaborăm studii de fezabilitate (SF/DALI) și proiecte tehnice care asigură bancabilitatea investiției. Avem o rată ridicată de succes în programe precum Fondul de Modernizare și PNRR (C1.1, C1.4, I.5).
      
      Experiența noastră variază de la sisteme rooftop pentru IMM-uri (400 kW - 1 MW) până la parcuri utility-scale de 185 MWp. Nu livrăm doar hârtii pentru dosar, ci modele tehnico-economice robuste (LCOE real, CAPEX optimizat) care trec de filtrele de risc ale băncilor.
    `,
    benefits: [
      'Documentație completă pentru finanțare nerambursabilă',
      'Analiză de risc și producție (P90 vs P50)',
      'Asistență tehnică până la stadiul Ready-to-Build'
    ],
    standards: ['SR EN 62446', 'Ghidurile Solicitantului PNRR/FM']
  },
  {
    id: 'due-diligence',
    title: 'Technical Due Diligence (TDD)',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    shortDesc: 'Evaluare independentă pentru M&A și refinanțare (Red Flag / Full Scope).',
    fullDesc: `
      Realizăm audituri tehnice detaliate pentru investitori și bănci (ex: ENGIE, Electrica-SAPE) în vederea achiziției de proiecte. Identificăm riscuri ascunse: degradarea panourilor, probleme structurale, neconformități de montaj sau erori de proiectare.
      
      Rapoartele noastre fundamentează decizia de investiție (Go/No-Go) și permit ajustarea corectă a prețului de tranzacționare.
    `,
    benefits: [
      'Identificarea "Deal Breakers" tehnice',
      'Validarea producției istorice vs. simulate',
      'Plan de CAPEX corectiv fundamentat'
    ],
    standards: ['RICS Valuation', 'Standarde Bancare Internaționale']
  },
  {
    id: 'diagnostics',
    title: 'Diagnostic Avansat (Laborator Mobil)',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    shortDesc: 'Electroluminescență (EL), Termografie IR și teste I-V în teren.',
    fullDesc: `
      Deținem echipamente proprii pentru a vedea invizibilul. Testarea prin electroluminescență (EL) la fața locului identifică microfisuri și defecte de fabricație imposibil de detectat vizual.
      
      Combinăm EL cu termografia IR (dronă și manual) și trasarea curbelor I-V pentru a diagnostica precis cauzele sub-performanței (PID, LID, diode bypass defecte, hotspot-uri).
    `,
    benefits: [
      'Detecția microfisurilor și defectelor de celulă',
      'Suport pentru garanții și claim-uri',
      'Prevenirea incendiilor prin detecția hotspot-urilor'
    ],
    standards: ['IEC 62446-3', 'IEC 60904']
  },
  {
    id: 'storage',
    title: 'Stocare Energie (BESS)',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    shortDesc: 'Consultantă pentru sisteme de stocare de mare capacitate (10-100 MWh).',
    fullDesc: `
      Avem experiență concretă în proiectarea sistemelor de stocare finanțate prin PNRR C1.4. Am elaborat studii pentru proiecte majore (ex: 100 MWh Tomis Team, 10 MWh ENGIE).
      
      Oferim soluții pentru arbitraj, servicii de sistem și integrarea în parcuri hibride, asigurând conformitatea cu reglementările de rețea.
    `,
    benefits: [
      'Maximizarea veniturilor din arbitraj',
      'Reducerea dezechilibrelor',
      'Soluții tehnice validate în proiecte aprobate'
    ],
    standards: ['IEC 62933', 'Reglementări ANRE']
  },
  {
    id: 'audit',
    title: 'Audit Energetic Industrial',
    icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    shortDesc: 'Soluții de eficiență energetică pentru mari consumatori (Honeywell, Greenfiber).',
    fullDesc: `
      Realizăm audituri energetice complexe (Tip A/B) și propunem măsuri de decarbonizare industrială. Lucrăm cu clienți din industria automotive, producție și tipografică pentru reducerea consumului specific.
      
      Integrăm soluții de generare proprie (PV), modernizare HVAC și recuperare de căldură.
    `,
    benefits: [
      'Reducerea OPEX-ului industrial',
      'Conformitate Legea 121/2014',
      'Finanțare prin PNRR I.5'
    ],
    standards: ['ISO 50001', 'Legea 121/2014']
  },
  {
    id: 'research',
    title: 'Cercetare & Inovare (R&D)',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    shortDesc: 'Proiecte Horizon Europe: D-HYDROFLEX, DigBUILD, RESPONSE.',
    fullDesc: `
      Suntem parteneri activi în consorții internaționale de cercetare (Horizon Europe, H2020), lucrând la tehnologii de frontieră: digitalizarea hidrocentralelor, clădiri inteligente și comunități energetice.
      
      Această componentă R&D ne oferă un avantaj competitiv major: accesul timpuriu la tehnologii și metodologii care vor deveni standarde în viitor.
    `,
    benefits: [
      'Acces la know-how european de top',
      'Soluții inovatoare pentru clienți comerciali',
      'Validare tehnologică internațională'
    ],
    standards: ['Horizon Europe', 'H2020']
  }
];

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Synergy Solar Gruia',
    category: 'Utility Scale PV',
    capacity: '185.6 MWp',
    client: 'Fondul de Modernizare (Beneficiar Privat)',
    description: 'Studiu de Fezabilitate complet pentru unul dintre cele mai mari parcuri PV din România (jud. Mehedinți).'
  },
  {
    id: '2',
    title: 'Proiect Stocare Tomis Team',
    category: 'BESS (Storage)',
    capacity: '100 MWh',
    client: 'Tomis Team SA',
    description: 'Studiu de fezabilitate pentru instalație de stocare la scară largă (Constanța), finanțare PNRR C1.4.'
  },
  {
    id: '3',
    title: 'Greenfiber International',
    category: 'Industrial Prosumer',
    capacity: '1 MWp + 200 kWh BESS',
    client: 'Greenfiber International (Buzău)',
    description: 'Proiectare și consultanță PNRR pentru sistem fotovoltaic cu stocare integrată în fluxul industrial.'
  },
  {
    id: '4',
    title: 'Universitatea Politehnica București',
    category: 'Public Sector / Rooftop',
    capacity: '7.24 MWp',
    client: 'UPB',
    description: 'Studiu de fezabilitate pentru instalarea de panouri pe campusurile universitare.'
  },
  {
    id: '5',
    title: 'Audit & Due Diligence',
    category: 'Consulting',
    capacity: 'Multi-site',
    client: 'Honeywell, Electrica-SAPE, ENGIE',
    description: 'Audituri energetice complexe (Honeywell) și Technical Due Diligence pentru achiziții parcuri PV (Electrica, ENGIE).'
  }
];

export const trustPoints = [
  {
    title: "Expertiză R&D Validată UE",
    text: "Participarea în proiecte Horizon Europe (D-HYDROFLEX, RESPONSE) validează competențele noastre la cel mai înalt nivel tehnic european."
  },
  {
    title: "Diagnostic cu Echipamente Proprii",
    text: "Nu externalizăm testele critice. Deținem laborator mobil cu Electroluminescență (EL), Termografie IR și trasor de curbe I-V."
  },
  {
    title: "Track Record Finanțări",
    text: "Experiență vastă cu PNRR (C1.1, I.4, I.5), POIM și Fondul de Modernizare. Proiecte aprobate pentru beneficiari precum Greenfiber, Walter Tosto, Arabesque."
  },
  {
    title: "Abordare 'Bankability First'",
    text: "Livrăm documentații (SF, TDD) construite pentru a satisface exigențele ofițerilor de risc bancar, nu doar pentru conformitate birocratică."
  }
];