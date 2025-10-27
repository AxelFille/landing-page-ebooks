'use client';

import { 
  Syringe, 
  Heart, 
  Calculator, 
  CheckCircle, 
  Award, 
  Clock, 
  Shield, 
  Users,
  Star,
  Instagram,
  Mail,
  Phone
} from 'lucide-react';

export default function LandingPage() {
  const scrollToEbooks = () => {
    const ebooksSection = document.getElementById('ebooks-section');
    if (ebooksSection) {
      ebooksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* SEÇÃO 1: HERO */}
      <section className="relative bg-gradient-to-br from-[#0066CC] to-[#004499] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Domine a Sedação de Pequenos Animais
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
            3 Guias Completos para Protocolos Seguros, Eficazes e Baseados em Evidências
          </p>
          <p className="text-lg mb-10 text-blue-200 max-w-3xl mx-auto">
            Conteúdo exclusivo criado por especialista com mais de 7 anos de experiência em sedação veterinária
          </p>
          <button 
            onClick={scrollToEbooks}
            className="bg-[#00AA66] hover:bg-[#008855] text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            Acessar os Ebooks Agora
          </button>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 opacity-20">
          <Syringe size={60} />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20">
          <Heart size={60} />
        </div>
      </section>

      {/* SEÇÃO 2: APRESENTAÇÃO DOS 3 EBOOKS */}
      <section id="ebooks-section" className="py-20 px-4 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#333333] mb-16">
            Seus 3 Guias Essenciais
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* CARD 1 - Guia da Sedação */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="bg-[#0066CC] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Syringe className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#333333] mb-4 text-center">
                Guia Completo da Sedação
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                Aprenda os protocolos mais eficazes de sedação para pequenos animais, incluindo indicações, contraindicações e monitoramento.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="text-[#00AA66] mr-3" size={20} />
                  <span className="text-gray-700">Protocolos passo a passo</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-[#00AA66] mr-3" size={20} />
                  <span className="text-gray-700">Indicações e contraindicações</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-[#00AA66] mr-3" size={20} />
                  <span className="text-gray-700">Monitoramento seguro</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-[#00AA66] mr-3" size={20} />
                  <span className="text-gray-700">Casos práticos</span>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-2xl font-bold text-[#0066CC] mb-4">R$ 9,90</p>
                <a href="https://pay.kiwify.com.br/hctZJfZ" className="w-full bg-[#0066CC] hover:bg-[#0052A3] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 inline-block text-center">
                  Comprar Agora
                </a>
              </div>
            </div>

            {/* CARD 2 - Sedoanalgesia */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="bg-[#00AA66] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#333333] mb-4 text-center">
                Sedoanalgesia: Conforto e Segurança
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                Domine a combinação de sedativos e analgésicos para procedimentos seguros e confortáveis em pequenos animais.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="text-[#00AA66] mr-3" size={20} />
                  <span className="text-gray-700">Combinações eficazes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-[#00AA66] mr-3" size={20} />
                  <span className="text-gray-700">Manejo da dor</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-[#00AA66] mr-3" size={20} />
                  <span className="text-gray-700">Recuperação rápida</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-[#00AA66] mr-3" size={20} />
                  <span className="text-gray-700">Protocolos personalizados</span>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-2xl font-bold text-[#00AA66] mb-4">R$ 15,90</p>
                <a href="https://pay.kiwify.com.br/tOB79FR" className="w-full bg-[#00AA66] hover:bg-[#008855] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 inline-block text-center">
                  Comprar Agora
                </a>
              </div>
            </div>

            {/* CARD 3 - Cálculos e Diluição */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="bg-[#333333] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Calculator className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#333333] mb-4 text-center">
                Cálculos e Diluição: Precisão na Prática
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                Nunca erre nos cálculos de dosagem e diluição. Tabelas, fórmulas e exemplos práticos para cada situação.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="text-[#00AA66] mr-3" size={20} />
                  <span className="text-gray-700">Tabelas prontas para usar</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-[#00AA66] mr-3" size={20} />
                  <span className="text-gray-700">Fórmulas simplificadas</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-[#00AA66] mr-3" size={20} />
                  <span className="text-gray-700">Exemplos práticos</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-[#00AA66] mr-3" size={20} />
                  <span className="text-gray-700">Conversões de unidades</span>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-2xl font-bold text-[#333333] mb-4">R$ 19,90</p>
                <a href="https://pay.kiwify.com.br/tOB79FR" className="w-full bg-[#333333] hover:bg-[#222222] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 inline-block text-center">
                  Comprar Agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: DIFERENCIAIS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#333333] mb-16">
            Por que Escolher Nossos Ebooks?
          </h2>
          
          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-[#0066CC] w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-[#333333] mb-2">Baseado em Evidências</h3>
              <p className="text-gray-600 text-sm">Conteúdo fundamentado em pesquisas científicas atuais</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#00AA66] w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-[#333333] mb-2">Criado por Especialista</h3>
              <p className="text-gray-600 text-sm">Desenvolvido por expert com mais de 7 anos de experiência</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#0066CC] w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-[#333333] mb-2">Protocolos Modernos</h3>
              <p className="text-gray-600 text-sm">Atualizado com as técnicas mais recentes</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#00AA66] w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-[#333333] mb-2">Acesso Imediato</h3>
              <p className="text-gray-600 text-sm">Disponível para download logo após a compra</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#333333] w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-[#333333] mb-2">Suporte Direto</h3>
              <p className="text-gray-600 text-sm">Tire dúvidas diretamente com o especialista</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: DEPOIMENTOS */}
      <section className="py-20 px-4 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#333333] mb-16">
            O que dizem os veterinários
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Esses ebooks transformaram minha forma de trabalhar com sedação. Os protocolos são claros e seguros. Recomendo para todo veterinário!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#0066CC] rounded-full flex items-center justify-center mr-4">
                  <Users className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-bold text-[#333333]">Dra. Maria Silva</p>
                  <p className="text-gray-500 text-sm">Veterinária - São Paulo</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "O guia de cálculos me salvou várias vezes! Agora tenho total confiança nas dosagens. Material indispensável para qualquer clínica."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#00AA66] rounded-full flex items-center justify-center mr-4">
                  <Users className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-bold text-[#333333]">Dr. João Santos</p>
                  <p className="text-gray-500 text-sm">Veterinário - Rio de Janeiro</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Conteúdo de altíssima qualidade! Minha segurança nos procedimentos de sedação aumentou significativamente. Vale cada centavo!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#333333] rounded-full flex items-center justify-center mr-4">
                  <Users className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-bold text-[#333333]">Dra. Ana Costa</p>
                  <p className="text-gray-500 text-sm">Veterinária - Belo Horizonte</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6: CHAMADA FINAL (CTA) */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#0066CC] to-[#004499] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pronto para Dominar a Sedação de Pequenos Animais?
          </h2>
          <p className="text-xl mb-10 text-blue-100">
            Acesse agora os 3 ebooks e comece a elevar sua prática clínica hoje mesmo.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <p className="text-lg mb-2">Guia da Sedação</p>
              <p className="text-2xl font-bold mb-4">R$ 9,90</p>
              <a href="https://pay.kiwify.com.br/hctZJfZ" className="bg-[#00AA66] hover:bg-[#008855] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 inline-block">
                Comprar Agora
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <p className="text-lg mb-2">Sedoanalgesia</p>
              <p className="text-2xl font-bold mb-4">R$ 15,90</p>
              <a href="https://pay.kiwify.com.br/tOB79FR" className="bg-[#00AA66] hover:bg-[#008855] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 inline-block">
                Comprar Agora
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <p className="text-lg mb-2">Cálculos e Diluição</p>
              <p className="text-2xl font-bold mb-4">R$ 19,90</p>
              <a href="https://pay.kiwify.com.br/tOB79FR" className="bg-[#00AA66] hover:bg-[#008855] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 inline-block">
                Comprar Agora
              </a>
            </div>
          </div>
          
          <div className="flex justify-center items-center gap-6 mt-8 text-blue-200">
            <div className="flex items-center">
              <Shield size={20} className="mr-2" />
              <span>Compra Segura</span>
            </div>
            <div className="flex items-center">
              <Clock size={20} className="mr-2" />
              <span>Acesso Imediato</span>
            </div>
            <div className="flex items-center">
              <CheckCircle size={20} className="mr-2" />
              <span>Garantia 7 dias</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 7: RODAPÉ (FOOTER) */}
      <footer className="bg-[#333333] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Especialista em Sedação</h3>
              <p className="text-gray-400 mb-4">
                Veterinário Especialista com mais de 7 anos de experiência
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/axel.anestvet" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="mailto:contato@especialista.com" className="text-gray-400 hover:text-white transition-colors">
                  <Mail size={24} />
                </a>
                <a href="tel:+5511999999999" className="text-gray-400 hover:text-white transition-colors">
                  <Phone size={24} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Ebooks</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Guia da Sedação</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sedoanalgesia</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cálculos e Diluição</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Garantia</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-600 pt-8 text-center text-gray-400">
            <p className="mb-2">© 2025 Especialista em Sedação. Todos os direitos reservados.</p>
            <p className="text-sm">
              Este site não substitui orientação profissional. Consulte um veterinário qualificado.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}