# LevelLine Construction LLC Launch

## Live Site

- GitHub repo: https://github.com/golyalaszlo93-cloud/level-line-construction-website
- Temporary live URL: https://golyalaszlo93-cloud.github.io/level-line-construction-website/
- Intended custom domain: levelline-construction.com
- GitHub Pages custom domain is configured with CNAME: levelline-construction.com

## Domain

Registered domain:

- levelline-construction.com

DNS host:

- Cloudflare
- Nameservers: gracie.ns.cloudflare.com, sage.ns.cloudflare.com

## DNS Records For GitHub Pages

For apex/root domain levelline-construction.com:

- A  @  185.199.108.153
- A  @  185.199.109.153
- A  @  185.199.110.153
- A  @  185.199.111.153

Optional IPv6:

- AAAA  @  2606:50c0:8000::153
- AAAA  @  2606:50c0:8001::153
- AAAA  @  2606:50c0:8002::153
- AAAA  @  2606:50c0:8003::153

For www:

- CNAME  www  golyalaszlo93-cloud.github.io

Cloudflare notes:

- Set GitHub Pages website records to DNS only while GitHub verifies the domain. After HTTPS is issued, proxying can stay off for the simplest setup.
- Do not add any A/AAAA records other than the GitHub Pages records above for the apex/root domain.
- If Cloudflare already has parked-domain records, remove them before adding the GitHub Pages records.

## Email

Recommended business email:

- info@levelline-construction.com
- estimates@levelline-construction.com

Google Workspace MX records:

- MX  @  1   ASPMX.L.GOOGLE.COM
- MX  @  5   ALT1.ASPMX.L.GOOGLE.COM
- MX  @  5   ALT2.ASPMX.L.GOOGLE.COM
- MX  @  10  ALT3.ASPMX.L.GOOGLE.COM
- MX  @  10  ALT4.ASPMX.L.GOOGLE.COM

SPF:

- TXT  @  v=spf1 include:_spf.google.com ~all

DKIM and DMARC should be added after Google Workspace generates the DKIM key.

Cloudflare Email Routing fallback:

- If Google Workspace is not purchased yet, use Cloudflare Email Routing to forward info@levelline-construction.com to golyalaszlo993@gmail.com.
- Email Routing can receive mail only; sending as info@levelline-construction.com still needs Google Workspace, Microsoft 365, Zoho, or another mail provider.
