"""A fictitious Keelokit project for the dashboard screenshots: Fleetly, a mobile app for last-mile
delivery fleets. python3 fixture.py <dir> <en|es> <build|prd>"""
import os
import subprocess
import sys
from pathlib import Path

root, lang, state = Path(sys.argv[1]), sys.argv[2], sys.argv[3]
E = lang == "en"
NAME = "Fleetly"
T = (lambda en, es: en if E else es)
PROD = T("production", "producción")


def w(rel, text):
    p = root / rel
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(text.lstrip("\n"))


def git(*args, date=None):
    env = dict(os.environ, GIT_AUTHOR_NAME="Sofía", GIT_AUTHOR_EMAIL="sofia@example.com",
               GIT_COMMITTER_NAME="Sofía", GIT_COMMITTER_EMAIL="sofia@example.com")
    if date:
        env["GIT_AUTHOR_DATE"] = env["GIT_COMMITTER_DATE"] = f"{date}T12:00:00"
    subprocess.run(["git", *args], cwd=root, check=True, env=env, capture_output=True)


root.mkdir(parents=True, exist_ok=True)
git("init", "-q", "-b", "main")
gates = {"build": ["intake", "product", "stack", "skeleton", "backlog"], "prd": ["intake"]}[state]
dates = {"intake": "2026-09-08", "product": "2026-09-09", "stack": "2026-09-09", "skeleton": "2026-09-10", "backlog": "2026-09-11"}
w(".keelokit/state.toml", "[gates]\n" + "".join(f'{g} = "{dates[g]}"\n' for g in gates) + f"""
[run]
mode = "step"
build = "parallel"
parallel = 3
decided = "2026-09-08"

[dashboard]
lang = "{lang}"
""")
if state == "build":
    w(".keelokit/answers.yml", f"_commit: v0.7.1\n_src_path: gh:leosimini/keelokit\napps: '[\"api\", \"web\", \"mobile\"]'\ncredit: visible\nmode: project\nproject_name: {NAME}\n")

w("docs/context/product.md", T("""
# Product

## Problem
Delivery companies with 10 to 50 drivers run their routes on paper and WhatsApp: one delivery in twelve fails, and nobody can prove what happened at the door. (S1)

## Users
| User | Needs to | Today they use |
|---|---|---|
| Driver | Follow the day's stops and prove each delivery, even without signal | A printed list and photos in WhatsApp |
| Dispatcher | Plan the day's routes and see where every driver is | A spreadsheet and phone calls |
| Customer | Know when the package arrives | Nothing: they wait all day |
""", """
# Producto

## Problema
Las empresas de reparto con 10 a 50 choferes arman sus rutas en papel y WhatsApp: una de cada doce entregas falla y nadie puede probar qué pasó en la puerta. (S1)

## Usuarios
| Usuario | Necesita | Hoy usa |
|---|---|---|
| Chofer | Seguir las paradas del día y probar cada entrega, aun sin señal | Una lista impresa y fotos por WhatsApp |
| Despachante | Planificar las rutas del día y ver dónde está cada chofer | Una planilla y llamadas |
| Cliente | Saber cuándo llega el paquete | Nada: espera todo el día |
"""))
w("docs/context/domain.md", T("""
# Domain

## Invariants
- [INV-001] [MUST] A stop is completed at most once, even after two phones sync offline work — class: once (S1)
- [INV-002] [MUST] A driver only sees their own routes and their customers' addresses — class: isolation (S2)
- [INV-003] [MUST] A delivery marked done always has its proof: a photo or a signature — class: consistency (S1)
""", """
# Dominio

## Invariantes
- [INV-001] [MUST] Una parada se completa como máximo una vez, aunque dos celulares sincronicen trabajo offline — class: once (S1)
- [INV-002] [MUST] Un chofer solo ve sus rutas y las direcciones de sus clientes — class: isolation (S2)
- [INV-003] [MUST] Una entrega marcada como hecha siempre tiene su prueba: foto o firma — class: consistency (S1)
"""))
w("docs/context/constraints.md", T("# Constraints\n\n## Devices\n- [MUST] work on 3-year-old Android phones with patchy signal. (S1)\n",
                                   "# Restricciones\n\n## Dispositivos\n- [MUST] funcionar en celulares Android de 3 años y con señal intermitente. (S1)\n"))
w("docs/context/environments.md", T(f"# Environments\n\n| Environment | Purpose | URL |\n|---|---|---|\n| staging | every green main | staging.fleetly.app |\n| {PROD} | users | fleetly.app |\n",
                                    f"# Entornos\n\n| Entorno | Para qué | URL |\n|---|---|---|\n| staging | cada main en verde | staging.fleetly.app |\n| {PROD} | usuarios | fleetly.app |\n"))
w("docs/context/gaps.md", T("""
# Open gaps

| Id | File | Missing | Owner | Question | Blocking |
|---|---|---|---|---|---|
| GAP-004 | domain.md | Retry policy | Operations lead | How many times is a failed delivery retried, and who decides? | no |
| GAP-005 | environments.md | Store accounts | Founder | Who owns the Apple and Google developer accounts? | no |
""", """
# Preguntas abiertas

| Id | File | Missing | Owner | Question | Blocking |
|---|---|---|---|---|---|
| GAP-004 | domain.md | Política de reintentos | Jefe de operaciones | ¿Cuántas veces se reintenta una entrega fallida, y quién lo decide? | no |
| GAP-005 | environments.md | Cuentas de las tiendas | Fundadora | ¿Quién es dueño de las cuentas de desarrollador de Apple y Google? | no |
"""))
w("docs/prd.md", T(f"""
# {NAME} — PRD

Status: approved (2026-09-09) · Owner: Sofía

## Problem
One delivery in twelve fails, and there's no proof of what happened.

## Success metrics
| Metric | Target | By | How it is measured |
|---|---|---|---|
| Failed deliveries | < 3% | 2027-03-01 | failed / attempted, weekly |
| Deliveries with proof | ≥ 98% | 2026-12-15 | deliveries with a photo or signature / delivered |
| Time to plan the day (dispatcher) | < 20 min | 2027-01-15 | p50 from opening the console to routes sent |

## Scope
**In (MVP):**
- The driver's app: the day's route, offline, stops in order — for drivers
- Proof of delivery: photo and signature — for drivers
- A dispatch console to assign routes — for dispatchers
- A notice to the customer 30 minutes before — for customers

**Out (explicitly):**
- Cash on delivery — payments stay with the shop
- Live GPS tracking for customers — the 30-minute notice first
""", f"""
# {NAME} — PRD

Status: approved (2026-09-09) · Owner: Sofía

## Problem
Una de cada doce entregas falla y no hay prueba de qué pasó.

## Success metrics
| Métrica | Objetivo | Para | Cómo se mide |
|---|---|---|---|
| Entregas fallidas | < 3% | 2027-03-01 | fallidas / intentadas, semanal |
| Entregas con prueba | ≥ 98% | 2026-12-15 | entregas con foto o firma / entregadas |
| Tiempo para planificar el día | < 20 min | 2027-01-15 | p50 desde abrir la consola hasta enviar las rutas |

## Scope
**In (MVP):**
- La app del chofer: la ruta del día, offline, paradas en orden — para choferes
- Prueba de entrega: foto y firma — para choferes
- Una consola de despacho para asignar rutas — para despachantes
- Un aviso al cliente 30 minutos antes — para clientes

**Out (explicitly):**
- Cobro contra entrega — el pago sigue en la tienda
- Seguimiento GPS en vivo para clientes — primero el aviso de 30 minutos
"""))
if state == "build":
    w("docs/stack.md", T("""
# Stack

Apps: **api**, **web**, **mobile**. No PostGIS yet.

- `mobile` — the driver's app, offline first: the route and the proofs live on the phone until there's signal.
- `web` — the dispatch console.
- `api` — routes, stops, proofs and the customer notices.
""", """
# Stack

Apps: **api**, **web**, **mobile**. Sin PostGIS por ahora.

- `mobile` — la app del chofer, offline primero: la ruta y las pruebas viven en el celular hasta que hay señal.
- `web` — la consola de despacho.
- `api` — rutas, paradas, pruebas y avisos a los clientes.
"""))
    w("docs/decisions/0001-offline-first-driver-app.md", T("# An offline-first driver app\n\nStatus: accepted (2026-09-09)\n\n## Context\nDrivers lose signal in buildings and basements.\n",
                                                          "# Una app del chofer offline primero\n\nStatus: aceptada (2026-09-09)\n\n## Contexto\nLos choferes pierden señal en edificios y subsuelos.\n"))
    w("backlog/epics.md", T("""
# Epics

| Id | Goal | PRD line |
|---|---|---|
| ROUTE | Drivers run their day from the phone | The driver's app |
| PROOF | Every delivery has its proof | Proof of delivery |
| DISPATCH | Dispatchers plan the day in minutes | Dispatch console |
| NOTIFY | Customers know when the driver arrives | Notice 30 minutes before |
""", """
# Epics

| Id | Goal | PRD line |
|---|---|---|
| ROUTE | El chofer maneja su día desde el celular | La app del chofer |
| PROOF | Cada entrega tiene su prueba | Prueba de entrega |
| DISPATCH | El despacho planifica el día en minutos | Consola de despacho |
| NOTIFY | El cliente sabe cuándo llega el chofer | Aviso 30 minutos antes |
"""))
    stories = [
        ("ROUTE-001", 1, [], T("See today's route", "Ver la ruta del día"), True),
        ("DISPATCH-001", 1, [], T("Assign routes to drivers", "Asignar rutas a los choferes"), True),
        ("PROOF-001", 1, [], T("Photo proof of delivery", "Foto como prueba de entrega"), True),
        ("ROUTE-002", 2, ["ROUTE-001"], T("Work offline and sync later", "Trabajar sin señal y sincronizar después"), True),
        ("PROOF-002", 2, ["PROOF-001"], T("Customer signature on the phone", "Firma del cliente en el celular"), False),
        ("ROUTE-003", 2, ["ROUTE-001"], T("Reorder stops on the way", "Reordenar paradas en el camino"), False),
        ("NOTIFY-001", 3, ["ROUTE-002"], T("Notify the customer 30 min before", "Avisar al cliente 30 min antes"), False),
        ("ROUTE-004", 3, ["ROUTE-003"], T("Undo a failed-delivery mark", "Deshacer una entrega marcada como fallida"), False),
        ("PROOF-003", 3, ["PROOF-002"], T("Report a damaged package", "Reportar un paquete dañado"), False),
    ]
    for sid, wave, deps, title, _ in stories:
        origin = '\norigin = "bugbash:2026-09-24 UX-3"' if sid == "ROUTE-004" else ""
        depstr = ", ".join(f'"{d}"' for d in deps)
        w(f"backlog/stories/{sid}-x.md", f"""
+++
id = "{sid}"
epic = "{sid.split('-')[0]}"
title = "{title}"
wave = {wave}
depends_on = [{depstr}]
touches = ["apps/mobile/src/{sid.lower()}/"]
dimensions = ["ux", "ui", "i18n", "a11y", "mobile"]{origin}
+++

## {T('Context', 'Contexto')}
{T('Serves the PRD line of its epic. Does NOT do: cash on delivery.', 'Sirve a la línea del PRD de su épica. NO hace: cobro contra entrega.')}

## {T('User story', 'Historia')}
{T(f'As a driver, I want to {title.lower()}, so that no delivery is lost.', f'Como chofer, quiero {title.lower()}, para que no se pierda ninguna entrega.')}

## {T('Acceptance criteria', 'Criterios de aceptación')}
```gherkin
Scenario: [S1] {T('happy path', 'camino feliz')}
```
""")
    w("docs/bugbash/2026-09-24/report.md", T("""
# Bug bash — 2026-09-24

## Scope
Incremental, sha 4be91c0. Lenses: integrity, ux, i18n, a11y, copy, security, mobile.

| Id | Lens | Severity | Title | Status | Fix commit | Check added |
|---|---|---|---|---|---|---|
| INT-1 | integrity | P0 | Two phones syncing offline could complete the same stop twice | fixed | 8a1b2c3 | `race()` test on every stop write |
| SEC-1 | security | P1 | The tracking link let a customer see other stops' addresses | fixed | 2c4d6e8 | contract test per role |
| UX-2 | ux | P2 | An empty route shows a spinner forever | fixed | 9d8e7f6 | E2E step: empty state per screen |
| UX-3 | ux | P2 | A driver can't undo a stop marked as failed by mistake | story ROUTE-004 | — | — |
| I18N-1 | i18n | P3 | "1 stops" in the route summary | fixed | 1a2b3c4 | lint: ICU plurals only |
| CPY-1 | copy | P1 | The customer notice promises live GPS tracking | pending decision | — | — |

## Pending decisions
- **CPY-1** — the notice promises live tracking; the PRD leaves it out. (a) change the text to the 30-minute notice; (b) add live tracking (new scope, battery cost on the drivers' phones). Recommendation: (a).
""", """
# Bug bash — 2026-09-24

## Scope
Incremental, sha 4be91c0. Lentes: integrity, ux, i18n, a11y, copy, security, mobile.

| Id | Lens | Severity | Title | Status | Fix commit | Check added |
|---|---|---|---|---|---|---|
| INT-1 | integrity | P0 | Dos celulares sincronizando offline podían completar dos veces la misma parada | corregido | 8a1b2c3 | test `race()` en cada escritura de paradas |
| SEC-1 | security | P1 | El link de seguimiento dejaba ver direcciones de otras paradas | corregido | 2c4d6e8 | test de contrato por rol |
| UX-2 | ux | P2 | Una ruta vacía muestra un spinner para siempre | corregido | 9d8e7f6 | paso E2E: estado vacío por pantalla |
| UX-3 | ux | P2 | El chofer no puede deshacer una parada marcada como fallida por error | story ROUTE-004 | — | — |
| I18N-1 | i18n | P3 | "1 paradas" en el resumen de la ruta | corregido | 1a2b3c4 | lint: solo plurales ICU |
| CPY-1 | copy | P1 | El aviso al cliente promete seguimiento GPS en vivo | pendiente de decisión | — | — |

## Pending decisions
- **CPY-1** — el aviso promete seguimiento en vivo; el PRD lo deja afuera. (a) cambiar el texto al aviso de 30 minutos; (b) sumar seguimiento en vivo (alcance nuevo, gasto de batería en los celulares de los choferes). Recomendación: (a).
"""))
    w("docs/security/2026-09-25/report.md", T("""
# Security review — 2026-09-25

## Scope
Staging, sha 4be91c0.

| Id | Area | Severity | Title | Status | Fix commit | Check added |
|---|---|---|---|---|---|---|
| PRIV-1 | privacy | P1 | Customers' phone numbers appear in the API logs | fixed | 3c5e7a9 | logger redaction test over the data map |
| AUTH-2 | access | P1 | No rate limit on the public tracking endpoint | fixed | 7b2d1f0 | rate-limit test per public route |
| PRIV-2 | privacy | P2 | Delivery photos are kept forever | pending decision | — | — |
| DEP-1 | dependencies | P3 | Outdated base image with a low CVE | fixed | 5a1e2c4 | osv-scanner in CI |

## Pending decisions
- **PRIV-2** — how long are delivery photos kept? 90 days covers claims and returns. Recommendation: 90 days, then delete.
""", """
# Revisión de seguridad — 2026-09-25

## Scope
Staging, sha 4be91c0.

| Id | Area | Severity | Title | Status | Fix commit | Check added |
|---|---|---|---|---|---|---|
| PRIV-1 | privacidad | P1 | Los teléfonos de los clientes aparecen en los logs de la API | corregido | 3c5e7a9 | test de redacción del logger sobre el mapa de datos |
| AUTH-2 | acceso | P1 | Sin límite de pedidos en el endpoint público de seguimiento | corregido | 7b2d1f0 | test de límite por ruta pública |
| PRIV-2 | privacidad | P2 | Las fotos de entrega se guardan para siempre | pendiente de decisión | — | — |
| DEP-1 | dependencias | P3 | Imagen base desactualizada con un CVE bajo | corregido | 5a1e2c4 | osv-scanner en CI |

## Pending decisions
- **PRIV-2** — ¿cuánto tiempo se guardan las fotos de entrega? 90 días cubren reclamos y devoluciones. Recomendación: 90 días y después se borran.
"""))
    w("docs/deploy.md", T(f"""
# Deploy

## staging
Where the team tries every change before users see it.
- [x] Fly.io account — owner: Sofía · verified 2026-09-12
- [x] Logged in on this computer
- [x] API app and its database
- [x] API settings
- [x] GitHub can deploy it
- [x] First deploy green, /health answers 200

## {PROD}
Where users are. Only a tagged version gets here, after a person approves it.
- [x] API app and its database
- [ ] The GitHub `production` environment requires a reviewer
- [ ] Domain and HTTPS for fleetly.app
- [ ] Store builds (EAS) and the Apple and Google accounts
""", f"""
# Deploy

## staging
Donde el equipo prueba cada cambio antes de que lo vean los usuarios.
- [x] Cuenta de Fly.io — dueña: Sofía · verificado 2026-09-12
- [x] Sesión iniciada en esta computadora
- [x] App de la API y su base de datos
- [x] Configuración de la API
- [x] GitHub puede desplegarla
- [x] Primer deploy en verde, /health responde 200

## {PROD}
Donde están los usuarios. Solo llega una versión con tag, después de que una persona la aprueba.
- [x] App de la API y su base de datos
- [ ] El entorno `production` de GitHub pide un revisor
- [ ] Dominio y HTTPS para fleetly.app
- [ ] Builds para las tiendas (EAS) y las cuentas de Apple y Google
"""))
    git("add", "-A")
    git("commit", "-qm", "chore: skeleton from Keelokit v0.7.1", date="2026-09-10")
    d = {"ROUTE-001": "2026-09-15", "DISPATCH-001": "2026-09-16", "PROOF-001": "2026-09-17", "ROUTE-002": "2026-09-26"}
    for sid, _, _, title, done in stories:
        if done:
            git("commit", "-q", "--allow-empty", "-m", f"feat: {title}", "-m", f"Story: {sid}", date=d[sid])
else:
    git("add", "-A")
    git("commit", "-qm", "docs: context and PRD", date="2026-09-09")
