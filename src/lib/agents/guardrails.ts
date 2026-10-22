/**
 * Garde-fous déterministes appliqués côté serveur aux sorties des agents IA.
 * Ces règles ne dépendent pas du modèle : elles sont vérifiées après génération.
 */

export type GuardrailSeverity = "faible" | "moyenne" | "elevee";

export type GuardrailType =
  | "promesse_garantie"
  | "ton_culpabilisant"
  | "affirmation_scientifique"
  | "source_invention"
  | "injection_prompt"
  | "acces_non_autorise";

export interface GuardrailFinding {
  type: GuardrailType;
  severity: GuardrailSeverity;
  detail: string;
}

export interface GuardrailReport {
  approved: boolean;
  findings: GuardrailFinding[];
}

const PROMESSES_GARANTIES = [
  /tu vas r[ée]ussir/i,
  /vous allez r[ée]ussir/i,
  /garanti(?:e|s)?\s+(?:de\s+)?(?:r[ée]ussite|gu[ée]rir|succ[èe]s)/i,
  /r[ée]ussite garantie/i,
  /je te garantis/i,
  /je vous garantis/i,
  /c'est certain que tu/i,
  /certain de (?:réussir|gu[ée]rir)/i,
];

const TON_CULPABILISANT = [
  /tu aurais d[ûu] (?:mieux )?(?:pu|fali|v[ûu]|d[êe]u)/i,
  /tu as manqu[ée]/i,
  /tu n['’]as pas respect[ée]/i,
  /tu es en retard/i,
  /tu n['’]as pas fait ta mission/i,
  /tu devrais te ressaisir/i,
  /tu as d[ûu] te reprocher/i,
];

const AFFIRMATION_SCIENTIFIQUE = [
  /la science (?:a )?prouve que/i,
  /c'est un fait scientifique (?:que|qui)/i,
  /ceci est scientifiquement prouv[ée]/i,
  /les [ée]tudes scientifiques d[ée]montrent que/i,
];

const SOURCES_INVENTION = [
  /\b(?:proverbes? \d+[:,]\d+)\b/i,
  /\b(?:jean \d+[:,]\d+)\b/i,
  /\b(?:matthieu \d+[:,]\d+)\b/i,
  /\b(?:luc \d+[:,]\d+)\b/i,
  /\b(?:marc \d+[:,]\d+)\b/i,
];

const INJECTION_PATTERNS = [
  /ignore (?:all )?(?:les |your )?(?:instructions|r[eè]gles|consignes)/i,
  /oublie (?:les |tes )?(?:instructions|r[eè]gles|consignes)/i,
  /disregard (?:all )?(?:previous |prior )?instructions/i,
  /system prompt/i,
  /r[ée]v[èe]le (?:ton |le )?(?:prompt|system prompt)/i,
  /tu es maintenant (?:un |une )?(?:dan|prompt|mode)/i,
];

const ACCES_NON_AUTORISE = [
  /journal(?: de l['’]utilisateur)?(?: complet| priv[ée])/i,
  /toutes les entr[ée]es du journal/i,
  /contenu du journal de/i,
];

const PATTERNS_BY_TYPE: Record<GuardrailType, RegExp[]> = {
  promesse_garantie: PROMESSES_GARANTIES,
  ton_culpabilisant: TON_CULPABILISANT,
  affirmation_scientifique: AFFIRMATION_SCIENTIFIQUE,
  source_invention: SOURCES_INVENTION,
  injection_prompt: INJECTION_PATTERNS,
  acces_non_autorise: ACCES_NON_AUTORISE,
};

const SEVERITY_BY_TYPE: Record<GuardrailType, GuardrailSeverity> = {
  promesse_garantie: "elevee",
  ton_culpabilisant: "elevee",
  affirmation_scientifique: "moyenne",
  source_invention: "moyenne",
  injection_prompt: "elevee",
  acces_non_autorise: "elevee",
};

function collectText(payload: unknown): string {
  if (typeof payload === "string") return payload;
  if (Array.isArray(payload)) return payload.map(collectText).join(" ");
  if (payload && typeof payload === "object") {
    return Object.values(payload as Record<string, unknown>)
      .map(collectText)
      .join(" ");
  }
  return "";
}

export function checkGuardrails(payload: unknown): GuardrailReport {
  const text = collectText(payload);
  const findings: GuardrailFinding[] = [];

  (Object.keys(PATTERNS_BY_TYPE) as GuardrailType[]).forEach((type) => {
    PATTERNS_BY_TYPE[type].forEach((pattern) => {
      const match = text.match(pattern);
      if (match) {
        findings.push({
          type,
          severity: SEVERITY_BY_TYPE[type],
          detail: `Motif détecté : « ${match[0].trim()} »`,
        });
      }
    });
  });

  const approved = !findings.some(
    (finding) =>
      finding.severity === "elevee" || finding.severity === "moyenne"
  );

  return { approved, findings };
}

export function sanitizeForStorage(payload: unknown): string {
  return collectText(payload).slice(0, 2000);
}
