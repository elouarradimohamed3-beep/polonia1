import type { Metadata } from "next";
import { LegalPage } from "@/components/legal";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

const DESCRIPTION =
  "Polityka zwrotów i anulowania zamówień IPTV Polska: warunki zwrotu, procedura, terminy (14 dni) i reklamacje.";

export const metadata: Metadata = pageMetadata({
  title: "Zasady zwrotów i anulowania",
  description: DESCRIPTION,
  path: "/zasady-zwrotow-i-anulowania",
});

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Polityka Zwrotów i Anulowania Zamówień — IPTV Polski"
      path="/zasady-zwrotow-i-anulowania"
      description={DESCRIPTION}
      sections={[
        {
          title: "1. Postanowienia ogólne",
          body: (
            <p>
              Niniejsza polityka opisuje zasady zwrotów i anulowania zamówień w sklepie internetowym IPTV Polski. Przed
              dokonaniem zakupu prosimy o zapoznanie się z jej treścią. Złożenie zamówienia oznacza jej akceptację.
            </p>
          ),
        },
        {
          title: "2. Zakupy cyfrowe / Dostęp do usługi",
          body: (
            <p>
              Świadczymy cyfrowe usługi streamingowe. Po zakupie i potwierdzeniu zamówienia klient otrzymuje natychmiastowy
              dostęp do usług streamingowych, list kanałów lub subskrypcji.
            </p>
          ),
        },
        {
          title: "3. Prawo do odstąpienia od umowy / anulowanie zamówienia",
          body: (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3">Rodzaj usługi</th>
                    <th className="border border-border p-3">Anulowanie przed rozpoczęciem usługi</th>
                    <th className="border border-border p-3">Prawo do zwrotu po rozpoczęciu usługi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">Subskrypcje automatyczne</td>
                    <td className="border border-border p-3">Tak, przed udzieleniem dostępu</td>
                    <td className="border border-border p-3">Nie, prawo wygasa zgodnie z przepisami o usługach cyfrowych</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Zakupy jednorazowe</td>
                    <td className="border border-border p-3">Tak, jeśli usługa nie została aktywowana</td>
                    <td className="border border-border p-3">Nie, jeśli dostęp został udzielony i wykorzystany</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ),
        },
        {
          title: "4. Zwroty — warunki i procedura",
          body: (
            <>
              <p>
                <strong>Warunki zwrotu:</strong> zwrot przysługuje wyłącznie wtedy, gdy usługa cyfrowa nie została
                aktywowana ani wykorzystana.
              </p>
              <p>
                <strong>Procedura zwrotu:</strong>
              </p>
              <ul>
                <li>
                  Wyślij prośbę o zwrot na adres e-mail obsługi klienta wraz ze szczegółami zamówienia.
                </li>
                <li>Po zaakceptowaniu zwrot realizujemy w ciągu 14 dni.</li>
                <li>Zwrot następuje na pierwotną metodę płatności.</li>
              </ul>
            </>
          ),
        },
        {
          title: "5. Anulowanie przez IPTV Polski",
          body: (
            <p>
              Możemy anulować zamówienie w przypadku braku płatności, podejrzenia nadużyć, przyczyn regulacyjnych lub
              problemów technicznych. Klient zostanie o tym powiadomiony i otrzyma zwrot środków, jeśli ma to
              zastosowanie.
            </p>
          ),
        },
        {
          title: "6. Zwroty częściowe",
          body: (
            <p>
              Jeśli klient skorzystał z części usługi, w zależności od stopnia jej wykorzystania może przysługiwać zwrot
              częściowy lub zwrot może nie przysługiwać.
            </p>
          ),
        },
        {
          title: "7. Wyjątki",
          body: (
            <p>
              Wyjątki obejmują usługi w pełni zrealizowane, niezgodność urządzenia spowodowaną przez użytkownika oraz
              określone opłaty administracyjne.
            </p>
          ),
        },
        {
          title: "8. Reklamacje",
          body: (
            <p>
              Na reklamacje dotyczące usług odpowiadamy w ciągu 14 dni roboczych. Proponowane rozwiązania obejmują
              naprawę, zwrot częściowy lub rekompensatę.
            </p>
          ),
        },
        {
          title: "9. Postanowienia końcowe",
          body: (
            <p>
              Polityka może zostać zmieniona w dowolnym momencie po opublikowaniu nowej wersji. Spory podlegają prawu
              lokalnemu, a jurysdykcja należy do sądu właściwego dla siedziby IPTV Polski.
            </p>
          ),
        },
        {
          title: "Kontakt",
          body: (
            <ul>
              <li>
                E-mail:{" "}
                <a href={`mailto:${SITE.email}`} className="font-semibold text-brand underline">
                  {SITE.email}
                </a>
              </li>
              <li>Telefon / WhatsApp: {SITE.phoneDisplay}</li>
            </ul>
          ),
        },
      ]}
    />
  );
}
