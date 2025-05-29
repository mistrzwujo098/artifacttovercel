"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, CheckCircle, Star, Mail, Phone, Calendar } from 'lucide-react';

// Main component
const MathTutorLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    privacyConsent: false
  });
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission to a server
    console.log('Form submitted:', formData);
    alert('Dziękuję za wiadomość! Odpowiem najszybciej jak to możliwe.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      privacyConsent: false
    });
  };
  
  // Handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };
  
  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'benefits', 'offer', 'testimonials', 'process', 'about', 'pricing', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50 text-gray-800 font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">W</div>
              <span className="text-lg font-semibold">Weronika Ciesielska-Czaczyk</span>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'hero', label: 'Strona główna' },
                { id: 'benefits', label: 'Korzyści' },
                { id: 'offer', label: 'Oferta' },
                { id: 'testimonials', label: 'Opinie' },
                { id: 'process', label: 'Jak zacząć' },
                { id: 'about', label: 'O mnie' },
                { id: 'pricing', label: 'Cennik' },
                { id: 'contact', label: 'Kontakt' }
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id 
                      ? 'text-purple-600 border-b-2 border-purple-600' 
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors"
              >
                Umów konsultację
              </button>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-600" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white p-4 shadow-md">
            <div className="flex flex-col space-y-4">
              {[
                { id: 'hero', label: 'Strona główna' },
                { id: 'benefits', label: 'Korzyści' },
                { id: 'offer', label: 'Oferta' },
                { id: 'testimonials', label: 'Opinie' },
                { id: 'process', label: 'Jak zacząć' },
                { id: 'about', label: 'O mnie' },
                { id: 'pricing', label: 'Cennik' },
                { id: 'contact', label: 'Kontakt' }
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium p-2 rounded transition-colors ${
                    activeSection === item.id 
                      ? 'bg-purple-50 text-purple-600' 
                      : 'text-gray-600 hover:bg-purple-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors"
              >
                Umów konsultację
              </button>
            </div>
          </div>
        )}
      </nav>
      
      {/* Hero Section */}
      <section id="hero" className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-purple-900">
                Odkryj swój ukryty talent matematyczny
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-700 mb-6">
                Tajny system, który przemienia zmagających się uczniów w mistrzów egzaminów
              </h2>
              <p className="text-gray-600 mb-8">
                Przekonaj się, jak moja sprawdzona metoda pomogła ponad 127 uczniom osiągnąć wyniki 90%+ na egzaminie ósmoklasisty i maturze rozszerzonej – nawet jeśli wcześniej mieli trudności z matematyką.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Odblokuj swój potencjał
                </button>
                <button 
                  onClick={() => scrollToSection('offer')}
                  className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors"
                >
                  Zobacz ofertę
                </button>
              </div>
              
              <div className="mt-8 flex items-center text-sm text-gray-500">
                <Star className="text-yellow-400 mr-2 h-5 w-5" fill="currentColor" />
                <span>Zaufało mi ponad <b>200+</b> uczniów i ich rodziców</span>
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-12">
              <div className="aspect-video bg-purple-100 rounded-xl shadow-md overflow-hidden relative border-4 border-white">
                {/* Placeholder for tutor image or video */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-purple-300 font-light text-lg">Twoje zdjęcie lub krótkie video</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Problem Agitation Section */}
      <section className="py-16 bg-gradient-to-r from-purple-700 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Czy problemy z matematyką nie dają Ci spać?
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Zamierasz przed trudnymi równaniami? Strach przed porażką na zbliżającym się egzaminie kradnie Twoją pewność siebie i zagraża Twojej przyszłości? <span className="font-bold">Nie jesteś sam/sama.</span>
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              Każdego dnia utalentowani uczniowie tracą szanse na wymarzone licea i studia z jednego powodu: nigdy nie odkryli, jak naprawdę opanować matematykę. Tradycyjny system ich zawiódł – ale nie musi zawieść Ciebie.
            </p>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-800">
              Co wyróżnia moje korepetycje?
            </h2>
            <p className="text-xl text-gray-600">
              Wprowadzam rewolucyjne podejście do nauki matematyki, które współpracuje z Twoim mózgiem zamiast działać wbrew niemu. To nie chodzi o zapamiętywanie wzorów – to zrozumienie ukrytych wzorców, które czynią matematykę intuicyjną, a nawet przyjemną.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Indywidualne podejście do każdego ucznia",
                description: "Każdy uczeń ma inny styl uczenia się i różne obszary trudności. Mój system dostosowuje się do Twojego indywidualnego profilu matematycznego.",
                icon: "🎯"
              },
              {
                title: "Sprawdzona metodologia nauczania",
                description: "Wykorzystuję techniki oparte na neurodydaktyce, które pomagają zrozumieć matematykę, a nie tylko zapamiętać wzory i procedury.",
                icon: "🧠"
              },
              {
                title: "Pewność na egzaminie",
                description: "Nie tylko uczę matematyki – budujemy pewność siebie, która jest kluczowa podczas egzaminów. Praca z psychologią daje widoczne efekty.",
                icon: "💪"
              },
              {
                title: "Materiały dydaktyczne w cenie",
                description: "Otrzymasz dostęp do moich autorskich materiałów, które zostały przetestowane przez setki uczniów i przyniosły spektakularne wyniki.",
                icon: "📚"
              },
              {
                title: "Platforma online bez barier",
                description: "Wygodne, interaktywne lekcje na profesjonalnej platformie edukacyjnej, która sprawia, że nauka online jest równie efektywna jak stacjonarna.",
                icon: "💻"
              },
              {
                title: "Dostępność i wsparcie",
                description: "Możliwość konsultacji między zajęciami w przypadku pilnych pytań. Nigdy nie zostaniesz sam z problemem matematycznym.",
                icon: "📞"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-purple-100">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-purple-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button 
              onClick={() => scrollToSection('process')}
              className="bg-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-purple-700 transition-colors shadow-md text-lg"
            >
              Odkryj moją metodę nauczania
            </button>
          </div>
        </div>
      </section>
      
      {/* Offer Section */}
      <section id="offer" className="py-16 md:py-24 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-800">
              Specjalizacje
            </h2>
            <p className="text-xl text-gray-600">
              Wyspecjalizowałam się w przygotowaniu do najważniejszych egzaminów matematycznych 
              na kluczowych etapach edukacji.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Egzamin Ósmoklasisty",
                description: "Wyjątkowe przygotowanie dla uczniów 8 klasy, którzy chcą dostać się do wymarzonego liceum. Program zawiera kompleksowe powtórzenie materiału, rozwiązywanie arkuszy, strategie egzaminacyjne i techniki radzenia sobie ze stresem.",
                features: [
                  "Pełne omówienie wszystkich tematów egzaminacyjnych",
                  "Regularne testy sprawdzające postępy",
                  "Techniki szybkiego rozwiązywania zadań",
                  "Strategie zarządzania czasem na egzaminie"
                ],
                cta: "Przygotuj się do egzaminu ósmoklasisty"
              },
              {
                title: "Matura Rozszerzona",
                description: "Zaawansowany program dla licealistów, którzy celują w kierunki ścisłe na najlepszych uczelniach. Dogłębne omówienie zagadnień maturalnych, mnóstwo zadań i arkuszy CKE, strategie rozwiązywania najtrudniejszych zadań.",
                features: [
                  "Zaawansowane strategie rozwiązywania zadań otwartych",
                  "Przygotowanie do zadań na dowodzenie",
                  "Systematyczne utrwalanie materiału",
                  "Indywidualny plan powtórkowy"
                ],
                cta: "Przygotuj się do matury rozszerzonej"
              }
            ].map((offer, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-purple-100">
                <div className="h-32 bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">{offer.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{offer.description}</p>
                  <ul className="space-y-2 mb-8">
                    {offer.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => scrollToSection('pricing')}
                    className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                  >
                    {offer.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-white rounded-xl shadow-md border border-purple-100">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-bold mb-2 text-purple-800">Potrzebujesz pomocy z bieżącym materiałem?</h3>
                <p className="text-gray-600">Oferuję również korepetycje wspierające bieżącą naukę i przygotowanie do sprawdzianów.</p>
              </div>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                Sprawdź korepetycje bieżące
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-800">
              Co mówią moi uczniowie?
            </h2>
            <p className="text-xl text-gray-600">
              Ich wyniki i doświadczenia są najlepszym dowodem skuteczności mojej metody.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Marek K.",
                type: "Uczeń 8 klasy",
                quote: "Poszedłem z 3 na 5 z matematyki w jeden semestr! Weronika pokazała mi matematykę z zupełnie innej strony. Teraz wszystko wydaje się logiczne i proste.",
                score: "Wynik egzaminu: 92%"
              },
              {
                name: "Ania S.",
                type: "Uczennica liceum",
                quote: "Myślałam, że matematyka rozszerzona to nie dla mnie. Po zajęciach z Weroniką nie tylko zdałam maturę, ale dostałam się na wymarzone studia!",
                score: "Wynik matury: 86%"
              },
              {
                name: "Tomek W.",
                type: "Uczeń 8 klasy",
                quote: "Z niecierpliwością czekałem na każde zajęcia. Dzięki nim zacząłem rozumieć matematykę i zdobyłem 96% na egzaminie. To jak ktoś wreszcie włączył światło!",
                score: "Wynik egzaminu: 96%"
              },
              {
                name: "Magda P.",
                type: "Uczennica liceum",
                quote: "Weronika ma dar tłumaczenia trudnych zagadnień w prosty sposób. Po każdych zajęciach czułam, że robię ogromny krok naprzód.",
                score: "Wynik matury: 78%"
              },
              {
                name: "Karol M.",
                type: "Uczeń liceum",
                quote: "Dzięki korepetycjom nie tylko świetnie zdałem maturę, ale też nauczyłem się systematycznej pracy i analitycznego myślenia.",
                score: "Wynik matury: 94%"
              },
              {
                name: "Ewa L.",
                parent: true,
                type: "Mama ucznia 8 klasy",
                quote: "Jako rodzic obserwowałam ogromną zmianę w podejściu mojego syna do matematyki. Z przedmiotu, którego się bał, stała się jego mocną stroną.",
                score: "Wynik egzaminu: 88%"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col border border-purple-100">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 h-5 w-5" fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 flex-grow italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.type}</p>
                    <p className="text-green-600 text-sm font-medium mt-1">{testimonial.score}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors"
            >
              Zobacz więcej opinii
            </button>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section id="process" className="py-16 md:py-24 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-800">
              Jak zacząć?
            </h2>
            <p className="text-xl text-gray-600">
              Proces rozpoczęcia współpracy jest prosty i przejrzysty.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4 md:gap-0">
            {[
              {
                step: 1,
                title: "Kontakt",
                description: "Skontaktuj się ze mną przez formularz, telefon lub e-mail. Opisz swoje potrzeby i oczekiwania.",
                icon: "📞"
              },
              {
                step: 2,
                title: "Bezpłatna konsultacja",
                description: "30-minutowa rozmowa, podczas której poznamy się, określimy Twoje cele i zaplanujemy dalszą współpracę.",
                icon: "💬"
              },
              {
                step: 3,
                title: "Pierwsze zajęcia",
                description: "Dopasowanie metod nauczania do Twoich potrzeb i ustalenie indywidualnego planu nauki.",
                icon: "📝"
              },
              {
                step: 4,
                title: "Regularne korepetycje",
                description: "Systematyczna praca nad materiałem, monitorowanie postępów i dostosowywanie strategii.",
                icon: "🚀"
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center text-2xl mb-4 z-10 shadow-md">
                    {step.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute h-0.5 bg-purple-300 w-full top-8 left-1/2 z-0"></div>
                  )}
                  <h3 className="text-xl font-bold mb-2 text-purple-800">{step.title}</h3>
                  <div className="text-3xl mb-3">{step.icon}</div>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-purple-700 transition-colors shadow-md text-lg"
            >
              Umów bezpłatną konsultację
            </button>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/5 mb-8 md:mb-0">
              <div className="aspect-square bg-purple-100 rounded-xl shadow-md overflow-hidden relative max-w-md mx-auto border-4 border-white">
                {/* Placeholder for tutor photo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-purple-300 font-light text-lg">Twoje zdjęcie</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-3/5 md:pl-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-800">
                O mnie
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Nazywam się Weronika Ciesielska-Czaczyk i od 8 lat pomagam uczniom odkrywać piękno matematyki. Łączę solidne wykształcenie matematyczne z pasją do nauczania i umiejętnością przekazywania wiedzy w sposób prosty i zrozumiały.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Co wyróżnia moją metodę od zwykłych korepetycji? Spersonalizowany plan nauki, który identyfikuje Twój unikalny styl myślenia matematycznego i wykorzystuje Twoje naturalne mocne strony. Nie uczę tylko wzorów – pomagam dostrzec wzorce i logikę, które za nimi stoją.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-purple-800">Wykształcenie</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Magister matematyki, Uniwersytet Warszawski</li>
                    <li>• Studia podyplomowe z dydaktyki</li>
                    <li>• Certyfikat nauczania matematyki online</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-purple-800">Doświadczenie</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• 8 lat korepetycji indywidualnych</li>
                    <li>• Ponad 200 przygotowanych uczniów</li>
                    <li>• Średni wzrost wyniku o 30 punktów</li>
                  </ul>
                </div>
              </div>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                Poznaj mnie lepiej
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-800">
              Cennik
            </h2>
            <p className="text-xl text-gray-600">
              Transparentne ceny bez ukrytych kosztów. Wszystkie materiały dydaktyczne w cenie.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Jednorazowe zajęcia",
                price: "150 zł",
                duration: "60 minut",
                description: "Idealne rozwiązanie, jeśli potrzebujesz pomocy w konkretnym temacie lub przed sprawdzianem.",
                features: [
                  "Konsultacja indywidualna online",
                  "Materiały do przerobionego tematu",
                  "Możliwość nagrania zajęć"
                ],
                popular: false,
                cta: "Wybierz jednorazowe zajęcia"
              },
              {
                title: "Pakiet standardowy",
                price: "550 zł",
                duration: "4 x 60 minut",
                description: "Najpopularniejszy wybór, pozwalający na systematyczną pracę i widoczne efekty.",
                features: [
                  "4 konsultacje indywidualne online",
                  "Komplet materiałów dydaktycznych",
                  "Zadania domowe z informacją zwrotną",
                  "Dostęp do dodatkowych materiałów online",
                  "Możliwość konsultacji między zajęciami"
                ],
                popular: true,
                cta: "Wybierz pakiet standardowy"
              },
              {
                title: "Pakiet intensywny",
                price: "1200 zł",
                duration: "10 x 60 minut",
                description: "Kompleksowe przygotowanie do egzaminu, dla uczniów, którzy chcą osiągnąć najlepsze wyniki.",
                features: [
                  "10 konsultacji indywidualnych online",
                  "Komplet materiałów dydaktycznych",
                  "Indywidualny plan przygotowań",
                  "Testy sprawdzające po każdym dziale",
                  "Nielimitowane konsultacje między zajęciami",
                  "Gwarancja wzrostu wyniku"
                ],
                popular: false,
                cta: "Wybierz pakiet intensywny"
              }
            ].map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-md overflow-hidden relative ${
                plan.popular ? 'ring-2 ring-purple-600 transform md:-translate-y-4' : ''
              }`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium py-1 text-center">
                    Najpopularniejszy wybór
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-purple-800">{plan.title}</h3>
                  <div className="flex items-baseline mt-4 mb-6">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-500 ml-1">/ {plan.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className={`w-full py-3 rounded-lg font-medium transition-colors ${
                      plan.popular 
                        ? 'bg-purple-600 text-white hover:bg-purple-700' 
                        : 'border border-purple-600 text-purple-600 hover:bg-purple-50'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 max-w-3xl mx-auto bg-white rounded-xl p-6 shadow-md border border-purple-100">
            <h3 className="text-xl font-bold mb-4 text-center text-purple-800">Metody płatności</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-purple-50 p-4 rounded-lg shadow-sm border border-purple-100">
                <p className="font-medium">Przelew bankowy</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg shadow-sm border border-purple-100">
                <p className="font-medium">BLIK</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg shadow-sm border border-purple-100">
                <p className="font-medium">Revolut</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg shadow-sm border border-purple-100">
                <p className="font-medium">PayPal</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-800">
              Najczęściej zadawane pytania
            </h2>
            <p className="text-xl text-gray-600">
              Odpowiedzi na pytania, które mogą Cię nurtować.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Jak wyglądają zajęcia online?",
                answer: "Zajęcia odbywają się na profesjonalnej platformie do nauki online z tablicą interaktywną, możliwością udostępniania ekranu i materiałów. Potrzebujesz tylko komputera z kamerą, mikrofonem i stabilnym łączem internetowym."
              },
              {
                question: "Czy mogę odwołać zajęcia?",
                answer: "Tak, zajęcia można odwołać lub przełożyć z minimum 24-godzinnym wyprzedzeniem bez żadnych konsekwencji. W przypadku późniejszego odwołania, zajęcia przepadają lub jest pobierana opłata manipulacyjna."
              },
              {
                question: "Jak szybko zauważę efekty?",
                answer: "Większość uczniów zauważa poprawę już po 3-4 zajęciach. Znaczącą poprawę wyników widać zwykle po około miesiącu regularnych spotkań i systematycznej pracy własnej."
              },
              {
                question: "Czy oferujesz gwarancję poprawy wyników?",
                answer: "Jestem tak pewna mojej metody, że oferuję coś, czego inni korepetytorzy nie śmią: bezpłatną konsultację, która pokaże, że potrafię rozwiązać Twoje konkretne problemy matematyczne, zanim zdecydujesz się na pierwszą lekcję. Dodatkowo, przy pakiecie intensywnym, gwarantuję poprawę wyników."
              },
              {
                question: "Czy prowadzisz zajęcia grupowe?",
                answer: "Obecnie specjalizuję się w zajęciach indywidualnych, które są najbardziej efektywne. W wyjątkowych przypadkach mogę zorganizować zajęcia dla 2-3 osób na podobnym poziomie zaawansowania."
              },
              {
                question: "Jak płacić za zajęcia?",
                answer: "Płatności za pojedyncze zajęcia dokonujesz przed lub po lekcji. W przypadku pakietów, płatność jest z góry za cały pakiet, co gwarantuje rezerwację terminów."
              }
            ].map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-700 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Gotowy na przemianę swoich umiejętności matematycznych?
            </h2>
            <p className="text-xl mb-8">
              Nie pozwól, aby kolejny dzień upłynął na zmaganiu się z zagadnieniami, które możesz opanować. Zrób pierwszy krok w stronę matematycznej pewności siebie już dziś.
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg text-lg"
            >
              Umów bezpłatną konsultację
            </button>
            <p className="mt-6 text-purple-200">
              Twoje przyszłe ja podziękuje Ci za decyzję, którą podejmiesz dzisiaj.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-800">
                  Kontakt
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Chętnie odpowiem na Twoje pytania. Wypełnij formularz lub skontaktuj się ze mną bezpośrednio.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Mail className="text-purple-600 mr-4 h-6 w-6" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">kontakt@weronika-matematyka.pl</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-purple-600 mr-4 h-6 w-6" />
                    <div>
                      <p className="font-medium">Telefon</p>
                      <p className="text-gray-600">+48 500 600 700</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="text-purple-600 mr-4 h-6 w-6" />
                    <div>
                      <p className="font-medium">Godziny kontaktu</p>
                      <p className="text-gray-600">Pon-Pt: 10:00-20:00, Sb: 10:00-15:00</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-800">Social Media</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-200 transition-colors">
                      <span className="font-bold">f</span>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-200 transition-colors">
                      <span className="font-bold">in</span>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-200 transition-colors">
                      <span className="font-bold">ig</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 border border-purple-100">
                <h3 className="text-xl font-bold mb-6 text-purple-800">Wyślij wiadomość</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Imię i nazwisko</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-purple-600 outline-none transition-colors" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-purple-600 outline-none transition-colors" 
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon (opcjonalnie)</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-purple-600 outline-none transition-colors" 
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Wiadomość</label>
                    <textarea 
                      rows="4" 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-purple-600 outline-none transition-colors"
                    ></textarea>
                  </div>
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="privacyConsent" 
                      name="privacyConsent"
                      checked={formData.privacyConsent}
                      onChange={handleInputChange}
                      className="mt-1 mr-2" 
                    />
                    <label htmlFor="privacyConsent" className="text-sm text-gray-600">
                      Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z polityką prywatności.
                    </label>
                  </div>
                  <button 
                    onClick={handleSubmit}
                    className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                  >
                    Wyślij wiadomość
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-purple-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">W</div>
                <span className="text-lg font-semibold">Weronika Ciesielska-Czaczyk</span>
              </div>
              <p className="text-purple-200">
                Profesjonalne korepetycje z matematyki dla uczniów szkół podstawowych i liceów.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Szybkie linki</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('hero')} className="text-purple-200 hover:text-white transition-colors">Strona główna</button></li>
                <li><button onClick={() => scrollToSection('offer')} className="text-purple-200 hover:text-white transition-colors">Oferta</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-purple-200 hover:text-white transition-colors">O mnie</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="text-purple-200 hover:text-white transition-colors">Cennik</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-purple-200 hover:text-white transition-colors">Kontakt</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Specjalizacje</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('offer')} className="text-purple-200 hover:text-white transition-colors">Egzamin ósmoklasisty</button></li>
                <li><button onClick={() => scrollToSection('offer')} className="text-purple-200 hover:text-white transition-colors">Matura podstawowa</button></li>
                <li><button onClick={() => scrollToSection('offer')} className="text-purple-200 hover:text-white transition-colors">Matura rozszerzona</button></li>
                <li><button onClick={() => scrollToSection('offer')} className="text-purple-200 hover:text-white transition-colors">Korepetycje bieżące</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-purple-200">
                <li>Email: kontakt@weronika-matematyka.pl</li>
                <li>Telefon: +48 500 600 700</li>
                <li>Godziny: Pon-Pt: 10:00-20:00</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-purple-800 text-center text-purple-300 text-sm">
            <p>© {new Date().getFullYear()} Weronika Ciesielska-Czaczyk. Wszelkie prawa zastrzeżone.</p>
            <div className="mt-2 space-x-4">
              <a href="#" className="hover:text-white transition-colors">Polityka prywatności</a>
              <a href="#" className="hover:text-white transition-colors">Regulamin</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// FAQ Item Component
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-purple-100 rounded-lg overflow-hidden shadow-sm">
      <button 
        className="w-full p-4 text-left font-medium flex justify-between items-center hover:bg-purple-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="p-4 bg-purple-50 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};

export default MathTutorLandingPage;
