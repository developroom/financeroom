//global variables
var on = 0;

//function that is main engine
document.addEventListener('DOMContentLoaded',()=>{
    menuOperation();
    offerOperation();
    //factsSection();
    cookieOff();
    rodoAcept(on);
});

//function that operate menu
const menuOperation =()=>{
    let buttonMenu = document.querySelector('button.navHamburgerButton')
    buttonMenu.addEventListener('click',()=>{
        let barAnimation = document.querySelector('button.navHamburgerButton .navHamburgerButtonBarMiddle');
        let navAnimation = document.querySelector('nav.mainNav ul.navList');
        let navToggle = document.querySelector('nav.mainNav');
        barAnimation.classList.toggle('active');
        navAnimation.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
};

//function that operate toggle section
const offerOperation =()=>{
    let sectionToggle = document.querySelectorAll('section.offerSection .offerCardHolder .offerCardHolderInner');
    let paragrafToggle = document.querySelectorAll('section.offerSection .offerCardHolder .offerCardHolderInner p.offerCardHolderInnerParagraf');
    for(let i = 0;i< sectionToggle.length;i++){
        sectionToggle[i].addEventListener('click',()=>{
            paragrafToggle[i].classList.toggle('active');
            sectionToggle[i].classList.toggle('disable');
            sectionToggle[i].classList.toggle('off');
        });
    }
};

//function that destroy cookie footer
const cookieOff = ()=>{
    let button = document.querySelector('footer.mainFooter button.cookieClose');
    button.addEventListener('click',()=>{
        let footer = document.querySelector('footer.mainFooter');
        document.body.removeChild(footer);
    });
};

//fuction of rodo aceptation
const rodoAcept = (on)=>{
    if(on == 0){
        let forms = document.querySelectorAll('.formInput');
        for(let i = 0;i < forms.length; i++){
            forms[i].addEventListener('click',()=>{
                alert(`ASRoom  z siedzibą w Krzyszkowicach, adres 32-455 Krzyszkowice 590  jako administrator Państwa danych osobowych, mając na względzie dostosowanie się do nowych obowiązków w zakresie przetwarzania danych osobowych w szczególności wynikających z przepisów rozporządzenia Parlamentu Europejskiego i Rady ( UE) 2016/679 z 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE ( RODO ) przekazuje informacje dotyczące przetwarzania przez nas Państwa danych osobowych.
                Zgodnie z art. 13. Ust. 1 i ust 2 RODO, Regis Sp. z o.o. informuje, że:
                1.Administratorem pozostawionych danych osobowych jest ASRoom  z siedzibą w Krzyszkowicach, adres 32-455 Krzyszkowice 590  NIP 6831877884 . Kontakt do administratora : asala@financeroom.pl
                2.Państwa dane osobowe są lub mogą być przetwarzane na podstawie:
                 a) Wykonywanej usługi, zawartej Umowy lub w celu podjęcia działań przed jej wykonaniem lub zawarciem (art.6 ust1 lit.b RODO)
                 b) Dobrowolnej zgody pozostawionej przez Państwa za pośrednictwem stron internetowych spółki (art. 6 ust.1 lit.a RODO)
                 c) Realizacji obowiązku prawnego ciążącego na Administratorze (art. 6 ust. 1 lit. c RODO)
                 d) Prawnie usprawiedliwionego interesu Administratora (art.6 ust 1 lit. f RODO)
                3.ASRoom wskazuje, iż Inspektorem Ochrony Danych jest Joanna Sala . Do kontaktu z inspektorem służy adres e-mail : asala@financeroom.pl
                4.ASRoom informuje, iż odbiorcami danych osobowych będą podmioty realizujące usługi pocztowe i/lub kurierskie, banki realizujące płatności, ubezpieczyciele należności, marketing Administratora oraz inne podmioty uprawnione na podstawie przepisów prawa.
                5.ASRoom informuje, że dane osobowe przetwarzane będą do dnia wykonania zamówienia / rozwiązania umowy, a w celach archiwizacyjnych przechowywane będą przez okres kolejnych 6 lat.
                6.ASRoom informuje Państwa o prawie wniesienia skargi do organu nadzorczego, gdy uznacie Państwo, iż przetwarzanie przez nas danych osobowych narusza przepisy RODO lub inne przepisy dotyczące przetwarzania danych osobowych.
                7.ASRoom informuje również, że w każdej chwili przysługuje Państwu prawo dostępu do treści swoich danych osobowych, prawo do ich sprostowania, usunięcia, ograniczenia przetwarzania, prawo do przenoszenia danych, prawo sprzeciwu lub usunięcia Państwa danych ze zbioru danych osobowych ASRoom oraz prawo do niepodlegania profilowaniu. W celu realizacji powyższych uprawnień prosimy o kontakt zwrotny : asala@financeroom.pl
                Informacja o plikach cookies
                Serwis internetowy korzysta z plików cookies.Pliki „cookies” (tzw. „ciasteczka”) to niewielkie pliki tekstowe, nazywane ciasteczkami (z ang. cookie – ciastko), wysyłane przez serwis internetowy, który odwiedzamy i zapisywane na urządzeniu końcowym (komputerze, laptopie, smartfonie), z którego Użytkownik korzysta podczas przeglądania stron internetowych.Dzięki plikom „cookies” korzystanie ze stron internetowych jest łatwiejsze i przyjemniejsze a ich zawartość – teksty, zdjęcia, ankiety, sondy, ale również reklamy – jest lepiej dopasowana do oczekiwań i preferencji każdego użytkownika internetu.Użytkownik ma możliwość samodzielnego zarządzania plikami „cookies” poprzez:zaakceptowanie obsługi „cookies”, co pozwoli Ci na pełne korzystanie z opcji oferowanych przez witryny internetowe lub zarządzania plikami „cookies” na poziomie pojedynczych, wybranych przez Ciebie witryn lub określenia ustawień dla różnych typów plików „cookies”, na przykład akceptowania plików trwałych jako sesyjnych itp. lub blokowania lub usuwania plików „cookies”
                Zmiany polityki prywatności
                Administrator Danych zastrzega sobie prawo do wprowadzania zmian w polityce prywatności w każdym czasie.Wszelkie zmiany w zakresie polityki prywatności i wykorzystywania plików „cookies” przez Administratora Danych będą udostępniane na niniejszej stronie internetowej.
                
                
                `);
            });
        }
        on++;
    }
};


//function that operate section about facts -> modals
// const factsSection = ()=>{
//   let imgModal = document.querySelectorAll('section.cardSection .cardHolder .cardHolderInfo img.cardHolderInfoImage');
//   for(let i = 0; i<imgModal.length;i++){
//     imgModal[i].addEventListener('click', ()=>{
//
//     });
//   }
// };
