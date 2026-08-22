# aylas.me

Ayla's personal website, hosted with GitHub Pages at [aylas.me](https://aylas.me).

## Local preview

This is a static site with no build step. Open `index.html` in a browser, or run a small local web server from the repository folder.

## Publishing

GitHub Pages publishes from the `main` branch at the repository root. The `CNAME` file configures `aylas.me` as the primary custom domain.

DNS for `aylas.me` should point to GitHub Pages:

- Apex `A` records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `www` CNAME: `brocksimon81.github.io`

The separate domain `aylasimon.me` should use the domain registrar's URL-forwarding feature (or a redirect rule at the DNS/edge provider) to issue a permanent redirect to `https://aylas.me`.

## Collaboration

After Ayla has a GitHub account, add her under **Repository settings → Collaborators → Add people** with the **Write** role. Brock remains the repository owner/admin.

## Privacy

Keep personal contact details, school information, schedules, and precise location out of this public repository and website.
