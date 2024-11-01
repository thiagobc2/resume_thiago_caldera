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
  FaPhoneSquareAlt,
  FaDownload,
} from "react-icons/fa";

import * as S from "./style";
import ItemJob from "../../components/ItemJob";
import ItemEducation from "../../components/ItemEducation";
import ListMakers from "../../components/ListMakers";
import ListRating from "../../components/ListRating";

import photoProfile from "../../assets/photoprofile.jpeg";

export default function Main() {
  const [contact] = useState({
    phone: "+55 (68) 981087475",
    linkedin: "www.linkedin.com/in/thiagobc2",
    github: "github.com/thiagobc2",
  });

  const [languages] = useState(["PORTUGUÊS", "ESPANHOL"]);
  const [hobies] = useState([
    "CURTIR FAMÍLIA",
    "LER LIVROS",
    "VIAJAR",
    "JOGAR BOLA",
    "PESCAR",
  ]);
  const [jobs] = useState([
    {
      id: 1,
      company: "GFT (BRADESCO)",
      period: "2024",
      position: "Desenvolvedor Front-End Sênior",
      ecosystem: "ANGULAR | REACTJS | NEXTJS | TYPESCRIPT | TESTE | SCRUM",
      description:
        "Contribuí para a melhoria da experiência de outros desenvolvedores ao criar componentes reutilizáveis em diversos frameworks JavaScript, facilmente adaptáveis a diferentes temas. Essa abordagem não apenas aumentou significativamente a performance da equipe, mas também facilitou a integração e a colaboração, graças a documentações simples e claras.",
    },
    {
      id: 2,
      company: "SIS INNOV & Tech (BRADESCO)",
      period: "2023 - 2024",
      position: "Desenvolvedor Front-End Sênior",
      ecosystem: "ANGULAR | REACTJS | NEXTJS | TYPESCRIPT | TESTE | SCRUM",
      description:
        "Contribuí para a melhoria da experiência de outros desenvolvedores ao criar componentes reutilizáveis em diversos frameworks JavaScript, facilmente adaptáveis a diferentes temas. Essa abordagem não apenas aumentou significativamente a performance da equipe, mas também facilitou a integração e a colaboração, graças a documentações simples e claras.",
    },
    {
      id: 3,
      company: "ICON IT (SYNVIA)",
      period: "2022 - 2023",
      position: "Desenvolvedor Front-End Sênior",
      ecosystem:
        "REACTJS | NEXTJS | TYPESCRIPT | TESTE | SCRUM | GIT | AZURE | ASANA | DOCKER",
      description:
        "Contribuí na arquitetura front-end inicial do projeto, implementando padrões de nomenclatura consistentes e utilizando técnicas sofisticadas de desenvolvimento. Minha atuação garantiu uma base sólida e escalável, facilitando a manutenção e a evolução do sistema ao longo do tempo. Além disso, promovi a adoção de melhores práticas, como modularização de código e design responsivo, o que resultou em uma experiência de usuário otimizada e uma integração mais eficiente entre as equipes.",
    },
    {
      id: 4,
      company: "PASQUALI SOLUTIONS (ELOFY/ZUCCHETI)",
      period: "2021 - 2022",
      position: "Desenvolvedor Front-End Sênior",
      ecosystem:
        "ANGULARJS | REACTJS | NEXTJS | TYPESCRIPT | TESTE | SCRUM | GITFLOW | BITBUCKET | JIRA | DOCKER ",
      description:
        "Participei ativamente da transição de código legado de AngularJS para React, modernizando a base de código e melhorando a manutenibilidade do projeto. Contribuí na codificação de novas telas, o que proporcionou uma experiência mais intuitiva e agradável para os clientes. Essa mudança não apenas aumentou a performance das aplicações, mas também facilitou a integração de novas funcionalidades, alinhando o produto às expectativas atuais do mercado",
    },
    {
      id: 5,
      company: "INCICLE",
      period: "2020 - 2020",
      position: "Desenvolvedor Front-End Pleno",
      ecosystem:
        "REACTJS | REACT-NATIVE | TYPESCRIPT | TESTE | SCRUM | GITFLOW | SCRUM",
      description:
        "Participei do nascimento de um projeto, onde fui responsável pela construção de toda a arquitetura front-end. Desenvolvi os entry points essenciais para a integração eficaz com o backend, garantindo uma comunicação fluida entre as camadas do sistema. Além disso, configurei ferramentas de documentação que facilitaram o onboarding da equipe e melhoraram a transparência do processo de desenvolvimento. Essa abordagem não apenas otimizou o fluxo de trabalho, mas também assegurou que as melhores práticas fossem seguidas desde o início do projeto",
    },
    {
      id: 6,
      company: "M & B MARQUES E BARBOSA (SECRETARIA DE ESTADO E MEIO AMBIENTE)",
      period: "2015 - 2019",
      position: "Desenvolvedor Full-Stack",
      ecosystem:
        "ANGULARJS | WEB2PY | PYTHON | JAVASCRIPT | JQUERY | POSTGRES SQL | GIT | VIRTUAL BOX | VAGRANT",
      description:
        "Fui responsável por gerenciar toda a esteira de desenvolvimento de um software, cuidando de sua arquitetura, backend e frontend de forma independente. Contribuí para a criação de um sistema de fácil interação, que facilitou o trabalho dos funcionários ao alimentar informações de campo. Implementei um formulário digital que sincronizava com o banco de dados sempre que havia conexão com a internet, promovendo robustez e praticidade no processo de captação e lançamento de dados. Essa solução proporcionou uma economia considerável para a secretaria, reduzindo o tempo gasto em idas a campo e na inserção de informações",
    },
    {
      id: 7,
      company: "FREELANCER",
      period: "2010 - 2015",
      position: "Desenvolvedor e Técnico de Informática",
      ecosystem: "HTML | PHP | JAVASCRIPT | CSS | MYSQL",
      description:
        "Durante meu período como freelancer, trabalhei no desenvolvimento de sites personalizados e na manutenção de computadores a domicílio. Criei soluções online que atendiam às necessidades específicas de meus clientes, proporcionando uma presença digital eficaz e atraente. Além disso, realizei serviços de suporte técnico, resolvendo problemas de hardware e software diretamente nas residências dos usuários. Essa experiência não apenas aprimorou minhas habilidades técnicas, mas também fortaleceu minha capacidade de comunicação e atendimento ao cliente, garantindo satisfação e fidelização.",
    },
    {
      id: 8,
      company: "VISA TERCEIRIZAÇÃO (POLICIA FEDERAL)",
      period: "2009 - 2010",
      position: "Setor de Informática",
      ecosystem: "HTML | PHP | JAVASCRIPT | CSS | MYSQL",
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
      html2pdf().set(options).from(curriculoRef.current).save();
    }, 500);
  };

  return (
    <S.Container>
      <S.Center ref={curriculoRef} id="curriculo">
        <S.Section1>
          <S.ImgProfile>
            <S.Name>THIAGO B. CALDERA</S.Name>
            <S.Position>DESENVOLVEDOR FRONTEND</S.Position>
            <img src={photoProfile} alt="" />
          </S.ImgProfile>
          <S.ContactMe>
            <S.ContentTitle>
              <S.CircleIcon>
                <FaUser />
              </S.CircleIcon>
              <S.Title>CONTATO</S.Title>
            </S.ContentTitle>

            <S.ItemContact>
              <a href="https://whatsa.me/5568981087475/?t=Ol%C3%A1%20tudo%20bem!">
                <FaPhoneSquareAlt />
                {contact.phone}
              </a>
            </S.ItemContact>
            <S.ItemContact style={{ fontSize: "12px" }}>
              <a
                href="https://www.linkedin.com/in/thiagobc2/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin style={{ fontSize: "14px" }} />
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
              <S.CircleIcoInvert>
                <FaUserTie />
              </S.CircleIcoInvert>
              <S.Title style={{ color: "white" }}>SOBRE MIM</S.Title>
            </S.ContentTitle>
            <S.InfoInvert>
              Sou um entusiasta da tecnologia com vasta experiência com
              front-end, tendo atuado em empresas de destaque como Bradesco,
              Elofy, Synvia. Domino frameworks como React e Angular e, onde quer
              que eu esteja, busco sempre deixar uma marca positiva, agregando
              valor com dedicação e foco em resultados
            </S.InfoInvert>
          </S.Aboutme>
        </S.Section1>

        <S.Section2>
          <S.ContentDownload>
            <S.BtnDownload onClick={generatePDF}>
              <FaDownload />
              Baixar PDF
            </S.BtnDownload>
          </S.ContentDownload>
          <S.ContentTitle>
            <S.CircleIcon>
              <FaBookReader />
            </S.CircleIcon>
            <S.Title>EDUCAÇÃO</S.Title>
          </S.ContentTitle>
          {educations.map((education, index) => (
            <ItemEducation key={education.id} {...education} />
          ))}
          <S.ContentTitle>
            <S.CircleIcon>
              <FaSuitcase />
            </S.CircleIcon>
            <S.Title>EXPERIÊNCIA PROFISSIONAL</S.Title>
          </S.ContentTitle>
          {jobs.map((job) => (
            <ItemJob key={job.id} {...job} />
          ))}
          <S.ContentTitle>
            <S.CircleIcon>
              <FaChartPie />
            </S.CircleIcon>
            <S.Title>HABILIDADES</S.Title>
          </S.ContentTitle>
          <ListRating items={ecosystems} />
          <S.ContentTitle>
            <S.CircleIcon>
              <FaGlobeAmericas />
            </S.CircleIcon>
            <S.Title>IDIOMAS</S.Title>
          </S.ContentTitle>
          <ListMakers items={languages} />
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
