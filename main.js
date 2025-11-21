import TopicCard from "@/components/TopicCard";
import logo from "@/assets/logo.png";
import decorativeHands from "@/assets/decorative-hands.png";

const topics = [
  {
    number: 1,
    title: "POR QUE OS PROCEDIMENTOS ESTÉTICOS ESTÃO AUMENTANDO ENTRE OS JOVENS?",
  },
  {
    number: 2,
    title: "ACESSIBILIDADE E INCLUSÃO DE PESSOAS COM DEFICIÊNCIA NO BRASIL",
  },
  {
    number: 3,
    title: "PRINCIPAIS FATORES QUE INFLUENCIAM NA QUALIDADE DE VIDA E NO BEM-ESTAR DA POPULAÇÃO",
  },
  {
    number: 4,
    title: "AS MUDANÇAS CLIMÁTICAS NO BRASIL E SEUS DESAFIOS",
  },
  {
    number: 5,
    title: "AS CONSEQUÊNCIAS DO DESCARTE DE LIXO ELETRÔNICO",
  },
  {
    number: 6,
    title: "O CONSUMO DE ULTRAPROCESSADOS E SUAS CONSEQUÊNCIAS À SAÚDE",
  },
  {
    number: 7,
    title: "FATORES E EFEITOS DA DEPENDÊNCIA EM JOGOS DE APOSTAS NA WEB",
  },
  {
    number: 8,
    title: "A IMPORTÂNCIA DO TRABALHO VOLUNTÁRIO NO COMBATE ÀS DESIGUALDADES SOCIAIS",
  },
  {
    number: 9,
    title: "ADULTIZAÇÃO INFANTIL – CONSEQUÊNCIAS DA PERDA IRREPARÁVEL DA INFÂNCIA",
  },
  {
    number: 10,
    title: "CAMINHOS PARA COMBATER O ETARISMO NAS RELAÇÕES SOCIAIS",
  },
  {
    number: 11,
    title: "A IMPORTÂNCIA DA EDUCAÇÃO FINANCEIRA PARA OS JOVENS",
  },
  {
    number: 12,
    title: "DESAFIOS PARA A VALORIZAÇÃO DA CULTURA POPULAR BRASILEIRA",
  },
  {
    number: 13,
    title: "CAMINHOS PARA A UNIVERSALIZAÇÃO DO SANEAMENTO BÁSICO NO BRASIL",
  },
  {
    number: 14,
    title: "O PAPEL DO ESPORTE COMO FERRAMENTA DE TRANSFORMAÇÃO SOCIAL",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-botanical-green/5 to-transparent pointer-events-none" />
      
      {/* Decorative hands illustration */}
      <div className="absolute bottom-0 left-0 w-64 md:w-96 opacity-40 pointer-events-none">
        <img 
          src={decorativeHands} 
          alt="" 
          className="w-full h-auto"
          aria-hidden="true"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 py-12 md:py-20 relative z-10">
        {/* Header */}
        <header className="mb-16 md:mb-24">
          <div className="flex items-center gap-8 mb-12">
            <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-foreground/20 rounded-sm flex items-center justify-center flex-shrink-0 bg-background/50 backdrop-blur-sm">
              <img 
                src={logo} 
                alt="Logo" 
                className="w-12 h-12 md:w-14 md:h-14 opacity-90"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-2">
                REDAÇÕES
              </h1>
              <p className="text-sm md:text-base tracking-[0.3em] text-foreground/70 uppercase font-light">
                Encerramento do Ano Letivo
              </p>
            </div>
          </div>
        </header>

        {/* Topics Section */}
        <main>
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-light text-foreground/80 tracking-wide">
              Temas-
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl">
            {topics.map((topic) => (
              <TopicCard 
                key={topic.number} 
                number={topic.number} 
                title={topic.title} 
              />
            ))}
          </div>
        </main>

        {/* Footer spacing */}
        <div className="h-20" />
      </div>
    </div>
  );
};

export default Index;
import { Card } from "@/components/ui/card";

interface TopicCardProps {
  number: number;
  title: string;
}

const TopicCard = ({ number, title }: TopicCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-card border-none shadow-[var(--card-shadow)] hover:shadow-[var(--card-hover-shadow)] transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <div className="p-6 md:p-8">
        <div className="flex items-start gap-4">
          <span className="text-3xl md:text-4xl font-bold text-muted-foreground/30 group-hover:text-botanical-green transition-colors duration-300">
            {number}
          </span>
          <h3 className="text-sm md:text-base font-medium text-card-foreground leading-relaxed pt-2 text-balance">
            {title}
          </h3>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-botanical-green/0 to-botanical-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Card>
  );
};

export default TopicCard;
