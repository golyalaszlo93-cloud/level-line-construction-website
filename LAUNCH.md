# LevelLine Construction LLC Launch

## Live Site

- GitHub repo: https://github.com/golyalaszlo93-cloud/level-line-construction-website
- Temporary live URL: https://golyalaszlo93-cloud.github.io/level-line-construction-website/
- Intended custom domain: levellinecarpentry.com
- GitHub Pages custom domain is already configured with CNAME: levellinecarpentry.com

## Domain Purchase

Buy/register:

- levellinecarpentry.com

Recommended DNS host:

- Cloudflare DNS, or the registrar DNS panel if using Namecheap/GoDaddy.

## DNS Records For GitHub Pages

For apex/root domain levellinecarpentry.com:

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

## Email

Recommended business email:

- info@levellinecarpentry.com
- estimates@levellinecarpentry.com

Google Workspace MX records:

- MX  @  1   ASPMX.L.GOOGLE.COM
- MX  @  5   ALT1.ASPMX.L.GOOGLE.COM
- MX  @  5   ALT2.ASPMX.L.GOOGLE.COM
- MX  @  10  ALT3.ASPMX.L.GOOGLE.COM
- MX  @  10  ALT4.ASPMX.L.GOOGLE.COM

SPF:

- TXT  @  v=spf1 include:_spf.google.com ~all

DKIM and DMARC should be added after Google Workspace generates the DKIM key.
