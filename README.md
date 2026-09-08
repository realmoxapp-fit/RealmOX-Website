# RealmOX Public Website

This folder is a static public website intended for GitHub Pages. It contains:

- About / app information
- Privacy Policy
- Terms & Conditions
- Official ₹10 Referral Programme Rules
- Help & Support information
- Public account deletion page

## GitHub Pages

Create a **separate GitHub repository** for this website. Do not push the main RealmOX app repository unless you explicitly choose to do so.

Upload the contents of this `website` folder to the website repository and enable **GitHub Pages** from the repository's Pages settings.

After GitHub gives you the Pages URL, configure the Cloud Run backend CORS allow-list with that exact origin, for example:

`CORS_ALLOWED_ORIGINS=https://YOUR_GITHUB_USERNAME.github.io`

If the site is hosted under a project path, the browser Origin is still normally the host origin (for example `https://YOUR_GITHUB_USERNAME.github.io`), not the path.

The public deletion page calls the existing RealmOX `/login` and `/delete-account` endpoints. Therefore the website origin must be allowed by the backend CORS configuration.

## Before publishing

1. Confirm the public website URL.
2. Configure `CORS_ALLOWED_ORIGINS` on Cloud Run to include that origin.
3. Test the Delete Account page with a test RealmOX account.
4. Verify account deletion removes the intended Firebase/Firestore/application data.
5. Add the final public Privacy Policy URL to Google Play Console.
6. Add the public Delete Account URL to the Google Play Console Data deletion section.
7. Complete the Play Console Data safety form so it exactly matches the final app and policy disclosures.
8. Confirm the developer/operator name used on the Play listing is represented accurately in the legal pages.
