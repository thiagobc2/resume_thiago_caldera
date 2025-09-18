import React, { useState, useRef } from "react";
import html2pdf from "html2pdf.js";

import {
  FaUser,
  FaUserTie,
  FaSuitcase,
  FaChartPie,
  FaGlobeAmericas,
  FaFlagCheckered,
  FaBookReader,
  FaLinkedin,
  FaGithubSquare,
  FaWhatsappSquare,
  FaDownload,
} from "react-icons/fa";

import * as S from "./style";
import ItemJob from "../../components/ItemJob";
import ItemEducation from "../../components/ItemEducation";
import ListMakers from "../../components/ListMakers";
import ListRating from "../../components/ListRating";

import photoProfile from "../../assets/photoprofile.jpeg";

export default function Main() {
  const downloadButtonRef = useRef();
  const [contact] = useState({
    phone: "+55 (68) 981087475",
    linkedin: "www.linkedin.com/in/thiagobc2",
    github: "github.com/thiagobc2",
  });

  const [languages] = useState(["PORTUGUÊS (NATIVO)", "ESPANHOL (INTERMEDIÁRIO)", "INGLÊS (BÁSICO)"]);
  const [hobies] = useState([
    "CURTIR FAMÍLIA",
    "LER LIVROS",
    "VIAJAR",
    "JOGAR BOLA",
  ]);
  const [jobs] = useState([
    {
      id: 1,
      company: "VEJA STORE (PROJETO PONTUAL)",
      period: "JAN/2025 - SET/2025",
      position: "Desenvolvedor Full-Stack Sênior",
      ecosystem: "REACTJS | NEXTJS | TYPESCRIPT | NODEJS | NESTJS | PRISMA | POSTGRESQL | DOCKER | DIGITALOCEAN | GIT",
      description:
        "Desenvolvimento de um sistema completo para a gestão da cadeia produtiva socioambiental da borracha, abrangendo o cadastro detalhado de famílias produtoras e cooperativas. A plataforma realiza o monitoramento de conformidade através dos '4 Zelos' (Floresta, Borracha, Seringueira, Cooperativismo), controlando desde o desmatamento até a qualidade do produto e participação associativa. O sistema automatiza o complexo cálculo de bonificações para produtores e cooperativas com base no desempenho, status de risco e cumprimento de metas anuais. Por fim, gera relatórios e dashboards consolidados para análise de safras e suporte à tomada de decisão estratégica",
    },
    {
      id: 2,
      company: "GFT (BRADESCO)",
      period: "MAI/2024 - SET/2024",
      position: "Desenvolvedor Front-End Sênior",
      ecosystem: "ANGULAR | REACTJS | NEXTJS | TYPESCRIPT | TESTE | SCRUM",
      description:
        "Contribuí para a melhoria da experiência de outros desenvolvedores ao criar componentes reutilizáveis em diversos frameworks JavaScript, facilmente adaptáveis a diferentes temas. Essa abordagem não apenas aumentou significativamente a performance da equipe, mas também facilitou a integração e a colaboração, graças a documentações simples e claras.",
    },
    {
      id: 3,
      company: "SIS INNOV & Tech (BRADESCO)",
      period: "DEZ/2023 - MAI/2024",
      position: "Desenvolvedor Front-End Sênior",
      ecosystem: "ANGULAR | REACTJS | NEXTJS | TYPESCRIPT | TESTE | SCRUM",
      description:
        "Contribuí para a melhoria da experiência de outros desenvolvedores ao criar componentes reutilizáveis em diversos frameworks JavaScript, facilmente adaptáveis a diferentes temas. Essa abordagem não apenas aumentou significativamente a performance da equipe, mas também facilitou a integração e a colaboração, graças a documentações simples e claras.",
    },
    {
      id: 4,
      company: "ICON IT (SYNVIA)",
      period: "NOV/2022 - JUL/2023",
      position: "Desenvolvedor Front-End Sênior",
      ecosystem:
        "REACTJS | NEXTJS | TYPESCRIPT | TESTE | SCRUM | GIT | AZURE | ASANA | DOCKER",
      description:
        "Contribuí na arquitetura front-end inicial do projeto, implementando padrões de nomenclatura consistentes e utilizando técnicas sofisticadas de desenvolvimento. Minha atuação garantiu uma base sólida e escalável, facilitando a manutenção e a evolução do sistema ao longo do tempo. Além disso, promovi a adoção de melhores práticas, como modularização de código e design responsivo, o que resultou em uma experiência de usuário otimizada e uma integração mais eficiente entre as equipes.",
    },
     {
      id: 5,
      company: "ELOFY/ZUCCHETI",
      period: "JAN/2022 - NOV/2022",
      position: "Desenvolvedor Front-End Sênior",
      ecosystem:
        "ANGULARJS | REACTJS | NEXTJS | TYPESCRIPT | TESTE | SCRUM | GITFLOW | BITBUCKET | JIRA | DOCKER ",
      description:
        "Participei ativamente da transição de código legado de AngularJS para React, modernizando a base de código e melhorando a manutenibilidade do projeto. Contribuí na codificação de novas telas, o que proporcionou uma experiência mais intuitiva e agradável para os clientes. Essa mudança não apenas aumentou a performance das aplicações, mas também facilitou a integração de novas funcionalidades, alinhando o produto às expectativas atuais do mercado",
    },
    {
      id: 6,
      company: "PASQUALI SOLUTIONS (ELOFY/ZUCCHETI)",
      period: "JUL/2021 - DEZ/2022",
      position: "Desenvolvedor Front-End Sênior",
      ecosystem:
        "ANGULARJS | REACTJS | NEXTJS | TYPESCRIPT | TESTE | SCRUM | GITFLOW | BITBUCKET | JIRA | DOCKER ",
      description:
        "Participei ativamente da transição de código legado de AngularJS para React, modernizando a base de código e melhorando a manutenibilidade do projeto. Contribuí na codificação de novas telas, o que proporcionou uma experiência mais intuitiva e agradável para os clientes. Essa mudança não apenas aumentou a performance das aplicações, mas também facilitou a integração de novas funcionalidades, alinhando o produto às expectativas atuais do mercado",
    },
    {
      id: 7,
      company: "PASQUALI SOLUTIONS (ASEMBL)",
      period: "JAN/2021 - JUN/2021",
      position: "Desenvolvedor Front-End Sênior",
      ecosystem:
        "REACTJS | NEXTJS | REACT-NATIVE | TYPESCRIPT | TESTE | SCRUM | GITFLOW | BITBUCKET | JIRA | DOCKER | INTEGRAÇÃO PAYPAL",
      description:
        "Contribui para o desenvolvimento de uma plataforma inovadora de gestão de eventos, focada em oferecer uma experiência completa para os usuários. Minha atuação incluiu a criação de funcionalidades que permitiram aos organizadores gerenciar eventos de forma eficiente, desde a criação até a execução. Além disso, implementei soluções que facilitaram a interação dos participantes, como inscrições online, pagamentos integrados e comunicação em tempo real. Essa plataforma não apenas otimizou o processo de organização de eventos, mas também proporcionou uma experiência fluida e envolvente para todos os envolvidos",
    },
    {
      id: 8,
      company: "INCICLE",
      period: "JUN/2020 - DEZ/2020",
      position: "Desenvolvedor Front-End Pleno",
      ecosystem:
        "REACTJS | REACT-NATIVE | TYPESCRIPT | TESTE | SCRUM | GITFLOW | SCRUM",
      description:
        "Participei do nascimento de um projeto, onde fui responsável pela construção de toda a arquitetura front-end. Desenvolvi os entry points essenciais para a integração eficaz com o backend, garantindo uma comunicação fluida entre as camadas do sistema. Além disso, configurei ferramentas de documentação que facilitaram o onboarding da equipe e melhoraram a transparência do processo de desenvolvimento. Essa abordagem não apenas otimizou o fluxo de trabalho, mas também assegurou que as melhores práticas fossem seguidas desde o início do projeto",
    },
    {
      id: 9,
      company: "M & B MARQUES E BARBOSA (SECRETARIA DE ESTADO E MEIO AMBIENTE)",
      period: "FEV/2015 - JUN/2019",
      position: "Desenvolvedor Full-Stack",
      ecosystem:
        "ANGULARJS | WEB2PY | PYTHON | JAVASCRIPT | JQUERY | POSTGRES SQL | GIT | VIRTUAL BOX | VAGRANT",
      description:
        "Fui responsável por gerenciar toda a esteira de desenvolvimento de um software, cuidando de sua arquitetura, backend e frontend de forma independente. Contribuí para a criação de um sistema de fácil interação, que facilitou o trabalho dos funcionários ao alimentar informações de campo. Implementei um formulário digital que sincronizava com o banco de dados sempre que havia conexão com a internet, promovendo robustez e praticidade no processo de captação e lançamento de dados. Essa solução proporcionou uma economia considerável para a secretaria, reduzindo o tempo gasto em idas a campo e na inserção de informações",
    },
    {
      id: 10,
      company: "FREELANCER",
      period: "2010 - 2015",
      position: "Desenvolvedor e Técnico de Informática",
      ecosystem: "HTML | PHP | JAVASCRIPT | CSS | MYSQL",
      description:
        "Durante meu período como freelancer, trabalhei no desenvolvimento de sites personalizados e na manutenção de computadores a domicílio. Criei soluções online que atendiam às necessidades específicas de meus clientes, proporcionando uma presença digital eficaz e atraente. Além disso, realizei serviços de suporte técnico, resolvendo problemas de hardware e software diretamente nas residências dos usuários. Essa experiência não apenas aprimorou minhas habilidades técnicas, mas também fortaleceu minha capacidade de comunicação e atendimento ao cliente, garantindo satisfação e fidelização.",
    },
    {
      id: 11,
      company: "VISA TERCEIRIZAÇÃO (POLICIA FEDERAL)",
      period: "2009 - 2010",
      position: "Setor de Informática",
      ecosystem: "HTML | PHP | JAVASCRIPT | CSS | MYSQL ",
      description:
        "Durante meu tempo na Polícia Federal, gerenciei o setor de informática, onde fui responsável pelo desenvolvimento de sistemas em PHP que atendiam às necessidades operacionais da instituição. Além de liderar a criação e implementação dessas soluções, administrei a rede e cuidei de toda a infraestrutura de TI, garantindo a segurança e a eficiência dos sistemas. Essa experiência me permitiu aprimorar minhas habilidades em gerenciamento de projetos e infraestrutura, além de contribuir para a otimização dos processos internos e a melhoria na prestação de serviços da Polícia Federal.",
    },
  ]);
  const [educations] = useState([
    {
      id: 1,
      university: "UNIVERSIDADE FEDERAL DO ACRE",
      course: "PÓS GRADUAÇÃO EM TECNOLOGIA DA INFORMAÇÃO E COMUNICAÇÃO",
      period: "2016 - 2017",
    },
    {
      id: 2,
      university: "UNIVERSIDADE DO SUL DE SANTA CATARINA",
      course: "TECNÓLOGO EM WEB DESIGN E PROGRAMAÇÃO",
      period: "2009 - 2012",
    },
  ]);
  const [ecosystems] = useState([
    {
      id: 1,
      name: "ReacJs",
      rating: 4,
    },
    {
      id: 2,
      name: "NextJs",
      rating: 4,
    },
    {
      id: 3,
      name: "Typescript",
      rating: 4,
    },
    {
      id: 4,
      name: "Javascript",
      rating: 5,
    },
  ]);

  // Use o useRef para acessar o elemento que queremos converter em PDF
  const curriculoRef = useRef();

  const generatePDF = () => {
    if (downloadButtonRef.current) {
      console.log("xxxxxxxxx");
      downloadButtonRef.current.style.display = "none";
    }
    // Configurações para o PDF
    const options = {
      margin: 0.5,
      filename: "Curriculo.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    // Gera o PDF do elemento referenciado
    setTimeout(() => {
      html2pdf()
        .set(options)
        .from(curriculoRef.current)
        .save()
        .then(() => {
          // Coloque a função que você quer chamar aqui
          if (downloadButtonRef.current) {
            downloadButtonRef.current.style.display = "block";
          }
        });
    }, 500);
  };

  return (
    <S.Container>
      <S.Center ref={curriculoRef} id="curriculo">
        <S.Section1>
          <S.ImgProfile>
            <S.ContentDownload>
              <S.BtnDownload ref={downloadButtonRef} onClick={generatePDF}>
                <FaDownload />
                Baixar Curriculo em PDF
              </S.BtnDownload>
            </S.ContentDownload>
            <S.Name>THIAGO B. CALDERA</S.Name>
            <S.Position>DESENVOLVEDOR FRONTEND</S.Position>
            <img src={photoProfile} alt="" />
          </S.ImgProfile>
          <S.ContentContactMeAboutMe>
            <S.ContactMe>
              <S.ContentTitle>
                <S.CircleIcon>
                  <FaUser />
                </S.CircleIcon>
                <S.Title>CONTATO</S.Title>
              </S.ContentTitle>

              <S.ItemContact>
                <a href="https://whatsa.me/5568981087475/?t=Ol%C3%A1%20tudo%20bem!">
                  <FaWhatsappSquare style={{ color: "#00a884" }} />
                  {contact.phone}
                </a>
              </S.ItemContact>
              <S.ItemContact>
                <a
                  href="https://www.linkedin.com/in/thiagobc2/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin style={{ color: "#0a66c2" }} />
                  {contact.linkedin}
                </a>
              </S.ItemContact>
              <S.ItemContact>
                <a
                  href="https://github.com/thiagobc2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithubSquare />
                  {contact.github}
                </a>
              </S.ItemContact>
            </S.ContactMe>

            <S.Aboutme>
              <S.ContentTitle>
                <S.CircleIcon>
                  <FaUserTie />
                </S.CircleIcon>
                <S.Title>SOBRE MIM</S.Title>
              </S.ContentTitle>
              <S.Info>
                Sou um entusiasta da tecnologia com vasta experiência com
                front-end, atuei em empresas de destaque como Bradesco,
                Elofy, Synvia. Domino frameworks como React e NextJS e, onde
                quer que eu esteja, busco sempre deixar uma marca positiva,
                agregando valor com dedicação e foco em resultados
              </S.Info>
            </S.Aboutme>
          </S.ContentContactMeAboutMe>
        </S.Section1>

        <S.Section2>
          <S.ContentTitle>
            <S.CircleIcon>
              <FaBookReader />
            </S.CircleIcon>
            <S.Title>EDUCAÇÃO</S.Title>
          </S.ContentTitle>
          {educations.map((education, index) => (
            <ItemEducation key={education.id} {...education} />
          ))}
          <div style={{ pageBreakInside: 'avoid', breakInside: 'avoid' }}>
            <S.ContentTitle>
              <S.CircleIcon>
                <FaSuitcase />
              </S.CircleIcon>
              <S.Title>EXPERIÊNCIA PROFISSIONAL</S.Title>
            </S.ContentTitle>
            {jobs.length > 0 && <ItemJob key={jobs[0].id} {...jobs[0]} />}
          </div>
          {jobs.slice(1).map((job) => (
            <ItemJob key={job.id} {...job} />
          ))}
          <S.ContentTitle>
            <S.CircleIcon>
              <FaChartPie />
            </S.CircleIcon>
            <S.Title>HABILIDADES</S.Title>
          </S.ContentTitle>
          <ListRating items={ecosystems} />
          <div style={{ pageBreakInside: 'avoid', breakInside: 'avoid' }}>
            <S.ContentTitle>
              <S.CircleIcon>
                <FaGlobeAmericas />
              </S.CircleIcon>
              <S.Title>IDIOMAS</S.Title>
            </S.ContentTitle>
            <ListMakers items={languages} />
          </div>
          <S.ContentTitle>
            <S.CircleIcon>
              <FaFlagCheckered />
            </S.CircleIcon>
            <S.Title>HOBBIES</S.Title>
          </S.ContentTitle>
          <ListMakers items={hobies} />
        </S.Section2>
      </S.Center>
    </S.Container>
  );
}
