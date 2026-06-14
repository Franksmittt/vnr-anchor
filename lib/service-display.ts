import type { PricingService } from '@/data/pricing-data';

const LEADING_CODE_PATTERN =
  /^(?:ITR?\d+[A-Z0-9]*|IT12[A-Z0-9\-]*|IRP\d+[A-Z0-9\-/()]*|VAT\d+|EMP\d+|UI19|TAXCLE|APN|DISRES|DTR|SARSMI|SUB|ADR\d*|AFS[A-Z0-9\-]*|TAXCAL|PAYROL|BOS|COID[A-Z0-9\-]*|SARSVAT|IRP3|XERO|COMVAL|SEC|JUN|QUA|ACC|BUS|SOFT|TRA|LET|INC|BBBEEE|TESTDRAFT|DEC|TRUST[A-Z0-9\-]*|INCOMEREG|NAMECH|SDL|UIF|VATREG|VATDER|PAYEREG|PAYEDER|PBOREG|SARSTAXEXREG|SARSREP|SARSBD|SARS-STT|SARSCER|CIPCCK2|CIPCCON|CIPCAM|CIPCAN|CIPCDER|CIPCDIS|CIPCMOI|CIPCNAM|CIPCNPC|CIPCREG|CIPCRES|CIPCSHA|COIDRE|COIDLG|COIDPA|COIDSU|COIDTE|NPOREG|STAT|CC)\s*[-–—:/]\s*/i;

/** Strip internal form/SKU-style prefixes so clients see plain service names. */
export function cleanServiceDescription(description: string): string {
  let text = description.replace(/\s+/g, ' ').trim();

  for (let i = 0; i < 4; i += 1) {
    const next = text.replace(LEADING_CODE_PATTERN, '');
    if (next === text) break;
    text = next.trim();
  }

  text = text.replace(/^\(add\)\s*/i, 'Additional: ');
  text = text.replace(/\s*\(Individuals\)\s*$/i, '');
  text = text.replace(/\s*\(Dormant Company\/CC\/Trust\/Individual\)\s*$/i, '');
  text = text.replace(/^Hourly Rate:\s*/i, '');

  if (text) {
    text = text.charAt(0).toUpperCase() + text.slice(1);
  }

  return text || description.trim();
}

export type ServiceSortOption = 'name-asc' | 'name-desc' | 'price-asc' | 'price-desc';

function sortPrice(service: PricingService): number {
  if (typeof service.priceIncl === 'number') return service.priceIncl;
  if (typeof service.priceExcl === 'number') return service.priceExcl;
  if (String(service.priceExcl).toUpperCase() === 'FREE') return 0;
  return Number.POSITIVE_INFINITY;
}

export function sortPricingServices(
  services: PricingService[],
  sort: ServiceSortOption,
): PricingService[] {
  const sorted = [...services];

  sorted.sort((a, b) => {
    const nameA = cleanServiceDescription(a.description).toLowerCase();
    const nameB = cleanServiceDescription(b.description).toLowerCase();

    switch (sort) {
      case 'name-desc':
        return nameB.localeCompare(nameA);
      case 'price-asc':
        return sortPrice(a) - sortPrice(b) || nameA.localeCompare(nameB);
      case 'price-desc': {
        const priceA = sortPrice(a);
        const priceB = sortPrice(b);
        const normA = priceA === Number.POSITIVE_INFINITY ? -1 : priceA;
        const normB = priceB === Number.POSITIVE_INFINITY ? -1 : priceB;
        return normB - normA || nameA.localeCompare(nameB);
      }
      case 'name-asc':
      default:
        return nameA.localeCompare(nameB);
    }
  });

  return sorted;
}
