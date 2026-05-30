UBER HEALTH INDIA

Product Requirements Document

# 1. PROBLEM, USERS &amp; MARKET OPPORTUNITY

India's ambulance ecosystem is critically broken. Emergency response times in metros average 25–35 minutes. Independent ambulance operators — who own 70%+ of India's ~4-lakh ambulance fleet — operate with zero digital discovery, no live tracking, cash-only collections, and no accountability. Patients negotiate fares mid-crisis. Hospitals have no visibility on incoming patients. The result: preventable deaths, delayed discharges, and a ■14,000 Cr industry with no trust layer.

|  User Segment | Core Pain Point | What They Need  |
| --- | --- | --- |
|  Emergency Patient / Family | Panic booking, price gouging, no ETA | One-tap booking, live tracking, upfront fare  |
|  Planned Transfer Patient | Delayed discharge, unreliable vehicle | Scheduled BLS booking or Health Ride, confirmed ETA  |
|  Independent Ambulance Driver | No digital demand, cash-only, idle time | Steady demand, UPI settlement, earnings view  |
|  Hospital Discharge Teams | Manual co-ordination, no ETAs | Scheduling API, real-time ambulance updates  |
|  Corporates / Insurers (B2B) | No scalable employee health transport | Dashboard, invoicing, SLA adherence reports  |
|  Market Layer | Estimate | Basis  |
| --- | --- | --- |
|  India Ambulance Services TAM | ~$1.7B (2024) → $2.2B+ by 2030 | Market Business Insights; 5.1% CAGR  |
|  Top-5 City SAM (launch metros) | ~$420–480M | ~28% of national market in 5 metros  |
|  Uber Health SOM — Year 1 | ~$8–12M GMV | 1–2% SAM at ~15–18% commission  |

# 2. COMPETITOR ANALYSIS

|  Player | Model | Coverage | Strengths | Gap vs Uber Health  |
| --- | --- | --- | --- | --- |
|  Blinkit Ambulance | Owned fleet; employed paramedics | Delhi-NCR only (~12 vehicles) | 10-min response; brand trust | Asset-heavy; can't scale; no scheduled rides or B2B  |
|  Medulance | Marketplace + B2B/B2G; commission | 22 cities; 7,500 ambulances | Large fleet; Delhi 35→11 min; air ambulance | Legacy UX; no consumer brand; patchy quality control  |
|  VMEDO | Marketplace; app booking | Primarily Bengaluru | 24×7 support; hospital triaging | 56 employees; low awareness; weak supply outside Bengaluru  |
|  StanPlus | B2B hospital partnerships | Hyderabad, Bengaluru | Deep hospital integration; trained EMTs | Not consumer-facing; zero on-demand bookings  |
|  Govt. 108 / 112 | Free; state-funded | Pan-India (emergency) | Free; mandated; high volume | 30–45 min response; unbookable; no tracking; no scheduled use  |
|  Uber Health | Marketplace; commission/ride; independent ops | 5 metros Day 1 | 200M+ app users; GPS; payments; brand; dedicated tab | New entrant — must build supply fast; regulatory navigation needed  |

Key insight: No competitor combines consumer-scale distribution, proven driver marketplace tech, real-time GPS, and a digital payments stack. Uber Health's moat is the platform, not the ambulance.

# 3. KEY STAKEHOLDERS &amp; WHAT EACH NEEDS

|  Stakeholder | Primary Need | Success Looks Like  |
| --- | --- | --- |
|  Patient / Family (B2C) | Fast, trackable, fairly-priced ambulance | Arrives <15 min; upfront fare shown before booking  |
|  Independent Ambulance Driver | Digital demand, UPI settlement, earnings transparency | >10 rides/week via Uber; weekly digital payouts  |
|  Hospitals / Discharge Teams | Reliable pre-scheduled patient transport | API integration; <5 min co-ordination per discharge  |
|  Corporates / Insurers | Employee SOS + planned transport; MIS reports | Dashboard, invoicing, SLA adherence >95%  |
|  State Regulators | KYC, vehicle fitness, driver background checks | Uber onboarding satisfies state transport norms  |
|  Uber (Internal) | New revenue vertical; social impact brand signal | Gross margin positive by Month 9; zero safety incidents  |

# 4. UBER HEALTH v1 — SCOPE, MODEL &amp; RATIONALE

Entry point: Dedicated Uber Health tab in the existing Uber app (alongside Auto, Cab, Bike) — not a new standalone app. The tab surfaces two service types: (1) Ambulance — for emergencies and critical transfers, and (2) Health Ride — a priority cab booking (Uber Black / Uber Comfort) for non-critical doctor visits, OPD appointments, and hospital check-ups. Uses 200M+ installs and reuses Uber's GPS, payments, and driver tech at zero extra infrastructure cost.

Business model — two distinct tracks: (1) Ambulance: Independent ambulance operators self-onboard their BLS vehicles via the Uber Health Driver app. Uber charges 15–18% commission per completed ride (B2C) and 12% + GST for B2B (hospital/corporate) monthly invoices. No owned vehicles, no employed paramedics. (2) Health Ride (scheduled cab): Runs entirely on Uber's existing Uber Black / Uber Comfort

business and technology model — same driver pool, same pricing engine, same commission structure. No changes to the existing product. The only addition is a priority queue flag on Health Ride bookings, ensuring these patients are matched before standard ride requests. Zero incremental driver onboarding or tech build required for this track.

Launch cities: Delhi-NCR · Mumbai · Bengaluru · Chennai · Kolkata. Subsequent phases will expand to additional Tier-1 and Tier-2 cities. Air ambulance is on the product roadmap as a future vertical once regulatory and operational groundwork is in place.

## IN SCOPE

- Uber Health tab in app — two service types: Ambulance + Health Ride
- Ambulance: BLS — emergency + scheduled critical transfers
- Health Ride: Uber Black/Comfort for OPD, doctor &amp; hospital visits
- Health Ride queue priority — bumped above standard Uber rides
- Real-time GPS tracking for patient and family
- Upfront fare estimate before booking confirmation
- UPI / card / Uber Cash — zero cash required
- Driver onboarding: KYC, vehicle fitness cert, equipment check
- In-app SOS share — live location + ETA to 3 contacts
- Post-ride rating &amp; safety feedback loop
- Basic B2B API: hospital discharge + corporate health transport

## OUT OF v1 (DELIBERATE)

- ALS / ICU ambulances — v2 (paramedic certification needed)
- Air ambulance — future phase (regulatory complexity)
- Standalone Uber Health app — tab is sufficient
- Paramedic employment/training — marketplace model
- Telemedicine / in-app doctor consult — scope creep
- Tier-2/3 city rollout — Phase 2 (6–12 months post-launch)
- Govt. 108 integration — Phase 2/3 post regulatory dialogue
- Mortuary vans — Phase 2
- Mental health transport — future vertical
- Auto/standard cab for health rides — only Black/Comfort for patient comfort

## 5. SUCCESS METRICS — 3 MONTHS &amp; 6 MONTHS

|  Metric | Definition | 3-Month | 6-Month  |
| --- | --- | --- | --- |
|  Ambulance Response Time | Median: booking confirmed → arrival | ≤18 min | ≤12 min  |
|  Active Ambulances Onboarded | Verified vehicles with ≥1 ride/trailing 30d | 500 (5 cities) | 1,200 (5 cities)  |
|  Weekly Completed Rides | Completed ambulance rides per week | 800 rides/wk | 2,500 rides/wk  |
|  Ride Completion Rate | Bookings completed / bookings accepted | ≥85% | ≥92%  |
|  Patient CSAT | Post-ride in-app rating (1–5) | ≥4.1 / 5 | ≥4.3 / 5  |
|  Driver Earnings Score | % drivers rating earnings ≥4 stars | ≥65% | ≥75%  |
|  Supply Utilisation | Avg. rides per active ambulance per week | 6 rides/wk | 10 rides/wk  |
|  B2B Accounts Activated | Hospitals/corporates on API or dashboard | 10 accounts | 35 accounts  |
|  Health Ride Pickup Time | Median time from booking → driver arrives (Health Ride) | ≤8 min | ≤6 min  |
|  Safety Incidents | Critical incidents (breakdown, misconduct) | 0 | 0  |

## 6. RISKS &amp; MITIGATIONS

|  Risk | Likelihood | Mitigation  |
| --- | --- | --- |
|  Thin ambulance supply → long wait times | High | Pre-onboard 100+ ambulances/city before go-live; supply-demand dashboard  |
|  State transport / MoHFW regulatory friction | Medium | Engage state transport depts (DL, MH, KA, TN, WB) in Month 1; Uber legal team  |
|  Driver quality / equipment non-compliance | High | Mandatory inspection checklist at onboarding; audits; auto-deactivation on complaint  |
|  Safety incident damages brand | Low–Medium | Zero-tolerance policy; insurance mandate per vehicle; in-app SOS to city ops  |
|  Competitor aggressive response | Medium | Uber's distribution moat is unmatched; focus on quality and supply growth speed  |

Uber Health India - Product Requirements Document



