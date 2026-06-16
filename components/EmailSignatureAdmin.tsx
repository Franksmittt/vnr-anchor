'use client';

import { ChangeEvent, FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import {
  CheckCircle2,
  Copy,
  Download,
  Eye,
  ImageOff,
  Lock,
  Mail,
  Upload,
  UserRound,
} from 'lucide-react';

type SignatureData = {
  name: string;
  title: string;
  qualifications: string;
  email: string;
  mobile: string;
  telephone: string;
  website: string;
  address: string;
  includePhoto: boolean;
  photoDataUrl: string;
};

type TemplateKey = 'horizon' | 'boardroom' | 'ledger';

type SignatureTemplate = {
  key: TemplateKey;
  name: string;
  description: string;
  size: string;
};

const LOGO_URL =
  'https://vnr-anchor.vercel.app/_next/image?url=%2Fimages%2Flogos%2Fvnrlogo1.png&w=256&q=75';

type EmailSignatureAdminProps = {
  skipAuth?: boolean;
  embedded?: boolean;
};
const BRAND_BLUE = '#234694';
const BRAND_BLUE_DARK = '#1a3569';
const BRAND_LIME = '#92C741';
const SLATE_DARK = '#0f172a';
const SLATE_TEXT = '#1e293b';

const templates: SignatureTemplate[] = [
  {
    key: 'horizon',
    name: 'Executive Horizon',
    description: 'Dark premium banner with a strong advisory feel.',
    size: '720 x 190 px',
  },
  {
    key: 'boardroom',
    name: 'Boardroom Light',
    description: 'Clean white layout with blue corporate framing.',
    size: '720 x 180 px',
  },
  {
    key: 'ledger',
    name: 'Modern Ledger',
    description: 'Compact minimalist layout for everyday email threads.',
    size: '650 x 160 px',
  },
];

const defaultSignature: SignatureData = {
  name: 'Jannie Venter',
  title: 'Co-Founder & Director',
  qualifications:
    'Professional Accountant (SA) | B.Com Hons (Taxation) | Registered Tax Practitioner (SARS)',
  email: 'jannie@vnr.co.za',
  mobile: '072 378 9892',
  telephone: '012 653 1633',
  website: 'www.vnr.co.za',
  address: '4 Grit Ave, Zwartkop, Centurion, 0051',
  includePhoto: true,
  photoDataUrl: '/images/team/jannie-venter.jpg',
};

const htmlEscapeMap: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => htmlEscapeMap[character]);
}

function escapeAttr(value: string) {
  return escapeHtml(value).replace(/`/g, '&#96;');
}

function normaliseTelephone(value: string) {
  return value.replace(/[^\d+]/g, '');
}

function initialsFromName(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');
}

function signatureFileName(data: SignatureData, template: SignatureTemplate) {
  const person = data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  return `${person || 'vnr'}-${template.key}-email-signature.html`;
}

function signatureJpegFileName(data: SignatureData, template: SignatureTemplate) {
  const person = data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  return `${person || 'vnr'}-${template.key}-email-signature.jpg`;
}

async function waitForSignatureAssets(element: HTMLElement) {
  const imagePromises = Array.from(element.querySelectorAll('img')).map((image) => {
    if (image.complete && image.naturalWidth > 0) {
      return Promise.resolve();
    }

    return new Promise<void>((resolve) => {
      image.onload = () => resolve();
      image.onerror = () => resolve();
    });
  });

  await Promise.all(imagePromises);
  await document.fonts?.ready;
}

function contactIconSvg(label: string, color = BRAND_LIME, size = 15) {
  const baseAttrs = `xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-3px;"`;

  if (label === 'M') {
    return `<svg ${baseAttrs} aria-hidden="true"><rect x="7" y="2" width="10" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`;
  }

  if (label === 'T') {
    return `<svg ${baseAttrs} aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`;
  }

  if (label === 'E') {
    return `<svg ${baseAttrs} aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path></svg>`;
  }

  return `<svg ${baseAttrs} aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 0 20"></path><path d="M12 2a15.3 15.3 0 0 0 0 20"></path></svg>`;
}

function contactLine(label: string, value: string, href: string, textColor = '#475569') {
  if (!value.trim()) {
    return '';
  }

  return `
    <tr>
      <td style="width:22px;padding:3px 8px 3px 0;color:${BRAND_LIME};vertical-align:middle;">${contactIconSvg(label)}</td>
      <td style="padding:3px 0;font-family:Arial,sans-serif;font-size:13px;line-height:17px;color:${textColor};vertical-align:middle;">
        <a href="${escapeAttr(href)}" style="color:inherit;text-decoration:none;">${escapeHtml(value)}</a>
      </td>
    </tr>`;
}

function buildHorizonSignature(data: SignatureData, logoSrc: string) {
  const hasPhoto = data.includePhoto && data.photoDataUrl;
  const width = 720;
  const height = 190;
  const brandWidth = hasPhoto ? 170 : 210;
  const photoWidth = hasPhoto ? 155 : 0;
  const infoWidth = width - brandWidth - photoWidth;

  return `
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="${width}" style="width:${width}px;height:${height}px;border-collapse:separate;border-spacing:0;background:${SLATE_DARK};background:linear-gradient(135deg,#0f172a 0%,#111f3d 54%,#06111f 100%);border-radius:22px;overflow:hidden;font-family:Arial,Helvetica,sans-serif;">
  <tr>
    <td width="${brandWidth}" style="width:${brandWidth}px;padding:22px 18px;text-align:center;vertical-align:middle;border-right:1px solid rgba(255,255,255,0.12);">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="border-collapse:separate;border-spacing:0;margin:0 auto 12px;background:#ffffff;border-radius:14px;box-shadow:0 10px 24px rgba(0,0,0,0.22);">
        <tr>
          <td style="padding:8px 10px;text-align:center;vertical-align:middle;">
            <img src="${escapeAttr(logoSrc)}" alt="VNR Professional Accountants" width="126" style="display:block;width:126px;max-width:126px;height:auto;border:0;">
          </td>
        </tr>
      </table>
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:15px;letter-spacing:0.4px;color:#cbd5e1;">Professional Accountants</div>
      <div style="width:48px;height:3px;background:${BRAND_LIME};border-radius:999px;margin:12px auto 0;"></div>
    </td>
    ${
      hasPhoto
        ? `<td width="${photoWidth}" style="width:${photoWidth}px;text-align:center;vertical-align:middle;background:radial-gradient(circle at center,rgba(146,199,65,0.2),transparent 62%);">
      <img src="${escapeAttr(data.photoDataUrl)}" alt="${escapeAttr(data.name)}" width="104" height="104" style="display:block;width:104px;height:104px;object-fit:cover;border-radius:34px;border:4px solid #ffffff;margin:0 auto;">
    </td>`
        : ''
    }
    <td width="${infoWidth}" style="width:${infoWidth}px;padding:20px 28px 18px 28px;vertical-align:middle;">
      <div style="font-family:Georgia,'Times New Roman',serif;font-size:24px;line-height:28px;font-weight:bold;color:#ffffff;letter-spacing:-0.2px;">${escapeHtml(data.name)}</div>
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:16px;font-weight:bold;text-transform:uppercase;letter-spacing:1.2px;color:${BRAND_LIME};margin-top:4px;">${escapeHtml(data.title)}</div>
      ${
        data.qualifications.trim()
          ? `<div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:15px;color:#cbd5e1;margin-top:8px;">${escapeHtml(data.qualifications)}</div>`
          : ''
      }
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;margin-top:10px;">
        ${contactLine('M', data.mobile, `tel:${normaliseTelephone(data.mobile)}`, '#e2e8f0')}
        ${contactLine('T', data.telephone, `tel:${normaliseTelephone(data.telephone)}`, '#e2e8f0')}
        ${contactLine('E', data.email, `mailto:${data.email}`, '#e2e8f0')}
      </table>
    </td>
  </tr>
</table>`;
}

function buildBoardroomSignature(data: SignatureData, logoSrc: string) {
  const hasPhoto = data.includePhoto && data.photoDataUrl;
  const width = 720;
  const height = 180;
  const sideWidth = hasPhoto ? 150 : 118;
  const detailsWidth = width - sideWidth - 150;

  return `
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="${width}" style="width:${width}px;height:${height}px;border-collapse:separate;border-spacing:0;background:#ffffff;border:1px solid #dbe4ef;border-radius:18px;overflow:hidden;font-family:Arial,Helvetica,sans-serif;">
  <tr>
    <td width="${sideWidth}" style="width:${sideWidth}px;background:${BRAND_BLUE_DARK};background:linear-gradient(150deg,${BRAND_BLUE_DARK},${SLATE_DARK});padding:18px;text-align:center;vertical-align:middle;">
      ${
        hasPhoto
          ? `<img src="${escapeAttr(data.photoDataUrl)}" alt="${escapeAttr(data.name)}" width="96" height="96" style="display:block;width:96px;height:96px;object-fit:cover;border-radius:999px;border:3px solid #ffffff;margin:0 auto;">`
          : `<div style="width:82px;height:82px;border-radius:999px;background:${BRAND_LIME};color:${BRAND_BLUE_DARK};font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:82px;font-weight:bold;text-align:center;margin:0 auto;">${escapeHtml(initialsFromName(data.name) || 'VNR')}</div>`
      }
    </td>
    <td width="${detailsWidth}" style="width:${detailsWidth}px;padding:22px 24px;vertical-align:middle;">
      <div style="font-family:Georgia,'Times New Roman',serif;font-size:23px;line-height:27px;font-weight:bold;color:${SLATE_TEXT};">${escapeHtml(data.name)}</div>
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:16px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;color:${BRAND_BLUE};margin-top:3px;">${escapeHtml(data.title)}</div>
      <div style="width:54px;height:3px;background:${BRAND_LIME};border-radius:999px;margin:10px 0;"></div>
      ${
        data.qualifications.trim()
          ? `<div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:15px;color:#64748b;margin-bottom:7px;">${escapeHtml(data.qualifications)}</div>`
          : ''
      }
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
        ${contactLine('M', data.mobile, `tel:${normaliseTelephone(data.mobile)}`)}
        ${contactLine('E', data.email, `mailto:${data.email}`)}
      </table>
    </td>
    <td width="150" style="width:150px;padding:20px 20px 20px 10px;text-align:right;vertical-align:middle;background:#f8fafc;">
      <img src="${escapeAttr(logoSrc)}" alt="VNR Professional Accountants" width="118" style="display:block;width:118px;max-width:118px;height:auto;margin:0 0 18px auto;border:0;">
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:17px;color:#475569;">
        <a href="https://${escapeAttr(data.website.replace(/^https?:\/\//, ''))}" style="color:${BRAND_BLUE};text-decoration:none;font-weight:bold;">${escapeHtml(data.website)}</a>
      </div>
      ${
        data.address.trim()
          ? `<div style="font-family:Arial,Helvetica,sans-serif;font-size:10px;line-height:14px;color:#64748b;margin-top:7px;">${escapeHtml(data.address)}</div>`
          : ''
      }
    </td>
  </tr>
</table>`;
}

function buildLedgerSignature(data: SignatureData, logoSrc: string) {
  const hasPhoto = data.includePhoto && data.photoDataUrl;
  const width = 650;
  const height = 160;
  const infoWidth = hasPhoto ? 430 : 515;

  return `
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="${width}" style="width:${width}px;height:${height}px;border-collapse:collapse;background:#ffffff;border-left:8px solid ${BRAND_BLUE};font-family:Arial,Helvetica,sans-serif;">
  <tr>
    <td width="${infoWidth}" style="width:${infoWidth}px;padding:18px 22px;vertical-align:middle;border-top:1px solid #e2e8f0;border-bottom:1px solid #e2e8f0;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;width:100%;">
        <tr>
          <td style="vertical-align:middle;">
            <div style="font-family:Georgia,'Times New Roman',serif;font-size:22px;line-height:26px;font-weight:bold;color:${SLATE_TEXT};">${escapeHtml(data.name)}</div>
            <div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:16px;font-weight:bold;color:${BRAND_BLUE};margin-top:2px;">${escapeHtml(data.title)}</div>
          </td>
          <td style="width:112px;text-align:right;vertical-align:middle;">
            <img src="${escapeAttr(logoSrc)}" alt="VNR Professional Accountants" width="104" style="display:block;width:104px;max-width:104px;height:auto;margin:0 0 0 auto;border:0;">
          </td>
        </tr>
      </table>
      <div style="width:100%;height:1px;background:#e2e8f0;margin:12px 0 9px;"></div>
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;color:#475569;">
        ${data.mobile.trim() ? `${contactIconSvg('M', BRAND_BLUE, 13)} <a href="tel:${normaliseTelephone(data.mobile)}" style="color:#475569;text-decoration:none;">${escapeHtml(data.mobile)}</a>&nbsp;&nbsp;` : ''}
        ${data.telephone.trim() ? `${contactIconSvg('T', BRAND_BLUE, 13)} <a href="tel:${normaliseTelephone(data.telephone)}" style="color:#475569;text-decoration:none;">${escapeHtml(data.telephone)}</a><br>` : ''}
        ${data.email.trim() ? `${contactIconSvg('E', BRAND_BLUE, 13)} <a href="mailto:${escapeAttr(data.email)}" style="color:${BRAND_BLUE};text-decoration:none;font-weight:bold;">${escapeHtml(data.email)}</a>&nbsp;&nbsp;` : ''}
        ${data.website.trim() ? `${contactIconSvg('W', BRAND_BLUE, 13)} <a href="https://${escapeAttr(data.website.replace(/^https?:\/\//, ''))}" style="color:#475569;text-decoration:none;">${escapeHtml(data.website)}</a>` : ''}
      </div>
      ${
        data.qualifications.trim()
          ? `<div style="font-family:Arial,Helvetica,sans-serif;font-size:10px;line-height:14px;color:#64748b;margin-top:7px;">${escapeHtml(data.qualifications)}</div>`
          : ''
      }
    </td>
    ${
      hasPhoto
        ? `<td width="105" style="width:105px;padding:16px 18px 16px 0;text-align:right;vertical-align:middle;border-top:1px solid #e2e8f0;border-bottom:1px solid #e2e8f0;">
      <img src="${escapeAttr(data.photoDataUrl)}" alt="${escapeAttr(data.name)}" width="82" height="104" style="display:block;width:82px;height:104px;object-fit:cover;border-radius:14px;border:2px solid #ffffff;margin:0 0 0 auto;">
    </td>`
        : ''
    }
  </tr>
</table>`;
}

function buildSignatureHtml(data: SignatureData, templateKey: TemplateKey, logoSrc = LOGO_URL) {
  if (templateKey === 'horizon') {
    return buildHorizonSignature(data, logoSrc);
  }

  if (templateKey === 'boardroom') {
    return buildBoardroomSignature(data, logoSrc);
  }

  return buildLedgerSignature(data, logoSrc);
}

function buildDownloadDocument(data: SignatureData, template: SignatureTemplate, logoSrc: string) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(data.name)} - ${escapeHtml(template.name)} Email Signature</title>
</head>
<body style="margin:0;padding:24px;background:#ffffff;">
${buildSignatureHtml(data, template.key, logoSrc)}
</body>
</html>`;
}

export default function EmailSignatureAdmin({ skipAuth = false, embedded = false }: EmailSignatureAdminProps) {
  const previewRef = useRef<HTMLDivElement>(null);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(skipAuth);
  const [loginError, setLoginError] = useState('');
  const [signatureData, setSignatureData] = useState<SignatureData>(defaultSignature);
  const [activeTemplate, setActiveTemplate] = useState<TemplateKey>('horizon');
  const [copiedTemplate, setCopiedTemplate] = useState<TemplateKey | null>(null);
  const [logoSrc, setLogoSrc] = useState(LOGO_URL);
  const [jpegError, setJpegError] = useState('');
  const [downloadingJpegTemplate, setDownloadingJpegTemplate] = useState<TemplateKey | null>(null);

  const activeTemplateDetails = useMemo(
    () => templates.find((template) => template.key === activeTemplate) ?? templates[0],
    [activeTemplate],
  );

  const previewHtml = useMemo(
    () => buildSignatureHtml(signatureData, activeTemplate, logoSrc),
    [signatureData, activeTemplate, logoSrc],
  );

  useEffect(() => {
    let isMounted = true;

    const embedLogo = async () => {
      try {
        const response = await fetch(LOGO_URL);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onload = () => {
          if (isMounted && typeof reader.result === 'string') {
            setLogoSrc(reader.result);
          }
        };
        reader.readAsDataURL(blob);
      } catch {
        setLogoSrc(LOGO_URL);
      }
    };

    embedLogo();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/back-office/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data?.error || 'Incorrect password.');
      }

      setIsAuthenticated(true);
      setLoginError('');
    } catch (loginError) {
      setLoginError(
        loginError instanceof Error ? loginError.message : 'Incorrect password. Please try again.',
      );
    }
  };

  const updateField = (field: keyof SignatureData, value: string | boolean) => {
    setSignatureData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handlePhotoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setSignatureData((current) => ({
          ...current,
          includePhoto: true,
          photoDataUrl: reader.result as string,
        }));
      }
    };
    reader.readAsDataURL(file);
  };

  const downloadSignature = (template: SignatureTemplate) => {
    const documentHtml = buildDownloadDocument(signatureData, template, logoSrc);
    const blob = new Blob([documentHtml], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = signatureFileName(signatureData, template);
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  const downloadJpegSignature = async (template: SignatureTemplate) => {
    setJpegError('');
    setDownloadingJpegTemplate(template.key);

    let temporaryContainer: HTMLDivElement | null = null;

    try {
      const html2canvas = (await import('html2canvas')).default;
      let signatureElement = previewRef.current?.firstElementChild as HTMLElement | null;

      if (template.key !== activeTemplate || !signatureElement) {
        temporaryContainer = document.createElement('div');
        temporaryContainer.style.position = 'fixed';
        temporaryContainer.style.left = '-10000px';
        temporaryContainer.style.top = '0';
        temporaryContainer.style.width = 'max-content';
        temporaryContainer.style.background = '#ffffff';
        temporaryContainer.innerHTML = buildSignatureHtml(signatureData, template.key, logoSrc);
        document.body.appendChild(temporaryContainer);
        signatureElement = temporaryContainer.firstElementChild as HTMLElement | null;
      }

      if (!signatureElement) {
        throw new Error('Signature preview is not ready yet.');
      }

      await waitForSignatureAssets(signatureElement);

      const canvas = await html2canvas(signatureElement, {
        backgroundColor: '#ffffff',
        scale: Math.min(window.devicePixelRatio || 2, 3),
        useCORS: true,
        logging: false,
      });

      const blob = await new Promise<Blob | null>((resolve) => {
        canvas.toBlob(resolve, 'image/jpeg', 0.96);
      });

      if (!blob) {
        throw new Error('Could not create the JPEG file.');
      }

      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = signatureJpegFileName(signatureData, template);
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch {
      setJpegError('JPEG download failed. Please try again after the preview has fully loaded.');
    } finally {
      temporaryContainer?.remove();
      setDownloadingJpegTemplate(null);
    }
  };

  const copySignatureHtml = async (template: SignatureTemplate) => {
    const documentHtml = buildDownloadDocument(signatureData, template, logoSrc);
    await navigator.clipboard.writeText(documentHtml);
    setCopiedTemplate(template.key);
    window.setTimeout(() => setCopiedTemplate(null), 1800);
  };

  if (!skipAuth && !isAuthenticated) {
    return (
      <section className="min-h-[calc(100vh-5rem)] bg-surface-light px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-xl">
          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
            <Lock className="h-7 w-7" />
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">VNR Back Office</p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-text-primary">Email signature admin</h1>
          <p className="mt-3 text-sm leading-6 text-text-secondary">
            Sign in to create staff email signatures, upload optional photos, and download the final HTML
            signature files.
          </p>

          <form onSubmit={handleLogin} className="mt-8 space-y-4">
            <div>
              <label htmlFor="signature-password" className="text-sm font-semibold text-text-primary">
                Password
              </label>
              <input
                id="signature-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-text-primary shadow-sm outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                placeholder="Enter back office password"
              />
            </div>
            {loginError ? <p className="text-sm font-medium text-red-600">{loginError}</p> : null}
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-xl bg-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-blue-light"
            >
              Login
            </button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className={embedded ? '' : 'bg-surface-light'}>
      {!embedded && (
      <div className="bg-surface-dark px-4 py-14 text-text-on-dark sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-teal">
            VNR Back Office
          </p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Email signature generator
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-text-on-dark/80">
                Edit staff details once, choose whether to include a personal photo, then download one of
                three corporate VNR signature layouts as HTML or JPEG at the correct fixed display size.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-6 text-text-on-dark/80">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-teal" />
                <p>
                  HTML files remain email-service friendly, while JPEG downloads are captured from the
                  rendered preview so the layout matches what you see on screen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}

      <div className="container mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[380px_1fr]">
        <aside className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                <UserRound className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-serif text-xl font-bold text-text-primary">Staff details</h2>
                <p className="text-sm text-text-secondary">These fields update all templates.</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <FormInput
                label="Full name"
                value={signatureData.name}
                onChange={(value) => updateField('name', value)}
              />
              <FormInput
                label="Title / position"
                value={signatureData.title}
                onChange={(value) => updateField('title', value)}
              />
              <FormInput
                label="Qualifications"
                value={signatureData.qualifications}
                onChange={(value) => updateField('qualifications', value)}
              />
              <FormInput
                label="Email address"
                type="email"
                value={signatureData.email}
                onChange={(value) => updateField('email', value)}
              />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <FormInput
                  label="Mobile"
                  value={signatureData.mobile}
                  onChange={(value) => updateField('mobile', value)}
                />
                <FormInput
                  label="Office telephone"
                  value={signatureData.telephone}
                  onChange={(value) => updateField('telephone', value)}
                />
              </div>
              <FormInput
                label="Website"
                value={signatureData.website}
                onChange={(value) => updateField('website', value)}
              />
              <FormInput
                label="Location / service line"
                value={signatureData.address}
                onChange={(value) => updateField('address', value)}
              />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="font-serif text-xl font-bold text-text-primary">Staff photo</h2>
                <p className="mt-1 text-sm text-text-secondary">Switch off when someone prefers no image.</p>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  checked={signatureData.includePhoto}
                  onChange={(event) => updateField('includePhoto', event.target.checked)}
                  className="peer sr-only"
                />
                <span className="h-7 w-12 rounded-full bg-slate-300 transition peer-checked:bg-brand-blue" />
                <span className="absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition peer-checked:translate-x-5" />
              </label>
            </div>

            {signatureData.includePhoto ? (
              <div className="mt-5 space-y-4">
                <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-5 py-6 text-center transition hover:border-brand-blue hover:bg-brand-blue/5">
                  <Upload className="h-7 w-7 text-brand-blue" />
                  <span className="mt-3 text-sm font-semibold text-text-primary">Upload staff image</span>
                  <span className="mt-1 text-xs text-text-secondary">JPG or PNG works best, square crop preferred.</span>
                  <input type="file" accept="image/*" onChange={handlePhotoUpload} className="sr-only" />
                </label>
                <button
                  type="button"
                  onClick={() => updateField('photoDataUrl', '')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-text-secondary transition hover:text-brand-blue"
                >
                  <ImageOff className="h-4 w-4" />
                  Remove uploaded image
                </button>
              </div>
            ) : (
              <div className="mt-5 rounded-2xl bg-slate-50 p-5 text-sm leading-6 text-text-secondary">
                The templates will automatically remove the photo area and rebalance spacing.
              </div>
            )}
          </div>
        </aside>

        <main className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="font-serif text-2xl font-bold text-text-primary">Choose a template</h2>
                <p className="mt-1 text-sm text-text-secondary">
                  Preview the exact layout before downloading the signature as HTML or JPEG.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {templates.map((template) => (
                  <button
                    key={template.key}
                    type="button"
                    onClick={() => setActiveTemplate(template.key)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      activeTemplate === template.key
                        ? 'bg-brand-blue text-white shadow-md'
                        : 'bg-slate-100 text-text-secondary hover:bg-brand-blue/10 hover:text-brand-blue'
                    }`}
                  >
                    {template.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-teal/20 text-brand-blue">
                  <Eye className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-text-primary">{activeTemplateDetails.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-text-secondary">{activeTemplateDetails.description}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-blue">
                    Fixed size: {activeTemplateDetails.size}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => copySignatureHtml(activeTemplateDetails)}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-text-primary transition hover:border-brand-blue hover:text-brand-blue"
                >
                  <Copy className="h-4 w-4" />
                  {copiedTemplate === activeTemplateDetails.key ? 'Copied' : 'Copy HTML'}
                </button>
                <button
                  type="button"
                  onClick={() => downloadSignature(activeTemplateDetails)}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-brand-blue-light"
                >
                  <Download className="h-4 w-4" />
                  Download HTML
                </button>
                <button
                  type="button"
                  onClick={() => downloadJpegSignature(activeTemplateDetails)}
                  disabled={downloadingJpegTemplate === activeTemplateDetails.key}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-brand-blue disabled:cursor-wait disabled:opacity-70"
                >
                  <Download className="h-4 w-4" />
                  {downloadingJpegTemplate === activeTemplateDetails.key ? 'Preparing JPEG' : 'Download JPEG'}
                </button>
              </div>
            </div>

            {jpegError ? <p className="mt-4 text-sm font-semibold text-red-600">{jpegError}</p> : null}

            <div className="mt-6 overflow-x-auto rounded-2xl bg-slate-100 p-6">
              <div ref={previewRef} className="min-w-max" dangerouslySetInnerHTML={{ __html: previewHtml }} />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {templates.map((template) => (
              <div key={template.key} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-text-primary">{template.name}</h3>
                <p className="mt-2 text-sm leading-6 text-text-secondary">{template.description}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-blue">
                  {template.size}
                </p>
                <div className="mt-5 grid gap-2">
                  <button
                    type="button"
                    onClick={() => downloadSignature(template)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-blue-light"
                  >
                    <Download className="h-4 w-4" />
                    Download HTML
                  </button>
                  <button
                    type="button"
                    onClick={() => downloadJpegSignature(template)}
                    disabled={downloadingJpegTemplate === template.key}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-blue disabled:cursor-wait disabled:opacity-70"
                  >
                    <Download className="h-4 w-4" />
                    {downloadingJpegTemplate === template.key ? 'Preparing JPEG' : 'Download JPEG'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-brand-blue/20 bg-brand-blue/5 p-5 text-sm leading-6 text-text-secondary">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-blue" />
              <p>
                For best HTML results, open the downloaded file in a browser, select the rendered
                signature, copy it, and paste it into the email service signature editor. JPEG downloads
                are generated directly from the rendered preview.
              </p>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

function FormInput({
  label,
  value,
  onChange,
  type = 'text',
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-text-primary">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-text-primary shadow-sm outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
      />
    </label>
  );
}
