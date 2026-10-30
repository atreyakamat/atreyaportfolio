# Writing on blog.atreyakamat.dev

Posts are markdown files in `content/posts/`. Add one by hand, or use the editor
at <https://blog.atreyakamat.dev/admin/>.

## Front matter

| Field | Required | Notes |
| --- | --- | --- |
| `title` | yes | Under 60 characters. |
| `slug` | yes | Lowercase, hyphenated. Becomes `blog.atreyakamat.dev/<slug>/`. Never change it after publishing. |
| `date` | yes | `YYYY-MM-DD`. |
| `category` | yes | `build-log`, `goa-business`, `tools` or `notes`. |
| `description` | no | 120-155 characters. Shown under the title, in Google and in link previews. |
| `updated` | no | `YYYY-MM-DD`, for real updates. |
| `featured` | no | `true` pins it to the big card on the homepage. |
| `tags` | no | 2-4 lowercase words. |
| `service` | no | Adds a hire-me box linking to a service page on atreyakamat.dev. |
| `cover`, `coverAlt` | no | 1200x630. Also used as the share image. |
| `draft` | no | `true` keeps it out of the build entirely. |
| `faq` | no | List of `q`/`a`. Adds a Questions section and FAQ rich results. |

Use `## ` headings in the body: they build the contents list on the right.

## One-time login setup

The editor signs in with GitHub through Netlify's OAuth provider. Until this is
done, `/admin` loads but the login button fails.

1. **GitHub → Settings → Developer settings → OAuth Apps → New OAuth App.**
   - Application name: `blog.atreyakamat.dev CMS`
   - Homepage URL: `https://blog.atreyakamat.dev`
   - Authorization callback URL: `https://api.netlify.com/auth/done`
   - Register, then **Generate a new client secret**. Copy the Client ID and the secret.
2. **Netlify → the blog site → Project configuration → Access & security →
   OAuth → Install provider → GitHub.** Paste the Client ID and secret, save.
3. Open <https://blog.atreyakamat.dev/admin/>, click **Login with GitHub**, and
   authorise. You only do this once per browser.

Because `publish_mode: editorial_workflow` is on, a new post becomes a pull
request while it is in draft, and only lands on `main` when you hit **Publish**.
Netlify then rebuilds the site, which takes about a minute.
