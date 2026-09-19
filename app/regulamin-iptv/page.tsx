import type { Metadata } from "next";
import { LegalPage } from "@/components/legal";
import { pageMetadata } from "@/lib/seo";
import { SITE, SITE_HOST } from "@/lib/site";

const DESCRIPTION =
  "Regulamin IPTV Polska: definicje, zasady rejestracji, subskrypcji i płatności, prawa autorskie, odpowiedzialność oraz prawo właściwe.";

export const metadata: Metadata = pageMetadata({
  title: "Regulamin IPTV – warunki korzystania",
  description: DESCRIPTION,
  path: "/regulamin-iptv",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Regulamin IPTV – Zasady i Warunki Korzystania"
      path="/regulamin-iptv"
      description={DESCRIPTION}
      updated="01.10.2025"
      intro={
        <p>
          Witamy w IPTV Polski. Niniejszy Regulamin („Regulamin”) określa zasady korzystania z naszej strony
          internetowej {SITE_HOST} („Strona”), usług, treści, produktów oraz wszelkiej komunikacji między Tobą a IPTV
          Polski. Korzystając ze Strony lub usług IPTV Polski, zgadzasz się przestrzegać niniejszego Regulaminu. Jeśli
          się z nim nie zgadzasz, prosimy o zaprzestanie korzystania ze Strony.
        </p>
      }
      sections={[
        {
          title: "1. Definicje",
          body: (
            <ul>
              <li>
                <strong>Użytkownik</strong> oznacza każdą osobę korzystającą ze Strony lub usług IPTV Polski.
              </li>
              <li>
                <strong>Treści</strong> oznaczają wszelkie informacje, teksty, materiały audio, wideo, grafiki, kod,
                oprogramowanie lub multimedia udostępniane za pośrednictwem Strony.
              </li>
              <li>
                <strong>Usługi</strong> oznaczają wszystkie usługi oferowane przez IPTV Polski, w tym streaming,
                subskrypcje, zakup produktów, obsługę klienta i pobieranie plików.
              </li>
            </ul>
          ),
        },
        {
          title: "2. Akceptacja Regulaminu",
          body: (
            <p>
              Korzystając ze Strony IPTV Polski, zobowiązujesz się przestrzegać niniejszego Regulaminu oraz obowiązujących
              przepisów prawa. Jesteś odpowiedzialny za przestrzeganie lokalnych przepisów. Korzystanie ze Strony spoza
              Polski odbywa się na Twoje własne ryzyko.
            </p>
          ),
        },
        {
          title: "3. Zmiany Regulaminu",
          body: (
            <p>
              IPTV Polski zastrzega sobie prawo do zmiany, aktualizacji lub modyfikacji Regulaminu w dowolnym momencie.
              Zaktualizowany Regulamin opublikujemy na Stronie z nową datą „Ostatniej aktualizacji”. Dalsze korzystanie ze
              Strony oznacza akceptację nowego Regulaminu.
            </p>
          ),
        },
        {
          title: "4. Wymagania wiekowe",
          body: (
            <p>
              Z usług IPTV Polski możesz korzystać, jeśli masz ukończone 18 lat (lub jesteś pełnoletni według prawa
              swojego kraju). Osoby niepełnoletnie mogą korzystać ze Strony wyłącznie za zgodą rodzica lub opiekuna.
            </p>
          ),
        },
        {
          title: "5. Konto i rejestracja",
          body: (
            <ul>
              <li>Niektóre usługi IPTV Polski mogą wymagać rejestracji lub założenia konta.</li>
              <li>
                Zobowiązujesz się podać prawdziwe, aktualne i kompletne dane oraz aktualizować je w razie zmian.
              </li>
              <li>
                Odpowiadasz za swoje dane logowania i wszystkie działania na koncie. O nieautoryzowanym użyciu lub
                naruszeniu bezpieczeństwa poinformuj nas niezwłocznie.
              </li>
            </ul>
          ),
        },
        {
          title: "6. Usługi, subskrypcje i płatności",
          body: (
            <ul>
              <li>
                IPTV Polski może oferować płatne usługi, subskrypcje lub produkty. Warunki płatności, okresy rozliczeniowe,
                odnowienia i anulowanie zostaną jasno opisane przed zakupem.
              </li>
              <li>Zobowiązujesz się do uiszczania opłat zgodnie z opisem. Płatności nie podlegają zwrotowi, o ile nie określono inaczej.</li>
              <li>IPTV Polski może zawiesić lub zakończyć świadczenie usług w razie braku płatności lub naruszenia Regulaminu.</li>
            </ul>
          ),
        },
        {
          title: "7. Treści i prawa własności intelektualnej",
          body: (
            <ul>
              <li>
                Wszelkie treści, znaki towarowe, logotypy, grafiki, oprogramowanie i powiązane materiały na Stronie
                należą do IPTV Polski lub są przez nią licencjonowane. Wszelkie prawa zastrzeżone.
              </li>
              <li>
                Bez pisemnej zgody IPTV Polski możesz przeglądać, pobierać lub drukować treści Strony wyłącznie do użytku
                osobistego i niekomercyjnego.
              </li>
              <li>
                Kopiowanie, rozpowszechnianie, modyfikowanie, tworzenie utworów zależnych lub publiczne udostępnianie
                własności intelektualnej IPTV Polski bez wyraźnej zgody jest zabronione.
              </li>
            </ul>
          ),
        },
        {
          title: "8. Zasady korzystania i działania zabronione",
          body: (
            <>
              <p>Zobowiązujesz się nie wykorzystywać IPTV Polski ani jej usług do:</p>
              <ul>
                <li>naruszania obowiązujących przepisów prawa;</li>
                <li>naruszania praw własności intelektualnej lub prywatności innych osób;</li>
                <li>rozpowszechniania wirusów, złośliwego oprogramowania lub szkodliwego kodu;</li>
                <li>wysyłania niechcianych wiadomości reklamowych (spamu);</li>
                <li>zakłócania działania Strony, serwerów lub sieci połączonych z IPTV Polski;</li>
                <li>udostępniania danych logowania osobom trzecim, tam gdzie jest to zabronione;</li>
                <li>działań nielegalnych lub nieautoryzowanych.</li>
              </ul>
            </>
          ),
        },
        {
          title: "9. Wyłączenie gwarancji",
          body: (
            <ul>
              <li>IPTV Polski udostępnia Stronę, treści i usługi w stanie „takim, w jakim są” i „w miarę dostępności”, bez jakichkolwiek gwarancji, wyraźnych lub dorozumianych.</li>
              <li>Nie gwarantujemy, że Strona lub usługi będą wolne od błędów, nieprzerwane, bezpieczne lub wolne od wirusów.</li>
              <li>IPTV Polski nie gwarantuje dokładności, kompletności, rzetelności ani aktualności treści lub usług.</li>
            </ul>
          ),
        },
        {
          title: "10. Ograniczenie odpowiedzialności",
          body: (
            <>
              <p>W maksymalnym zakresie dozwolonym prawem IPTV Polski (oraz jej przedstawiciele, pracownicy, agenci lub partnerzy) nie ponosi odpowiedzialności za:</p>
              <ul>
                <li>szkody pośrednie, przypadkowe, szczególne, karne lub następcze;</li>
                <li>utratę zysków, danych, działalności, szans, reputacji lub inne straty niematerialne;</li>
                <li>roszczenia wynikające z korzystania, niemożności korzystania lub niewłaściwego korzystania ze Strony lub usług;</li>
                <li>przerwy, opóźnienia lub awarie spowodowane przyczynami niezależnymi od nas.</li>
              </ul>
            </>
          ),
        },
        {
          title: "11. Zakończenie korzystania",
          body: (
            <ul>
              <li>IPTV Polski może w dowolnym momencie, bez powiadomienia, zawiesić lub zakończyć Twój dostęp do Strony lub usług, w tym z powodu naruszenia Regulaminu.</li>
              <li>Po zakończeniu musisz zaprzestać korzystania z usług i usunąć wszystkie pobrane lub wydrukowane materiały IPTV Polski.</li>
            </ul>
          ),
        },
        {
          title: "12. Prywatność",
          body: (
            <p>
              Korzystanie z IPTV Polski podlega naszej Polityce Prywatności, która jest włączona do niniejszego Regulaminu
              przez odniesienie. Zapoznaj się z nią, aby dowiedzieć się, jak gromadzimy, wykorzystujemy, chronimy i
              udostępniamy informacje.
            </p>
          ),
        },
        {
          title: "13. Linki do stron trzecich",
          body: (
            <p>
              Strona może zawierać linki do innych witryn lub usług, które nie są prowadzone przez IPTV Polski. Nie
              odpowiadamy za treści ani praktyki stron trzecich. Umieszczenie linku nie oznacza rekomendacji IPTV Polski.
            </p>
          ),
        },
        {
          title: "14. Prawo właściwe i rozstrzyganie sporów",
          body: (
            <ul>
              <li>Niniejszy Regulamin podlega prawu polskiemu, bez względu na zasady kolizyjne.</li>
              <li>Wszelkie spory wynikające z Regulaminu lub korzystania z IPTV Polski rozstrzygać będą sądy właściwe dla [miasto, Polska], chyba że strony uzgodnią na piśmie inaczej.</li>
            </ul>
          ),
        },
        {
          title: "15. Rozłączność postanowień",
          body: (
            <p>
              Jeżeli którekolwiek postanowienie Regulaminu zostanie uznane za nieważne, niezgodne z prawem lub
              niewykonalne, pozostałe postanowienia pozostają w pełni w mocy.
            </p>
          ),
        },
        {
          title: "16. Całość porozumienia",
          body: (
            <p>
              Niniejszy Regulamin wraz z dokumentami, do których się w nim odwołano (np. Polityką Prywatności,
              warunkami subskrypcji), stanowi całość porozumienia między Tobą a IPTV Polski w tym zakresie i zastępuje
              wszelkie wcześniejsze ustalenia, komunikaty lub propozycje.
            </p>
          ),
        },
        {
          title: "17. Kontakt",
          body: (
            <p>
              W razie pytań dotyczących Regulaminu lub praktyk IPTV Polski napisz do nas:{" "}
              <a href={`mailto:${SITE.email}`} className="font-semibold text-brand underline">
                {SITE.email}
              </a>
            </p>
          ),
        },
      ]}
    />
  );
}
